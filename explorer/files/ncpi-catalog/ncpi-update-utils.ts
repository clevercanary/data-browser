import fs from "fs";
import { dbGapId } from "./entities";

export const sourcePath = "ncpi-catalog/files/dashboard-source-ncpi.tsv";

export function appendToTsv(path: string, data: string[][]): void {
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

export function reportStudyResults(ids: dbGapId[]): void {
  console.log(
    `${ids.length} entries added, dbGap ids (if any) follow:\n${ids.join("\n")}`
  );
}
