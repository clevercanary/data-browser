/**
 * Model of Altos Labs catalog.
 */

import { EXPERIMENT_TYPE } from "../../../../../files/altos-catalog/entities";

export interface AltosLabsCatalog {
  assay: string[];
  description: string;
  doi: string;
  experimentType: EXPERIMENT_TYPE;
  initiative: string;
  NCBITaxonomyID: string[];
  shorthand: string;
  species: string[];
  tissue: string[];
  title: string;
}

export type AltosLabsCatalogEntity =
  | AltosLabsCatalogExperiment
  | AltosLabsCatalogFile;

export interface AltosLabsCatalogExperiment extends AltosLabsCatalog {
  files: string[];
}

export interface AltosLabsCatalogFile {
  assay: string[];
  description: string;
  doi: string;
  experimentType: EXPERIMENT_TYPE;
  filePath: string;
  fileType: string;
  initiative: string;
  NCBITaxonomyID?: string[];
  shorthand: string;
  species: string[];
  tissue: string[];
  title: string;
}
