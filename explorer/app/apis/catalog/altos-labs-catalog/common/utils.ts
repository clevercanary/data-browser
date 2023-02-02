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
    DOI: sanitizeString(altosLabsCatalogExperiment.DOI),
    NCBITaxonomyID: sanitizeStringArray(
      altosLabsCatalogExperiment.NCBITaxonomyID
    ),
    S3URIs: sanitizeStringArray(altosLabsCatalogExperiment.S3URIs),
    assay: sanitizeStringArray(altosLabsCatalogExperiment.assay),
    collection: altosLabsCatalogExperiment.collection,
    description: altosLabsCatalogExperiment.description,
    experimentType: altosLabsCatalogExperiment.experimentType,
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
    DOI: sanitizeString(altosLabsCatalogFile.DOI),
    S3URI: sanitizeString(altosLabsCatalogFile.S3URI),
    assay: sanitizeStringArray(altosLabsCatalogFile.assay),
    collection: altosLabsCatalogFile.collection,
    description: altosLabsCatalogFile.description,
    experimentType: altosLabsCatalogFile.experimentType,
    fileType: sanitizeString(altosLabsCatalogFile.fileType),
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
