/**
 * Model of Altos Labs catalog.
 */
export interface AltosLabsCatalog {
  bucketName: string;
  bucketSize: number;
  COL: string;
  consentLongName: string;
  consentTitle: string;
  consortium: string;
  discoveryCount: number;
  diseaseText: string;
  DS: string;
  familyCount: number;
  GRU: string;
  GSO: string;
  HMB: string;
  IRB: string;
  "library:datatype": string[];
  "library:dataUseRestriction": string;
  "library:indication": string[];
  "library:studyDesign": string[];
  MDS: string;
  name: string;
  NPU: string;
  NRES: string;
  participantCount: number;
  phsId: string;
  PUB: string;
  requestorPays: boolean;
  sampleCount: number;
  status: string;
  subjectCount: number;
}

export type AltosLabsCatalogEntity =
  | AltosLabsCatalogConsortium
  | AltosLabsCatalogStudy
  | AltosLabsCatalogWorkspace;

export interface AltosLabsCatalogConsortium {
  consentCode: string[]; // consentCodes - a list of consent codes.
  consortium: string;
  dataTypes: string[];
  dbGapId: string[]; // dbGapIds - a list of study ids.
  diseases: string[];
  participantCount: number;
  studyDesigns: string[];
  workspaceCount: number;
  workspaceName: string[]; // workspaceNames - a list of workspace names.
}

export interface AltosLabsCatalogStudy {
  consentCode: string[]; // consentCodes - a list of consent codes.
  consortium: string;
  dataTypes: string[];
  dbGapId: string;
  diseases: string[];
  participantCount: number;
  studyDesigns: string[];
  workspaceCount: number;
  workspaceName: string[]; // workspaceNames - a list of workspace names.
}

export interface AltosLabsCatalogWorkspace {
  consentCode: string;
  consortium: string;
  dataTypes: string[];
  dbGapId: string;
  diseases: string[];
  participantCount: number;
  studyDesigns: string[];
  workspaceName: string;
}
