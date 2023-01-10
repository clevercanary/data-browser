import { stringify } from "csv-stringify/sync";
import fs from "fs";
import { SOURCE_FIELD_KEY } from "./constants";
import { dbGapId, NCPIPlatformStudy } from "./entities";

export const sourcePath = "ncpi-catalog/files/dashboard-source-ncpi.tsv";

export function replaceTsv(path: string, data: string[][]): void {
  const stringifiedOut = stringify(data, { delimiter: "\t" });

  fs.writeFileSync(path, stringifiedOut);
  console.log("Source updated!");
}

export function mergeSourceStudies(
  sourceStudies: NCPIPlatformStudy[],
  studyType: string,
  dbGapIds: dbGapId[]
): string[][] {
  const newStudyRows = dbGapIds.map((id) => [studyType, id]);
  const unrelatedStudyRows = sourceStudies
    .filter((study) => study.platform !== studyType)
    .map((study) => [study.platform, study.dbGapId]);
  return unrelatedStudyRows.concat(newStudyRows).sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0].localeCompare(b[0]);
    }
    return parseInt(a[1].split("phs")[1]) - parseInt(b[1].split("phs")[1]);
  });
}

export function addNCPIHeader(rows: string[][]): string[][] {
  return [[SOURCE_FIELD_KEY.platform, SOURCE_FIELD_KEY.identifier]].concat(
    rows
  );
}

export function reportStudyResults(ids: dbGapId[]): void {
  console.log(
    `${ids.length} entries added, dbGap ids (if any) follow:\n${ids.join("\n")}`
  );
}
