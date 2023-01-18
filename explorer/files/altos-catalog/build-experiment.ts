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
  const s3UrisByShorthand = getS3UriByShorthand(altosLabsCatalogFile);
  return altosLabsCatalogs.map(
    (experiment: AltosLabsCatalog): AltosLabsCatalogExperiment => {
      return {
        ...experiment,
        ...{
          s3Uris: s3UrisByShorthand[experiment.shorthand] || [],
        },
      };
    }
  );
}

/**
 * Returns an object mapping shorthand to a list of S3 URIs.
 * @param altosLabsCatalogFiles - Altos Labs catalog file entities.
 * @returns object mapping shorthand to a list of S3 URIs.
 */
function getS3UriByShorthand(
  altosLabsCatalogFiles: AltosLabsCatalogFile[]
): Record<string, string[]> {
  const s3UrisByShorthand: Record<string, string[]> = {};
  for (const altosLabsCatalogFile of altosLabsCatalogFiles) {
    (
      s3UrisByShorthand[altosLabsCatalogFile.shorthand] ||
      (s3UrisByShorthand[altosLabsCatalogFile.shorthand] = [])
    ).push(altosLabsCatalogFile.s3Uri);
  }
  return s3UrisByShorthand;
}
