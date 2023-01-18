import {
  sanitizeString,
  sanitizeStringArray,
} from "../../../../viewModelBuilders/common/utils";
import {
  AltosLabsCatalogEntity,
  AltosLabsCatalogExperiment,
  AltosLabsCatalogFile,
} from "./entities";

/**
 * Returns the Altos Labs catalog experiment sanitized.
 * @param altosLabsCatalogExperiment - Experiment for sanitization.
 * @returns sanitized Altos Labs catalog experiment.
 */
export function AltosLabsExperimentInputMapper(
  altosLabsCatalogExperiment: AltosLabsCatalogExperiment
): AltosLabsCatalogExperiment {
  const altosLabsExperiment: AltosLabsCatalogExperiment = {
    NCBITaxonomyID: sanitizeStringArray(
      altosLabsCatalogExperiment.NCBITaxonomyID
    ),
    assay: sanitizeStringArray(altosLabsCatalogExperiment.assay),
    description: altosLabsCatalogExperiment.description,
    doi: sanitizeString(altosLabsCatalogExperiment.doi),
    experimentType: altosLabsCatalogExperiment.experimentType,
    initiative: altosLabsCatalogExperiment.initiative, // Expected value "APP".
    s3Uris: sanitizeStringArray(altosLabsCatalogExperiment.s3Uris),
    shorthand: sanitizeString(altosLabsCatalogExperiment.shorthand),
    species: sanitizeStringArray(altosLabsCatalogExperiment.species),
    tissue: sanitizeStringArray(altosLabsCatalogExperiment.tissue),
    title: sanitizeString(altosLabsCatalogExperiment.title),
  };
  return altosLabsExperiment;
}

/**
 * Returns the Altos Labs catalog file info sanitized.
 * @param altosLabsCatalogFile - File info for sanitization.
 * @returns sanitized Altos Labs catalog file info.
 */
export function AltosLabsFileInputMapper(
  altosLabsCatalogFile: AltosLabsCatalogFile
): AltosLabsCatalogFile {
  const altosLabsFile: AltosLabsCatalogFile = {
    assay: sanitizeStringArray(altosLabsCatalogFile.assay),
    description: altosLabsCatalogFile.description,
    doi: sanitizeString(altosLabsCatalogFile.doi),
    experimentType: altosLabsCatalogFile.experimentType,
    fileType: sanitizeString(altosLabsCatalogFile.fileType),
    initiative: altosLabsCatalogFile.initiative, // Expected value "APP".
    s3Uri: sanitizeString(altosLabsCatalogFile.s3Uri),
    shorthand: sanitizeString(altosLabsCatalogFile.shorthand),
    species: sanitizeStringArray(altosLabsCatalogFile.species),
    tissue: sanitizeStringArray(altosLabsCatalogFile.tissue),
    title: sanitizeString(altosLabsCatalogFile.title),
  };
  return altosLabsFile;
}

/**
 * Returns the id of the entity.
 * @param altosLabsCatalogEntity - Altos Lab catalog entity.
 * @returns String value of shorthand.
 */
export const getShorthandId = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): string => altosLabsCatalogEntity.shorthand || "";
