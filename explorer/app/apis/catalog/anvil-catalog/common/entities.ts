/**
 * Model of AnVIL catalog.
 */
import { sanitizeString } from "../../../../viewModelBuilders/common/utils";

export type AnVILCatalogEntity =
  | AnVILCatalogStudy
  | AnVILCatalogWorkspace
  | AnVILCatalogConsortium;

export interface AnVILCatalogConsortium {
  consentCode: string[]; // consentCodes - a list of consent codes.
  consortium: string;
  dataType: string[];
  dbGapId: string[]; // dbGapIds - a list of study ids.
  disease: string[];
  participantCount: number;
  studyDesign: string[];
  studyName: string[];
  workspaceCount: number;
  workspaceName: string[]; // workspaceNames - a list of workspace names.
}

export interface AnVILCatalogStudy {
  consentCode: string[]; // consentCodes - a list of consent codes.
  consortium: string;
  dataType: string[];
  dbGapId: string;
  disease: string[];
  participantCount: number;
  studyDescription: string;
  studyDesign: string[];
  studyName: string;
  workspaceCount: number;
  workspaceName: string[]; // workspaceNames - a list of workspace names.
}

export interface AnVILCatalogWorkspace {
  consentCode: string;
  consortium: string;
  dataType: string[];
  dbGapId: string;
  disease: string[];
  participantCount: number;
  studyDesign: string[];
  studyName: string;
  workspaceName: string;
}

/**
 * Returns the dbGapId.
 * @param workspaceOrStudy - AnVIL catalog entity.
 * @returns String value of dbGapId.
 */
export const getDbGapId = (
  workspaceOrStudy: Exclude<AnVILCatalogEntity, AnVILCatalogConsortium>
): string => workspaceOrStudy.dbGapId || "";
/**
 * Returns the terra workspace name.
 * @param anvilCatalogWorkspace - AnVIL catalog workspace.
 * @returns String value of terra workspace name.
 */
export const getTerraWorkspaceName = (
  anvilCatalogWorkspace: AnVILCatalogWorkspace
): string => anvilCatalogWorkspace.workspaceName ?? "";
/**
 * Returns the consortium.
 * @param anvilCatalogEntity - AnVIL catalog entity.
 * @returns String value of consortium.
 */
export const getConsortium = (anvilCatalogEntity: AnVILCatalogEntity): string =>
  anvilCatalogEntity.consortium ?? "";

export const anvilCatalogStudyInputMapper = (
  input: AnVILCatalogStudy
): AnVILCatalogStudy => {
  return {
    ...input,
    studyName: sanitizeString(input.studyName),
  };
};

export const anvilCatalogWorkspaceInputMapper = (
  input: AnVILCatalogWorkspace
  // eslint-disable-next-line sonarjs/no-identical-functions -- //TODO remove this duplication
): AnVILCatalogWorkspace => {
  return {
    ...input,
    studyName: sanitizeString(input.studyName),
  };
};
