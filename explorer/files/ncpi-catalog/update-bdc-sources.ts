import fetch from "node-fetch";
import { parseContentRows, readFile } from "../../app/utils/tsvParser";
import { SOURCE_FIELD_KEY, SOURCE_FIELD_TYPE } from "./constants";
import { dbGapId, NCPIPlatformStudy } from "./entities";

const urlBDC =
  "https://gen3.biodatacatalyst.nhlbi.nih.gov/mds/metadata?_guid_type=discovery_metadata&data=false&limit=500";

type BDCElement = string;
type BDCResponse = BDCElement[];

export async function updateBdcSources(sourcePath: string): Promise<dbGapId[]> {
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
    .filter((study) => study.platform === "BDC")
    .map((study) => study.dbGapId);

  // Get studies from BDC api
  const data = await fetch(urlBDC);
  const BDCJson = (await data.json()) as BDCResponse;
  const BDCIds = BDCJson.map((studyId) => studyId?.split(".")[0]).filter(
    (studyId) => studyId?.startsWith("phs")
  );
  return [...new Set(BDCIds)].filter((id) => !BDCSourceIds.includes(id));
}
