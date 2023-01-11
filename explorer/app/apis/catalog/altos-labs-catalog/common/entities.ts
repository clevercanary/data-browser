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
  NCBITaxonomyID?: string[];
  shorthand: string;
  species: string[];
  tissue: string[];
  title: string;
}

export type AltosLabsCatalogEntity = AltosLabsCatalogExperiment;

export type AltosLabsCatalogExperiment = AltosLabsCatalog;
