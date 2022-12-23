import {
  sanitizeString,
  sanitizeStringArray,
} from "../../../../viewModelBuilders/common/utils";
import { AltosLabsCatalogExperiment } from "./entities";

/**
 * Returns the Altos Labs catalog experiment sanitized.
 * @param altosLabsCatalogExperiment - Experiment for sanitization.
 * @returns sanitized Altos Labs catalog experiment.
 */
export function AltosLabsExperimentInputMapper(
  altosLabsCatalogExperiment: AltosLabsCatalogExperiment
): AltosLabsCatalogExperiment {
  const altosLabsExperiment: AltosLabsCatalogExperiment = {
    assay: sanitizeString(altosLabsCatalogExperiment.assay),
    doi: sanitizeString(altosLabsCatalogExperiment.doi),
    experimentType: altosLabsCatalogExperiment.experimentType,
    initiative: altosLabsCatalogExperiment.initiative, // Expected value "APP".
    shorthand: sanitizeString(altosLabsCatalogExperiment.shorthand),
    species: sanitizeStringArray(altosLabsCatalogExperiment.species),
    tissue: sanitizeStringArray(altosLabsCatalogExperiment.tissue),
    title: sanitizeString(altosLabsCatalogExperiment.title),
  };
  return altosLabsExperiment;
}

/**
 * Returns the id of the experiment.
 * @param altosLabsCatalogExperiment - Altos Lab catalog experiment.
 * @returns String value of doi.
 */
export const getDOIId = (
  altosLabsCatalogExperiment: AltosLabsCatalogExperiment
): string => altosLabsCatalogExperiment.doi || "";
