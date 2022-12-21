import {
  AltosLabsCatalog,
  AltosLabsCatalogExperiment,
} from "../../app/apis/catalog/altos-labs-catalog/common/entities";

/**
 * Returns Altos Labs catalog experiment.
 * @param altosLabsCatalogs - Altos Labs Catalog.
 * @returns Altos Labs catalog experiment.
 */
export function buildAltosLabCatalogExperiment(
  altosLabsCatalogs: AltosLabsCatalog[]
): AltosLabsCatalogExperiment[] {
  return altosLabsCatalogs as AltosLabsCatalogExperiment[];
}
