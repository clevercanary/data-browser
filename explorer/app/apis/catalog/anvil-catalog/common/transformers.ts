import { Breadcrumb } from "../../../../components/common/Breadcrumbs/breadcrumbs";
import {
  AnVILCatalogConsortium,
  AnVILCatalogEntity,
  AnVILCatalogStudy,
  AnVILCatalogWorkspace,
} from "./entities";

// /**
//  * Returns the consent code.
//  * @param anvilCatalogWorkspace - AnVIL catalog workspace.
//  * @returns String value of consent code.
//  */
// export const getConsentCode = (
//   anvilCatalogWorkspace: AnVILCatalogWorkspace
// ): string => anvilCatalogWorkspace.consentCode ?? "";

// /**
//  * Returns the consent codes.
//  * @param anvilCatalogEntity - AnVIL catalog entity.
//  * @returns Array of consent codes.
//  */
// export const getConsentCodes = (
//   anvilCatalogEntity: Exclude<AnVILCatalogEntity, AnVILCatalogWorkspace>
// ): string[] => anvilCatalogEntity.consentCode ?? []; // consentCodes - a list of consent codes.

/**
 * Returns the consortium.
 * @param anvilCatalogEntity - AnVIL catalog entity.
 * @returns String value of consortium.
 */
export const getConsortium = (anvilCatalogEntity: AnVILCatalogEntity): string =>
  anvilCatalogEntity.consortium ?? "";

// /**
//  * Returns the data types.
//  * @param anvilCatalogEntity - AnVIL catalog entity.
//  * @returns Array of data types.
//  */
// export const getDataTypes = (
//   anvilCatalogEntity: AnVILCatalogEntity
// ): string[] => anvilCatalogEntity.dataTypes ?? [];

/**
 * Returns the dbGapId.
 * @param workspaceOrStudy - AnVIL catalog entity.
 * @returns String value of dbGapId.
 */
export const getDbGapId = (
  workspaceOrStudy: Exclude<AnVILCatalogEntity, AnVILCatalogConsortium>
): string => workspaceOrStudy.dbGapId || "";

// /**
//  * Returns the dbGapIds.
//  * @param anvilCatalogConsortium - AnVIL catalog consortium.
//  * @returns Array of dbGapIds.
//  */
// export const getDbGapIds = (
//   anvilCatalogConsortium: AnVILCatalogConsortiumCatalogEntry
// ): string[] => anvilCatalogConsortium.dbGapId || []; // dbGapIds - a list of study identifiers.

// /**
//  * Returns the diseases (indications).
//  * @param anvilCatalogEntity - AnVIL catalog entity.
//  * @returns Array of diseases (indications).
//  */
// export const getDiseases = (anvilCatalogEntity: AnVILCatalogEntity): string[] =>
//   anvilCatalogEntity.diseases ?? [];

// /**
//  * Returns the participant count.
//  * @param anvilCatalogEntity - AnVIL catalog entity.
//  * @returns The number of participants in the entity.
//  */
// export const getParticipantCount = (
//   anvilCatalogEntity: AnVILCatalogEntity
// ): number => anvilCatalogEntity.participantCount ?? 0;

/**
 * Returns dataset related breadcrumbs.
 * TODO revisit location
 * @param firstCrumb - First breadcrumb.
 * @param response - Response model return from datasets or dataset API endpoints.
 * @returns dataset breadcrumbs.
 */
export function getStudyBreadcrumbs(
  firstCrumb: Breadcrumb,
  response: AnVILCatalogStudy
): Breadcrumb[] {
  const studyName = response.studyName;
  const breadcrumbs = [firstCrumb];
  if (studyName) {
    breadcrumbs.push({ path: "", text: studyName });
  }
  return breadcrumbs;
}

// /**
//  * Returns the dbGaP study description.
//  * @param anvilCatalogStudy - the study to extract the description from.
//  * @returns The dbGaP study description or "" if it does not exist.
//  */
// export const getStudyDescription = (
//   anvilCatalogStudy: AnVILCatalogStudyCatalogEntry
// ): string => anvilCatalogStudy.studyDescription ?? "";

// /**
//  * Returns the study designs.
//  * @param anvilCatalogEntity - AnVIL catalog entity.
//  * @returns Array of study designs.
//  */
// export const getStudyDesigns = (
//   anvilCatalogEntity: AnVILCatalogEntity
// ): string[] => anvilCatalogEntity.studyDesigns ?? [];

// /**
//  * Maps dataset-related information, included formatted display text from API response.
//  * @param anvilCatalogStudy - the study to use to extract details.
//  * @returns data summaries key-value pairs of data summary label and corresponding value.
//  */
// export function getStudyDetails(
//   anvilCatalogStudy: AnVILCatalogStudyCatalogEntry
// ): KeyValues {
//   const consortium = anvilCatalogStudy.consortium;
//   const phsID = anvilCatalogStudy.dbGapId;
//   const details = new Map<Key, Value>();
//   details.set("Consortium", consortium);
//   details.set("PHSID", phsID);
//   return details;
// }

// /**
//  * Returns the dbGaP study name.
//  * @param workspaceOrStudy - the workspace or study to use to extract the study name/title.
//  * @returns The dbGaP study name or "" if it does not exist.
//  */
// export const getStudyName = (
//   workspaceOrStudy: Exclude<
//     AnVILCatalogEntity,
//     AnVILCatalogConsortiumCatalogEntry
//   >
// ): string => workspaceOrStudy.studyName ?? "";

/**
 * Returns the terra workspace count.
 * @param anvilCatalogStudy - AnVIL catalog study.
 * @returns The number of terra workspaces in the study.
 */
export const getTerraWorkspaceCount = (
  anvilCatalogStudy: AnVILCatalogStudy
): number => anvilCatalogStudy.workspaceCount ?? 0;

/**
 * Returns the terra workspace name.
 * @param anvilCatalogWorkspace - AnVIL catalog workspace.
 * @returns String value of terra workspace name.
 */
export const getTerraWorkspaceName = (
  anvilCatalogWorkspace: AnVILCatalogWorkspace
): string => anvilCatalogWorkspace.workspaceName ?? "";

// /**
//  * Returns the terra workspace names.
//  * @param anvilCatalogEntity - AnVIL catalog entity.
//  * @returns Array of terra workspace names.
//  */
// export const getTerraWorkspaceNames = (
//   anvilCatalogEntity: Exclude<
//     AnVILCatalogEntity,
//     AnVILCatalogWorkspaceCatalogEntry
//   >
// ): string[] => anvilCatalogEntity.workspaceName ?? []; // workspaceNames - a list of workspace names.
