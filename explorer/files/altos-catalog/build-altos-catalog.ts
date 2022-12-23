import { AltosLabsCatalog } from "../../app/apis/catalog/altos-labs-catalog/common/entities";
import {
  parseContentRows,
  parseDatumValue,
  readFile,
} from "../../app/utils/tsvParser";
import { writeAsJSON } from "../common/utils";
import { buildAltosLabCatalogExperiment } from "./build-experiment";
import {
  FILE_NAME_TYPE,
  SOURCE_FIELD_KEY,
  SOURCE_FIELD_PROPERTY,
  SOURCE_FIELD_TYPE,
} from "./constants";
import {
  AltosLabsCatalogFile,
  ExperimentTypeKeyFileName,
  EXPERIMENT_TYPE,
} from "./entities";

console.log("Building Altos Catalog Data");
export {};

const tsvPaths = [
  "altos-catalog/files/public-datasets-perturbational.tsv",
  "altos-catalog/files/public-datasets-reprogramming.tsv",
];

/**
 * Read and parse the Altos Labs TSVs, join them, generate related list views and save.
 */
async function buildCatalog(): Promise<void> {
  // Map raw tsv file name to experiment type.
  const experimentTypeByFileName = getExperimentTypeByFileName();
  // Read and parse the raw tsv files.
  const altosLabsCatalogs = [] as AltosLabsCatalog[];
  for (const path of tsvPaths) {
    // Read the file.
    const file = await readFile(path);
    if (!file) {
      throw new Error(`File ${path} not found`);
    }
    // Parse file contents.
    const rows = (await parseContentRows(
      file,
      "\t",
      SOURCE_FIELD_KEY,
      SOURCE_FIELD_TYPE
    )) as AltosLabsCatalogFile[];
    // Determine experiment type.
    const experimentType = experimentTypeByFileName.get(path);
    if (!experimentType) {
      throw new Error(`Experiment type not defined for ${path}`);
    }
    // Consolidate contents into desired Altos Labs shape.
    const catalogs = buildAltosLabsCatalog(rows, experimentType);
    altosLabsCatalogs.push(...catalogs);
  }

  /**
   * Build the experiment catalog.
   */
  const anVILCatalogExperiment =
    buildAltosLabCatalogExperiment(altosLabsCatalogs);

  /**
   * Write out the resulting files.
   */
  console.log("Experiment:", anVILCatalogExperiment.length);
  await writeAsJSON(
    "altos-catalog/out/altos-catalog-experiment.json",
    Object.fromEntries(anVILCatalogExperiment.entries())
  );
}

/**
 * Returns Altos Labs Catalog.
 * @param rows - Altos Labs catalog file rows.
 * @param experimentType - Experiment type.
 * @returns Altos Labs Catalog.
 */
function buildAltosLabsCatalog(
  rows: AltosLabsCatalogFile[],
  experimentType: EXPERIMENT_TYPE
): AltosLabsCatalog[] {
  return rows.map((r) => {
    const row = {} as AltosLabsCatalog;
    for (const [fieldKey, rowKey] of Object.entries(SOURCE_FIELD_KEY)) {
      const key =
        SOURCE_FIELD_PROPERTY[fieldKey as keyof typeof SOURCE_FIELD_KEY];
      let value = r[rowKey as keyof AltosLabsCatalogFile] || "";
      if (!value) {
        const fieldType =
          SOURCE_FIELD_TYPE[fieldKey as keyof typeof SOURCE_FIELD_KEY];
        value = parseDatumValue(
          value,
          fieldType
        ) as unknown as keyof typeof SOURCE_FIELD_PROPERTY;
      }
      Object.assign(row, { [key]: value });
    }
    return { ...row, ...{ experimentType, initiative: "APP" } };
  });
}

/**
 * Returns a map key-value pair file name and experiment type.
 * @returns key-value pair file name and experiment type.
 */
function getExperimentTypeByFileName(): Map<string, EXPERIMENT_TYPE> {
  return new Map(
    (Object.entries(FILE_NAME_TYPE) as ExperimentTypeKeyFileName[]).map(
      ([key, value]) => {
        return [value, EXPERIMENT_TYPE[key]];
      }
    )
  );
}

buildCatalog();
