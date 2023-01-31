import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import {
  AltosLabsCatalog,
  AltosLabsCatalogFile,
} from "../../app/apis/catalog/altos-labs-catalog/common/entities";
import {
  parseContentRows,
  parseDatumValue,
  readDir,
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
import { ExperimentTypeKeyFileName, EXPERIMENT_TYPE } from "./entities";
import { TaxonomySpecies } from "./taxonomy";

console.log("Building Altos Catalog Data");
export {};

const altosDir = "../../../altos-data-browser/files/altos-catalog/";
const filesTsvFileName = "public-datasets-files.tsv";
const experimentsTsvFileNames = [
  "public-datasets-perturbational.tsv",
  "public-datasets-reprogramming.tsv",
];

/**
 * Read and parse the Altos Labs TSVs, join them, generate related list views and save.
 */
async function buildCatalog(): Promise<void> {
  // Map raw tsv file name to experiment type.
  const experimentTypeByFileName = getExperimentTypeByFileName();
  // Map abstract to shorthand.
  const abstractByShorthand = await getAbstractByShorthand();
  // Read and parse the raw tsv files.
  const altosLabsCatalogs = [] as AltosLabsCatalog[];
  for (const fileName of experimentsTsvFileNames) {
    // Determine experiment type.
    const experimentType = experimentTypeByFileName.get(fileName);
    if (!experimentType) {
      throw new Error(`Experiment type not defined for ${fileName}`);
    }
    // Convert spreadsheet.
    const catalogs = await convertSpreadsheet<AltosLabsCatalog>(
      `${altosDir}files/${fileName}`,
      SOURCE_FIELD_KEY,
      SOURCE_FIELD_TYPE,
      SOURCE_FIELD_PROPERTY,
      (row: AltosLabsCatalog): AltosLabsCatalog => {
        const description = abstractByShorthand.get(row.shorthand) || null;
        const species = row.NCBITaxonomyID.map(
          (id) => TaxonomySpecies[id as keyof typeof TaxonomySpecies]
        );
        return {
          ...row,
          ...{
            collection: "APP Public Data",
            description,
            experimentType,
            species,
          },
        };
      }
    );
    // Filter out any experiments with an undefined shorthand.
    const filteredCatalogs = catalogs.filter((row) => row.shorthand);
    altosLabsCatalogs.push(...filteredCatalogs);
  }

  /**
   * Build the file catalog.
   */
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
    `${altosDir}out/altos-catalog-file.json`,
    Object.fromEntries(altosLabsCatalogFile.entries())
  );
  console.log("Experiment:", altosLabsCatalogExperiment.length);
  await writeAsJSON(
    `${altosDir}out/altos-catalog-experiment.json`,
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
  // Convert spreadsheet.
  return await convertSpreadsheet<AltosLabsCatalogFile>(
    `${altosDir}files/${filesTsvFileName}`,
    FILES_SOURCE_FIELD_KEY,
    FILES_SOURCE_FIELD_TYPE,
    FILES_SOURCE_FIELD_PROPERTY,
    (row: AltosLabsCatalogFile): AltosLabsCatalogFile => ({
      ...experimentByShorthand[row.shorthand],
      ...row,
    })
  );
}

/**
 * Reads a TSV file and converts it to an array of row objects following a given shape.
 * @param path - TSV file path.
 * @param FIELD_KEY - Field column names.
 * @param FIELD_TYPE - Field types.
 * @param FIELD_PROPERTY - Field property names.
 * @param rowCallback - Function called to finalize row object.
 * @returns array of rows in desired shape.
 */
async function convertSpreadsheet<RowType extends object>(
  path: string,
  FIELD_KEY: Record<string, string>,
  FIELD_TYPE: Record<string, string>,
  FIELD_PROPERTY: Record<string, string>,
  rowCallback?: (x: RowType) => RowType
): Promise<RowType[]> {
  // Read the file.
  const file = await readFile(path);
  if (!file) {
    throw new Error(`File ${path} not found`);
  }
  // Parse file contents.
  const rows = (await parseContentRows(
    file,
    "\t",
    FIELD_KEY,
    FIELD_TYPE
  )) as Record<string, string>[];
  // Consolidate contents into desired Altos Labs shape.
  return rows.map((r) => {
    const row = {} as RowType;
    for (const [fieldKey, rowKey] of Object.entries(FIELD_KEY)) {
      const key = FIELD_PROPERTY[fieldKey];
      const valueString = r[rowKey] || "";
      let value: unknown = valueString;
      if (!value) {
        const fieldType = FIELD_TYPE[fieldKey];
        value = parseDatumValue(valueString, fieldType);
      }
      Object.assign(row, { [key]: value });
    }
    return rowCallback ? rowCallback(row) : row;
  });
}

/**
 * Reads and serializes each MDX abstract file and returns a map key-value pair shortname and abstract.
 * @returns key-value pair shortname and abstract.
 */
async function getAbstractByShorthand(): Promise<
  Map<string, MDXRemoteSerializeResult>
> {
  const abstractByShorthand: Map<string, MDXRemoteSerializeResult> = new Map();
  // Read the abstract file names.
  const fileNames = (await readDir(`${altosDir}files/abstracts`)) || [];
  // Read each file and serialize the contents.
  for (const fileName of fileNames) {
    const file = await readFile(`${altosDir}files/abstracts/${fileName}`);
    if (!file) {
      throw new Error(`File ${fileName} not found`);
    }
    const mdxSource = await serialize(file, {
      mdxOptions: { development: false }, // See https://github.com/hashicorp/next-mdx-remote/issues/307#issuecomment-1363415249 and https://github.com/hashicorp/next-mdx-remote/issues/307#issuecomment-1378362096.
    });
    abstractByShorthand.set(fileName.split(".")[0], mdxSource);
  }
  return abstractByShorthand;
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
