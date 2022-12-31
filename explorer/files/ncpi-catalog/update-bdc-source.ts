import fetch from "node-fetch";
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

const urlBDC =
  "https://gen3.biodatacatalyst.nhlbi.nih.gov/mds/metadata?_guid_type=discovery_metadata&data=false&limit=500";

type BDCElement = string;
type BDCResponse = BDCElement[];

export async function updateBdcSource(sourcePath: string): Promise<void> {
  // Extract the current studies from the source tsv
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
  const BDCSourceIds = sourceStudies
    .filter((study) => study.platform === SOURCE_CATEGORY_KEY.BDC)
    .map((study) => study.dbGapId);

  // Get studies from BDC api
  const data = await fetch(urlBDC);
  const BDCJson = (await data.json()) as BDCResponse;
  const newBDCIds = BDCJson.map((studyId) => studyId?.split(".")[0])
    .filter((studyId) => studyId?.startsWith("phs"))
    .filter((id) => !BDCSourceIds.includes(id));

  const newBDCRows = [...new Set(newBDCIds)].map((newId) => [
    SOURCE_CATEGORY_KEY.BDC,
    newId,
  ]);
  appendToTsv(sourcePath, newBDCRows);
  reportStudyResults(newBDCIds);
}

updateBdcSource(sourcePath);
