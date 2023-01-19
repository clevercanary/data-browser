/**
 * Model of Altos Labs catalog.
 */

import { EXPERIMENT_TYPE } from "../../../../../files/altos-catalog/entities";

export interface AltosLabsCatalog {
  assay: string[];
  description: string;
  DOI: string;
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
  S3URIs: string[];
}

export interface AltosLabsCatalogFile {
  assay: string[];
  description: string;
  DOI: string;
  experimentType: EXPERIMENT_TYPE;
  fileType: string;
  initiative: string;
  NCBITaxonomyID?: string[];
  S3URI: string;
  shorthand: string;
  species: string[];
  tissue: string[];
  title: string;
}
