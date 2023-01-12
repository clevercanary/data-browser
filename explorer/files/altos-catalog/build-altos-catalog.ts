import {
  AltosLabsCatalog,
  AltosLabsCatalogFile,
} from "../../app/apis/catalog/altos-labs-catalog/common/entities";
import {
  parseContentRows,
  parseDatumValue,
  readFile,
} from "../../app/utils/tsvParser";
import { writeAsJSON } from "../common/utils";
import { buildAltosLabCatalogExperiment } from "./build-experiment";
import {
  FILES_SOURCE_FIELD_KEY,
  FILES_SOURCE_FIELD_PROPERTY,
  FILES_SOURCE_FIELD_TYPE,
  FILE_NAME_TYPE,
  SOURCE_FIELD_KEY,
  SOURCE_FIELD_PROPERTY,
  SOURCE_FIELD_TYPE,
} from "./constants";
import {
  AltosLabsCatalogFile as AltosLabsCatalogSourceFile,
  ExperimentTypeKeyFileName,
  EXPERIMENT_TYPE,
} from "./entities";
import { TaxonomySpecies } from "./taxonomy";

console.log("Building Altos Catalog Data");
export {};

const filesTsvPath = "altos-catalog/files/files.tsv";
const datasetsTsvPaths = [
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
  for (const path of datasetsTsvPaths) {
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
    )) as AltosLabsCatalogSourceFile[];
    // Determine experiment type.
    const experimentType = experimentTypeByFileName.get(path);
    if (!experimentType) {
      throw new Error(`Experiment type not defined for ${path}`);
    }
    // Consolidate contents into desired Altos Labs shape.
    const catalogs = buildAltosLabsCatalog(rows, experimentType);
    altosLabsCatalogs.push(...catalogs);
  }

  const altosLabsCatalogFile = await buildAltosLabsFiles(altosLabsCatalogs);

  /**
   * Build the experiment catalog.
   */
  const altosLabsCatalogExperiment = buildAltosLabCatalogExperiment(
    altosLabsCatalogs,
    altosLabsCatalogFile
  );

  /**
   * Write out the resulting files.
   */
  console.log("File:", altosLabsCatalogFile.length);
  await writeAsJSON(
    "altos-catalog/out/altos-catalog-file.json",
    Object.fromEntries(altosLabsCatalogFile.entries())
  );
  console.log("Experiment:", altosLabsCatalogExperiment.length);
  await writeAsJSON(
    "altos-catalog/out/altos-catalog-experiment.json",
    Object.fromEntries(altosLabsCatalogExperiment.entries())
  );
}

/**
 * Returns Altos Labs files.
 * @param altosLabsCatalogs - Altos Labs experiment catalogs.
 * @returns Altos Labs files.
 */
async function buildAltosLabsFiles(
  altosLabsCatalogs: AltosLabsCatalog[]
): Promise<AltosLabsCatalogFile[]> {
  // Map shorthand to experiment object.
  const experimentByShorthand = getExperimentByShorthand(altosLabsCatalogs);
  // Read the file.
  const file = await readFile(filesTsvPath);
  if (!file) {
    throw new Error(`File ${filesTsvPath} not found`);
  }
  // Parse file contents.
  const rows = (await parseContentRows(
    file,
    "\t",
    FILES_SOURCE_FIELD_KEY,
    FILES_SOURCE_FIELD_TYPE
  )) as AltosLabsCatalogSourceFile[];
  // Consolidate contents into desired Altos Labs shape.
  return rows.map((r) => {
    const row = {} as AltosLabsCatalogFile;
    for (const [fieldKey, rowKey] of Object.entries(FILES_SOURCE_FIELD_KEY)) {
      const key =
        FILES_SOURCE_FIELD_PROPERTY[
          fieldKey as keyof typeof FILES_SOURCE_FIELD_KEY
        ];
      let value = r[rowKey as keyof AltosLabsCatalogSourceFile] || "";
      if (!value) {
        const fieldType =
          FILES_SOURCE_FIELD_TYPE[
            fieldKey as keyof typeof FILES_SOURCE_FIELD_KEY
          ];
        value = parseDatumValue(
          value,
          fieldType
        ) as unknown as keyof typeof FILES_SOURCE_FIELD_PROPERTY;
      }
      Object.assign(row, { [key]: value });
    }
    return {
      ...experimentByShorthand[row.shorthand],
      ...row,
    };
  });
}

/**
 * Returns Altos Labs Catalog.
 * @param rows - Altos Labs catalog file rows.
 * @param experimentType - Experiment type.
 * @returns Altos Labs Catalog.
 */
function buildAltosLabsCatalog(
  rows: AltosLabsCatalogSourceFile[],
  experimentType: EXPERIMENT_TYPE
): AltosLabsCatalog[] {
  return rows.map((r) => {
    const row = {} as AltosLabsCatalog;
    for (const [fieldKey, rowKey] of Object.entries(SOURCE_FIELD_KEY)) {
      const key =
        SOURCE_FIELD_PROPERTY[fieldKey as keyof typeof SOURCE_FIELD_KEY];
      let value = r[rowKey as keyof AltosLabsCatalogSourceFile] || "";
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
    const species = (row.NCBITaxonomyID || []).map(
      (id) => TaxonomySpecies[id as keyof typeof TaxonomySpecies]
    );
    return {
      ...row,
      ...{
        description: "None", // TODO description
        experimentType,
        initiative: "APP",
        species,
      },
    };
  });
}

/**
 * Returns an object mapping shorthand to experiment object.
 * @param experiments - Altos Labs experiments.
 * @returns object mapping shorthand to experiment object.
 */
function getExperimentByShorthand(
  experiments: AltosLabsCatalog[]
): Record<string, AltosLabsCatalog> {
  const experimentsByShorthand: Record<string, AltosLabsCatalog> = {};
  for (const experiment of experiments) {
    experimentsByShorthand[experiment.shorthand] = experiment;
  }
  return experimentsByShorthand;
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
