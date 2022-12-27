import fs from "fs";
import fetch from "node-fetch";
import { parseContentRows, readFile } from "../../app/utils/tsvParser";
import { SOURCE_FIELD_KEY, SOURCE_FIELD_TYPE } from "./constants";
import { NCPIPlatformStudy } from "./entities";

const urlCRDC =
  "https://api.gdc.cancer.gov/projects?from=0&size=100&sort=project_id:asc&pretty=true";
const sourcePath = "ncpi-catalog/files/dashboard-source-ncpi.tsv";

type CRDCElement = {
  dbgap_accession_number: string;
  id: string;
  project_id: string;
};

type CRDCResponse = {
  data: {
    hits: CRDCElement[];
  };
};

async function updateCrdcSource(): Promise<void> {
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
  const CRDCSourceIds = sourceStudies
    .filter((study) => study.platform === "CRDC")
    .map((study) => study.dbGapId);

  // Get the studies from CRDC api
  const data = await fetch(urlCRDC);
  const CRDCJson = (await data.json()) as CRDCResponse;

  // Get IDs not contained in the source
  const ids = studyParser(CRDCJson);
  const newIds = ids.filter((id) => !CRDCSourceIds.includes(id));
  const newRows = newIds.map((newId) => ["CRDC", newId]);

  // Update the TSV file
  appendToTsv(sourcePath, newRows);

  // Report changes
  console.log(`${newIds.length} studies added. Ids (if any) follow:`);
  console.log(newIds.join("\n"));
}

function studyParser(studyJson: CRDCResponse): string[] {
  const studies = studyJson.data.hits;
  return studies
    .map((study) => study.dbgap_accession_number)
    .filter((id) => id !== "" && id !== null && id !== undefined);
}

function appendToTsv(path: string, data: string[][]): void {
  let out = "";
  for (const row of data) {
    let line = "";
    for (const cell of row) {
      line += `${cell}\t`;
    }
    out += `${line.slice(0, -1)}\n`;
  }
  fs.appendFile(path, out, (err) => {
    if (err) throw err;
  });
  console.log("Source updated!");
}

updateCrdcSource();
