export interface AltosLabsCatalogFile {
  "# cell types/lines"?: string; // perturbational only
  "# doses"?: string; // perturbational only
  "# guides"?: string; // perturbational only
  "# targets"?: string; // perturbational only
  "AnnData (h5ad) path"?: string; // reprogramming only
  "AnnData (h5ad) path (S3)"?: string; // perturbational only
  "cell types"?: string; // reprogramming only
  Combos?: string; // perturbational only
  Conditions: string;
  DOI: string;
  "Ingest?": string;
  "Pert Type"?: string; // perturbational only
  "Public Data Location": string;
  "Raw Data Path"?: string; // reprogramming only
  "Raw Data Path (S3)"?: string; // perturbational only
  Readout: string;
  "Reported cells total": string;
  "sample type"?: string; // reprogramming only
  Shorthand: string;
  Species: string;
  "Target type"?: string; // perturbational only
  Timepoints?: string; // perturbational only
  Tissue?: string; // perturbational only
  Title: string;
  Vector?: string; // perturbational only
}

export type ExperimentTypeKey = keyof typeof EXPERIMENT_TYPE;

export type ExperimentTypeKeyFileName = [ExperimentTypeKey, string];

export enum EXPERIMENT_TYPE {
  PERTURBATIONAL = "Perturbational",
  REPROGRAMMING = "Reprogramming",
}
