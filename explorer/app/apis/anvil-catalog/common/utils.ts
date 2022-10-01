import {
  AnVILCatalog,
  AnVILCatalogStudy,
  AnVILCatalogWorkspace,
} from "./entities";

/**
 * Returns AnVIL catalog studies.
 * @param anvilCatalogs - AnVIL catalogs.
 * @returns AnVIL catalog studies.
 */
export function buildAnVILCatalogStudies(anvilCatalogs: unknown[]): unknown[] {
  const studiesByStudyId = new Map();
  const workspaces = buildAnVILCatalogWorkspaces(
    anvilCatalogs
  ) as AnVILCatalogWorkspace[];

  // Build the studies.
  for (const workspace of workspaces) {
    const { dbGapId } = workspace;
    if (isStudy(dbGapId)) {
      const study = studiesByStudyId.get(dbGapId) || {};
      studiesByStudyId.set(dbGapId, buildAnVILCatalogStudy(workspace, study));
    }
  }

  return [...studiesByStudyId.values()];
}

/**
 * Returns AnVIL catalog workspaces.
 * @param anVILCatalogs - AnVIL catalogs.
 * @returns AnVIL catalog workspaces.
 */
export function buildAnVILCatalogWorkspaces(
  anVILCatalogs: unknown[]
): unknown[] {
  return (anVILCatalogs as AnVILCatalog[]).map((anVILCatalog) => {
    const workspace: AnVILCatalogWorkspace = {
      consentCode: anVILCatalog["library:dataUseRestriction"],
      consortium: anVILCatalog.consortium,
      dataTypes: anVILCatalog["library:datatype"],
      dbGapId: anVILCatalog.phsId,
      diseases: anVILCatalog["library:indication"],
      participantCount: anVILCatalog.participantCount,
      studyDesigns: anVILCatalog["library:studyDesign"],
      workspaceName: anVILCatalog.name,
    };
    return workspace;
  });
}

/**
 * Adds a given value to an array of values and returns a list of distinct values.
 * @param values - List of values.
 * @param value - Value to add to the list of values.
 * @returns List of distinct values.
 */
function accumulateValue(values = [] as string[], value: string): string[] {
  values.push(value);
  const setOfAccumulatedValues = new Set(values);
  return [...setOfAccumulatedValues];
}

/**
 * Merges two arrays of values and returns a list of distinct values.
 * @param values01 - Distinct list of values.
 * @param values02 - Additional list of values to be concatenated.
 * @returns List of distinct values.
 */
function accumulateValues(
  values01 = [] as string[],
  values02: string[]
): string[] {
  const concatenatedValues = values01.concat(values02);
  const setOfAccumulatedValues = new Set(concatenatedValues);
  return [...setOfAccumulatedValues];
}

/**
 * Returns AnVIL catalog study.
 * @param workspace - AnVIL catalog workspace.
 * @param study - AnVIL catalog study.
 * @returns AnVIL catalog study.
 */
function buildAnVILCatalogStudy(
  workspace: AnVILCatalogWorkspace,
  study: AnVILCatalogStudy
): AnVILCatalogStudy {
  const consentCodes = accumulateValue(
    study.consentCodes,
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
    study.workspaceNames,
    workspace.workspaceName
  );
  return {
    consentCodes,
    consortium,
    dataTypes,
    dbGapId,
    diseases,
    participantCount,
    studyDesigns,
    workspaceCount: workspaceNames.length,
    workspaceNames,
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

/**
 * Sums values together.
 * @param values - Array of values.
 * @returns summed value.
 */
function sumValues(values: number[]): number {
  return values.reduce((acc, value = 0) => {
    return acc + value;
  }, 0);
}
