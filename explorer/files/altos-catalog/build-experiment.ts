import {
  AltosLabsCatalog,
  AltosLabsCatalogExperiment,
  AltosLabsCatalogFile,
} from "../../app/apis/catalog/altos-labs-catalog/common/entities";

/**
 * Returns Altos Labs catalog experiment.
 * @param altosLabsCatalogs - Altos Labs Catalog.
 * @param altosLabsCatalogFile - Altos Labs files.
 * @returns Altos Labs catalog experiment.
 */
export function buildAltosLabCatalogExperiment(
  altosLabsCatalogs: AltosLabsCatalog[],
  altosLabsCatalogFile: AltosLabsCatalogFile[]
): AltosLabsCatalogExperiment[] {
  const filesByShorthand = getFilesByShorthand(altosLabsCatalogFile);

  return altosLabsCatalogs.map(
    (experiment: AltosLabsCatalog): AltosLabsCatalogExperiment => {
      return {
        ...experiment,
        ...{
          files: filesByShorthand[experiment.shorthand] || [],
        },
      };
    }
  );
}

/**
 * Returns an object mapping shorthand to file paths array.
 * @param files - Altos Labs files.
 * @returns object mapping shorthand to file paths array.
 */
function getFilesByShorthand(
  files: AltosLabsCatalogFile[]
): Record<string, string[]> {
  const filesByShorthand: Record<string, string[]> = {};
  for (const file of files) {
    (
      filesByShorthand[file.shorthand] ||
      (filesByShorthand[file.shorthand] = [])
    ).push(file.filePath);
  }
  return filesByShorthand;
}
