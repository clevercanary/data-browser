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
    assay: sanitizeStringArray(altosLabsCatalogExperiment.assay),
    description: altosLabsCatalogExperiment.description,
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
 * @returns String value of shorthand.
 */
export const getShorthandId = (
  altosLabsCatalogExperiment: AltosLabsCatalogExperiment
): string => altosLabsCatalogExperiment.shorthand || "";
