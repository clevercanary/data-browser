import fs from "fs";
import { updateBdcSources } from "./update-bdc-sources";
import { updateCrdcSource } from "./update-crdc-source";

const sourcePath = "ncpi-catalog/files/dashboard-source-ncpi.tsv";

async function updateNcpiSource(): Promise<void> {
  const BDCIds = await updateBdcSources(sourcePath);
  const BDCRows = BDCIds.map((newId) => ["BDC", newId]);

  const CRDCIds = await updateCrdcSource();
  const CRDCRows = CRDCIds.map((newId) => ["CRDC", newId]); // TODO: don't hardcode "CRDC"
  appendToTsv(sourcePath, CRDCRows);
  appendToTsv(sourcePath, BDCRows);
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

updateNcpiSource();
