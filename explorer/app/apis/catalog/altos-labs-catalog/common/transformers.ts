import {
  AltosLabsCatalogConsortium,
  AltosLabsCatalogEntity,
  AltosLabsCatalogStudy,
  AltosLabsCatalogWorkspace,
} from "./entities";

/**
 * Returns the consent code.
 * @param altosLabsCatalogWorkspace - Altos Labs catalog workspace.
 * @returns String value of consent code.
 */
export const getConsentCode = (
  altosLabsCatalogWorkspace: AltosLabsCatalogWorkspace
): string => altosLabsCatalogWorkspace.consentCode ?? "";

/**
 * Returns the consent codes.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Array of consent codes.
 */
export const getConsentCodes = (
  altosLabsCatalogEntity: Exclude<
    AltosLabsCatalogEntity,
    AltosLabsCatalogWorkspace
  >
): string[] => altosLabsCatalogEntity.consentCode ?? []; // consentCodes - a list of consent codes.

/**
 * Returns the consortium.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns String value of consortium.
 */
export const getConsortium = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): string => altosLabsCatalogEntity.consortium ?? "";

/**
 * Returns the data types.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Array of data types.
 */
export const getDataTypes = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): string[] => altosLabsCatalogEntity.dataTypes ?? [];

/**
 * Returns the dbGapId.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns String value of dbGapId.
 */
export const getDbGapId = (
  altosLabsCatalogEntity: Exclude<
    AltosLabsCatalogEntity,
    AltosLabsCatalogConsortium
  >
): string => altosLabsCatalogEntity.dbGapId || "";

/**
 * Returns the dbGapIds.
 * @param altosLabsCatalogConsortium - Altos Labs catalog consortium.
 * @returns Array of dbGapIds.
 */
export const getDbGapIds = (
  altosLabsCatalogConsortium: AltosLabsCatalogConsortium
): string[] => altosLabsCatalogConsortium.dbGapId || []; // dbGapIds - a list of study identifiers.

/**
 * Returns the diseases (indications).
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Array of diseases (indications).
 */
export const getDiseases = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): string[] => altosLabsCatalogEntity.diseases ?? [];

/**
 * Returns the participant count.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns The number of participants in the entity.
 */
export const getParticipantCount = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): number => altosLabsCatalogEntity.participantCount ?? 0;

/**
 * Returns the study designs.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Array of study designs.
 */
export const getStudyDesigns = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): string[] => altosLabsCatalogEntity.studyDesigns ?? [];

/**
 * Returns the terra workspace count.
 * @param altosLabsCatalogStudy - Altos Labs catalog study.
 * @returns The number of terra workspaces in the study.
 */
export const getTerraWorkspaceCount = (
  altosLabsCatalogStudy: AltosLabsCatalogStudy
): number => altosLabsCatalogStudy.workspaceCount ?? 0;

/**
 * Returns the terra workspace name.
 * @param altosLabsCatalogWorkspace - Altos Labs catalog workspace.
 * @returns String value of terra workspace name.
 */
export const getTerraWorkspaceName = (
  altosLabsCatalogWorkspace: AltosLabsCatalogWorkspace
): string => altosLabsCatalogWorkspace.workspaceName ?? "";

/**
 * Returns the terra workspace names.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Array of terra workspace names.
 */
export const getTerraWorkspaceNames = (
  altosLabsCatalogEntity: Exclude<
    AltosLabsCatalogEntity,
    AltosLabsCatalogWorkspace
  >
): string[] => altosLabsCatalogEntity.workspaceName ?? []; // workspaceNames - a list of workspace names.
