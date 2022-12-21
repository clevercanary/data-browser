/**
 * Model of Altos Labs catalog.
 */
export interface AltosLabsCatalog {
  doi: string;
  shorthand: string;
  species: string[];
  tissue: string[];
  title: string;
}

export type AltosLabsCatalogEntity = AltosLabsCatalogExperiment;

export type AltosLabsCatalogExperiment = AltosLabsCatalog;
