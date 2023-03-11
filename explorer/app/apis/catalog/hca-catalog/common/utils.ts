import {
  sanitizeString,
  sanitizeStringArray,
} from "@clevercanary/data-explorer-ui/lib/viewModelBuilders/common/utils";
import { HCACatalogProject } from "./entities";

/**
 * Returns the id of the project.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns String value of uuid.
 */
export const getProjectId = (hcaCatalogProject: HCACatalogProject): string =>
  hcaCatalogProject.uuid;

export const hcaCatalogProjectInputMapper = (
  input: HCACatalogProject
): HCACatalogProject => {
  return {
    ...input,
    contributor: sanitizeStringArray(input.contributor),
    funder: sanitizeStringArray(input.funder),
    institution: sanitizeStringArray(input.institution),
    laboratory: sanitizeStringArray(input.laboratory),
    organ: sanitizeStringArray(input.organ),
    projectTitle: sanitizeString(input.projectTitle),
    species: sanitizeStringArray(input.species),
    technology: sanitizeStringArray(input.technology),
  };
};
