import * as fs from "fs";
import { parseContentRows, readFile } from "../../app/utils/tsvParser";
import {
  SOURCE_CATEGORY_KEY,
  SOURCE_FIELD_KEY,
  SOURCE_FIELD_TYPE,
} from "./constants";
import { dbGapId, NCPIPlatformStudy } from "./entities";
import {
  appendToTsv,
  reportStudyResults,
  sourcePath,
} from "./ncpi-update-utils";

type anvilJsonElement = {
  dbGapId: dbGapId;
};

const anvilPath = "anvil-catalog/out/anvil-studies.json";

async function updateAnvilSource(sourcePath: string): Promise<void> {
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
  const anvilSourceIds = sourceStudies
    .filter((study) => study.platform === SOURCE_CATEGORY_KEY.ANVIL)
    .map((study) => study.dbGapId);

  // Get AnVIL studies
  let anvilJson: anvilJsonElement[];
  try {
    anvilJson = JSON.parse(fs.readFileSync(anvilPath, "utf-8"));
  } catch (err) {
    console.error(
      "AnVIL database not present at '/anvil-catalog/out/anvil-studies.json', please run 'npm run build-anvil-db' then try again."
    );
    return;
  }
  const anvilIds: dbGapId[] = [];
  for (const key in anvilJson) {
    anvilIds.push(anvilJson[key].dbGapId);
  }
  const newAnvilIds = anvilIds.filter((id) => !anvilSourceIds.includes(id));

  // Update spreadsheet
  const anvilRows = newAnvilIds.map((id) => [SOURCE_CATEGORY_KEY.ANVIL, id]);
  appendToTsv(sourcePath, anvilRows);
  reportStudyResults(newAnvilIds);
}

updateAnvilSource(sourcePath);
