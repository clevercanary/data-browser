import {
  accumulateValue,
  accumulateValues,
  sumValues,
} from "../../common/utils";
import {
  AltosLabsCatalog,
  AltosLabsCatalogConsortium,
  AltosLabsCatalogStudy,
  AltosLabsCatalogWorkspace,
} from "./entities";

/**
 * Returns Altos Labs catalog consortia.
 * @param altosLabsCatalogs - Altos Labs catalogs.
 * @returns Altos Labs catalog consortia.
 */
export function buildAltosLabsCatalogConsortia(
  altosLabsCatalogs: unknown[]
): unknown[] {
  const altosLabsCatalogConsortiaByConsortium = new Map();
  const workspaces = buildAltosLabsCatalogWorkspaces(
    altosLabsCatalogs
  ) as AltosLabsCatalogWorkspace[];

  // Build the workspaces for the consortium.
  for (const workspace of workspaces) {
    const { consortium } = workspace;
    const altosLabsCatalogConsortium =
      altosLabsCatalogConsortiaByConsortium.get(consortium) || {};
    altosLabsCatalogConsortiaByConsortium.set(
      consortium,
      buildAltosLabsCatalogConsortium(workspace, altosLabsCatalogConsortium)
    );
  }

  return [...altosLabsCatalogConsortiaByConsortium.values()];
}

/**
 * Returns Altos Labs catalog studies.
 * @param altosLabsCatalogs - Altos Labs catalogs.
 * @returns Altos Labs catalog studies.
 */
export function buildAltosLabsCatalogStudies(
  altosLabsCatalogs: unknown[]
): unknown[] {
  const studiesByStudyId = new Map();
  const workspaces = buildAltosLabsCatalogWorkspaces(
    altosLabsCatalogs
  ) as AltosLabsCatalogWorkspace[];

  // Build the studies.
  for (const workspace of workspaces) {
    const { dbGapId } = workspace;
    if (isStudy(dbGapId)) {
      const study = studiesByStudyId.get(dbGapId) || {};
      studiesByStudyId.set(
        dbGapId,
        buildAltosLabsCatalogStudy(workspace, study)
      );
    }
  }

  return [...studiesByStudyId.values()];
}

/**
 * Returns Altos Labs catalog workspaces.
 * @param altosLabsCatalogs - Altos Labs catalogs.
 * @returns Altos Labs catalog workspaces.
 */
export function buildAltosLabsCatalogWorkspaces(
  altosLabsCatalogs: unknown[]
): unknown[] {
  return (altosLabsCatalogs as AltosLabsCatalog[]).map((altosLabsCatalog) => {
    const workspace: AltosLabsCatalogWorkspace = {
      consentCode: altosLabsCatalog["library:dataUseRestriction"],
      consortium: altosLabsCatalog.consortium,
      dataTypes: altosLabsCatalog["library:datatype"],
      dbGapId: altosLabsCatalog.phsId,
      diseases: altosLabsCatalog["library:indication"],
      participantCount: altosLabsCatalog.participantCount,
      studyDesigns: altosLabsCatalog["library:studyDesign"],
      workspaceName: altosLabsCatalog.name,
    };
    return workspace;
  });
}

/**
 * Returns Altos Labs catalog consortium.
 * @param workspace - Altos Labs catalog workspace.
 * @param altosLabsCatalogConsortium - Altos Labs catalog consortium.
 * @returns Altos Labs catalog consortium.
 */
function buildAltosLabsCatalogConsortium(
  workspace: AltosLabsCatalogWorkspace,
  altosLabsCatalogConsortium: AltosLabsCatalogConsortium
): AltosLabsCatalogConsortium {
  const consentCodes = accumulateValue(
    altosLabsCatalogConsortium.consentCode, // consentCodes - a list of consent codes.
    workspace.consentCode
  );
  const consortium = workspace.consortium;
  const dataTypes = accumulateValues(
    altosLabsCatalogConsortium.dataTypes,
    workspace.dataTypes
  );
  const dbGapId = accumulateValue(
    altosLabsCatalogConsortium.dbGapId,
    workspace.dbGapId
  ); // dbGapIds - a list of study ids.
  const diseases = accumulateValues(
    altosLabsCatalogConsortium.diseases,
    workspace.diseases
  );
  const participantCount = sumValues([
    altosLabsCatalogConsortium.participantCount,
    workspace.participantCount,
  ]);
  const studyDesigns = accumulateValues(
    altosLabsCatalogConsortium.studyDesigns,
    workspace.studyDesigns
  );
  const workspaceNames = accumulateValue(
    altosLabsCatalogConsortium.workspaceName, // workspaceNames - a list of workspace names.
    workspace.workspaceName
  );
  return {
    consentCode: consentCodes,
    consortium,
    dataTypes,
    dbGapId,
    diseases,
    participantCount,
    studyDesigns,
    workspaceCount: workspaceNames.length,
    workspaceName: workspaceNames,
  };
}

/**
 * Returns Altos Labs catalog study.
 * @param workspace - Altos Labs catalog workspace.
 * @param study - Altos Labs catalog study.
 * @returns Altos Labs catalog study.
 */
function buildAltosLabsCatalogStudy(
  workspace: AltosLabsCatalogWorkspace,
  study: AltosLabsCatalogStudy
): AltosLabsCatalogStudy {
  const consentCodes = accumulateValue(
    study.consentCode, // consentCodes - a list of consent codes.
    workspace.consentCode
  );
  const consortium = workspace.consortium;
  const dataTypes = accumulateValues(study.dataTypes, workspace.dataTypes);
  const dbGapId = workspace.dbGapId;
  const diseases = accumulateValues(study.diseases, workspace.diseases);
  const participantCount = sumValues([
    study.participantCount,
    workspace.participantCount,
  ]);
  const studyDesigns = accumulateValues(
    study.studyDesigns,
    workspace.studyDesigns
  );
  const workspaceNames = accumulateValue(
    study.workspaceName, // workspaceNames - a list of workspace names.
    workspace.workspaceName
  );
  return {
    consentCode: consentCodes,
    consortium,
    dataTypes,
    dbGapId,
    diseases,
    participantCount,
    studyDesigns,
    workspaceCount: workspaceNames.length,
    workspaceName: workspaceNames,
  };
}

/**
 * Returns true if study has a valid dbGapId.
 * @param dbGapId - study identifier.
 * @returns true if the study has a valid dbGapId.
 */
function isStudy(dbGapId: string): boolean {
  if (!dbGapId) {
    return false;
  }
  return dbGapId.toLowerCase().startsWith("phs");
}
