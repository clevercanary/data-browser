/**
 * Base index response interface, implemented by specific index responses.
 */
interface PaginatedResponse {
  pagination: {
    count: number;
    total: number;
    size: number;
    next?: string;
    previous?: string;
    pages: number;
    sort?: string;
    order?: "asc" | "desc";
  };
}

/**
 * Model of response returned from /index/projects API endpoint.
 */
export interface ProjectsResponse {
  entryId: string;
  protocols: {
    workflow?: string[];
    libraryConstructionApproach?: string[];
    nucleicAcidSource?: string[];
    pairedEnd?: boolean[];
  }[];
  fileTypeSummaries: {
    format: string;
    count: number;
  }[];
  donorOrganisms: {
    genusSpecies: string[];
    disease: string[];
    developmentStage: string[];
    donorCount: number;
  }[];
  samples: {
    sampleEntityType: string[];
    organ: string[];
    organPart: string[];
    disease: string[];
  }[];
  cellSuspensions?: {
    totalCells: number;
  }[];
  projects: {
    projectId: string;
    projectShortname: string;
    projectTitle: string;
    projectDescription: string;
    contributedAnalyses: object;
    estimatedCellCount: number;
    supplementaryLinks: string[];
    contributors: {
      correspondingContributor?: boolean;
      contactName: string;
      email?: string;
      institution: string;
      laboratory?: string;
      projectRole?: string;
    }[];
  }[];
}

/**
 * Model of response returned from /index/samples API endpoint.
 */
export interface SamplesResponse {
  protocols: {
    libraryConstructionApproach: string[];
  }[];
  projects: {
    projectTitle: string[];
    estimatedCellCount?: number;
  }[];
  donorOrganisms: {
    genusSpecies: string[];
    disease: string[];
  }[];
  samples: {
    id: string;
    sampleEntityType: string;
    organ: string;
  }[];
}

/**
 * Model of response returned from /index/files API endpoint.
 */
export interface FilesResponse {
  projects: {
    projectTitle: string[];
    estimatedCellCount?: number;
  }[];
  files: {
    name: string;
    uuid: string;
    format: string;
    size: number;
    contentDescription: string[];
  }[];
}

/**
 * Model of response returned from the AnVIL-specific /index/files API endpoint.
 */
export interface AnvilFilesResponse {
  activities: {
    activity_type: string[];
    data_modality: string[];
  }[];
  bundles: {
    bundleUuid: string;
    bundleVersion: string;
  }[];
  datasets: {
    dataset_name: string;
  }[];
  entryId: string;
  files: {
    accessible: boolean;
    data_modality: string[];
    date_created: string;
    document_id: string;
    file_format: string;
    file_id: string;
    file_type: string;
  }[];
  sources: {
    sourceId: string;
    sourceSpec: string;
  }[];
}

// Summary
export interface SummaryResponse {
  cellCountSummaries: {
    countOfDocsWithOrganType: number;
    organType: string[];
    totalCellCountByOrgan: number;
  }[];
  donorCount: number;
  fileCount: number;
  fileTypeSummaries: {
    count: number;
    format: string;
    matrixCellCount: number;
    totalSize: number;
  }[];
  labCount: number;
  organTypes: string[];
  projectCount: number;
  projects: {
    cellSuspensions?: {
      totalCells?: number;
    };
    projects: {
      estimatedCellCount: number;
    };
  }[];
  speciesCount: number;
  specimenCount: number;
  totalFileSize: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this type can't be determined beforehand
export interface ListResponseType<T = any> extends PaginatedResponse {
  hits: T[];
}
