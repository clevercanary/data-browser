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
  const S3URIsByShorthand = getS3URIsByShorthand(altosLabsCatalogFile);
  return altosLabsCatalogs.map(
    (experiment: AltosLabsCatalog): AltosLabsCatalogExperiment => {
      return {
        ...experiment,
        ...{
          S3URIs: S3URIsByShorthand[experiment.shorthand] || [],
        },
      };
    }
  );
}

/**
 * Returns an object mapping shorthand to a list of S3URIs.
 * @param altosLabsCatalogFiles - Altos Labs catalog file entities.
 * @returns object mapping shorthand to a list of S3URIs.
 */
function getS3URIsByShorthand(
  altosLabsCatalogFiles: AltosLabsCatalogFile[]
): Record<string, string[]> {
  const S3URIsByShorthand: Record<string, string[]> = {};
  for (const altosLabsCatalogFile of altosLabsCatalogFiles) {
    (
      S3URIsByShorthand[altosLabsCatalogFile.shorthand] ||
      (S3URIsByShorthand[altosLabsCatalogFile.shorthand] = [])
    ).push(altosLabsCatalogFile.S3URI);
  }
  return S3URIsByShorthand;
}
