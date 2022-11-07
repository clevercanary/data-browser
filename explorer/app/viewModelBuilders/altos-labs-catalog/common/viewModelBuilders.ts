import {
  getConsentCode,
  getConsentCodes,
  getConsortium,
  getDataTypes,
  getDbGapId,
  getDbGapIds,
  getDiseases,
  getParticipantCount,
  getStudyDesigns,
  getTerraWorkspaceCount,
  getTerraWorkspaceName,
  getTerraWorkspaceNames,
} from "app/apis/catalog/altos-labs-catalog/common/transformers";
import {
  AltosLabsCatalogConsortium,
  AltosLabsCatalogEntity,
  AltosLabsCatalogStudy,
  AltosLabsCatalogWorkspace,
} from "../../../apis/catalog/altos-labs-catalog/common/entities";
import * as C from "../../../components";
import { METADATA_KEY } from "../../../components/Index/common/entities";
import { getPluralizedMetadataLabel } from "../../../components/Index/common/indexTransformer";

/**
 * Build props for consent code cell component from the given Altos Labs workspace.
 * @param altosLabsCatalogWorkspace - Altos Labs catalog workspace.
 * @returns Model to be used as props for the consent code cell.
 */
export const buildConsentCode = (
  altosLabsCatalogWorkspace: AltosLabsCatalogWorkspace
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: getConsentCode(altosLabsCatalogWorkspace),
  };
};

/**
 * Build props for consent codes cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the consent codes cell.
 */
export const buildConsentCodes = (
  altosLabsCatalogEntity: Exclude<
    AltosLabsCatalogEntity,
    AltosLabsCatalogWorkspace
  >
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.CONSENT_CODE),
    values: getConsentCodes(altosLabsCatalogEntity),
  };
};

/**
 * Build props for consortium cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the consortium cell.
 */
export const buildConsortium = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: getConsortium(altosLabsCatalogEntity),
  };
};

/**
 * Build props for data type cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the data type cell.
 */
export const buildDataTypes = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.DATA_TYPE),
    values: getDataTypes(altosLabsCatalogEntity),
  };
};

/**
 * Build props for dbGapId cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the dbGapId cell.
 */
export const buildDbGapId = (
  altosLabsCatalogEntity: Exclude<
    AltosLabsCatalogEntity,
    AltosLabsCatalogConsortium
  >
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: getDbGapId(altosLabsCatalogEntity),
  };
};

/**
 * Build props for dbGapIds cell component from the given Altos Labs consortium catalog.
 * @param altosLabsCatalogConsortium - Altos Labs catalog consortium.
 * @returns Model to be used as props for the dbGapIds cell.
 */
export const buildDbGapIds = (
  altosLabsCatalogConsortium: AltosLabsCatalogConsortium
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.DBGAP_ID),
    values: getDbGapIds(altosLabsCatalogConsortium),
  };
};

/**
 * Build props for disease (indication) cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the disease (indication) cell.
 */
export const buildDiseases = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.DISEASE_INDICATION),
    values: getDiseases(altosLabsCatalogEntity),
  };
};

/**
 * Build props for participant count cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the participant count cell.
 */
export const buildParticipantCount = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: getParticipantCount(altosLabsCatalogEntity),
  };
};

/**
 * Build props for study design cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the study design cell.
 */
export const buildStudyDesigns = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.STUDY_DESIGN),
    values: getStudyDesigns(altosLabsCatalogEntity),
  };
};

/**
 * Build props for terra workspace count cell component from the given Altos Labs study.
 * @param altosLabsCatalogStudy - Altos Labs catalog study.
 * @returns Model to be used as props for the terra workspace count cell.
 */
export const buildTerraWorkspaceCount = (
  altosLabsCatalogStudy: AltosLabsCatalogStudy
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: getTerraWorkspaceCount(altosLabsCatalogStudy),
  };
};

/**
 * Build props for terra workspace name cell component from the given Altos Labs workspace.
 * @param altosLabsCatalogWorkspace - Altos Labs catalog workspace.
 * @returns Model to be used as props for the terra workspace name cell.
 */
export const buildTerraWorkspaceName = (
  altosLabsCatalogWorkspace: AltosLabsCatalogWorkspace
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: getTerraWorkspaceName(altosLabsCatalogWorkspace),
  };
};

/**
 * Build props for terra workspace names cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the terra workspace names cell.
 */
export const buildTerraWorkspaceNames = (
  altosLabsCatalogEntity: Exclude<
    AltosLabsCatalogEntity,
    AltosLabsCatalogWorkspace
  >
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.WORKSPACE_NAME),
    values: getTerraWorkspaceNames(altosLabsCatalogEntity),
  };
};
