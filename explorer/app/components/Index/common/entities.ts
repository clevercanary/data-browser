// App dependencies
import { HeroTitle } from "../../common/Title/title";

/**
 * Model of index title to be used as props for the Hero component.
 */
export type IndexTitle = HeroTitle;

/**
 * Set of possible metadata keys.
 * TODO refine with https://github.com/clevercanary/data-browser/issues/128
 */
export enum METADATA_KEY {
  SPECIES = "SPECIES",
}

/**
 * Model of metadata value to be used as props for the NTagCell and NTag component.
 * TODO refine type with https://github.com/clevercanary/data-browser/issues/128
 */
export type MetadataValue = string;

/**
 * Set of possible summary counts, file sizes and other summary values as part of summary response.
 */
export enum SUMMARY {
  DONORS = "DONORS",
  ESTIMATED_CELLS = "ESTIMATED_CELLS",
  FILES = "FILES",
  FILE_FORMATS = "FILE_FORMATS",
  FILE_SIZE = "FILE_SIZE",
  SPECIES = "SPECIES",
  SPECIMENS = "SPECIMENS",
}

/**
 * Model of summary to be used as props for the Hero component.
 */
export interface Summary {
  count: string;
  label: string;
}
