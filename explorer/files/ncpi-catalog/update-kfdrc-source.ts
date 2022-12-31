import * as fs from "fs";
import { parseContentRows, readFile } from "../../app/utils/tsvParser";
import {
  SOURCE_CATEGORY_KEY,
  SOURCE_FIELD_KEY,
  SOURCE_FIELD_TYPE,
} from "./constants";
import { NCPIPlatformStudy } from "./entities";
import {
  appendToTsv,
  reportStudyResults,
  sourcePath,
} from "./ncpi-update-utils";

const KFDRCDataPath = "ncpi-catalog/out/kfdrc-studies.json";

type KFDRCIdentifier = {
  value: string;
};

type KFDRCEntry = {
  resource: {
    id: number;
    identifier: KFDRCIdentifier[];
  };
};

type KFDRCFile = {
  entry: KFDRCEntry[];
  id: string;
};

async function updateKfdrcSource(sourcePath: string): Promise<void> {
  // Get existing studies
  const file = await readFile(sourcePath);
  if (!file) {
    throw new Error(`File ${sourcePath} not found`);
  }
  const sourceStudies = (await parseContentRows(
    file,
    "\t",
    SOURCE_FIELD_KEY,
    SOURCE_FIELD_TYPE
  )) as NCPIPlatformStudy[];
  const KFDRCSourceIds = sourceStudies
    .filter((study) => study.platform === SOURCE_CATEGORY_KEY.KFDRC)
    .map((study) => study.dbGapId);

  // Get ids from downloaded KF dataset
  let KFDRCJson: KFDRCFile;
  try {
    KFDRCJson = JSON.parse(fs.readFileSync(KFDRCDataPath, "utf-8"));
  } catch (err) {
    console.error(
      "KFDRC data not found. Please download the KFDRC data to ncpi-catalog/out/kfdrc-studies.json"
    );
    return;
  }
  const KFDRCStudies = KFDRCJson.entry;
  const KFDRCIds = KFDRCStudies.map((study) => {
    const dbGapIdArray = study.resource.identifier
      .map((studyIdentifier) => studyIdentifier.value)
      .filter((idValue) => idValue.startsWith("phs"))
      .map((longDbGap) => longDbGap.split(".")[0]);
    return dbGapIdArray[0] ?? "";
  }).filter((dbGapId) => dbGapId !== "");
  const newKFDRCIds = KFDRCIds.filter((id) => !KFDRCSourceIds.includes(id));

  // Add to source TSV
  const KFDRCRows = newKFDRCIds.map((id) => [SOURCE_CATEGORY_KEY.KFDRC, id]);
  appendToTsv(sourcePath, KFDRCRows);
  reportStudyResults(newKFDRCIds);
}

updateKfdrcSource(sourcePath);
