// App dependencies
import { METADATA_KEY, SUMMARY } from "./entities";
import {
  calculateSummaryTotalCellCount,
  calculateSummaryFileFormatsCount,
  getSummaryCount,
  getTotalFileSize,
} from "./utils";
import { SummaryResponse } from "../../../models/responses";

// Template constants
const {
  DONORS,
  ESTIMATED_CELLS,
  FILES,
  FILE_FORMATS,
  FILE_SIZE,
  SPECIES,
  SPECIMENS,
} = SUMMARY;

/**
 * Functions binding summary response API to summary count.
 */
export const BIND_SUMMARY_RESPONSE_FN = {
  [DONORS]: (r: SummaryResponse) => getSummaryCount(r, "donorCount"),
  [ESTIMATED_CELLS]: calculateSummaryTotalCellCount,
  [FILES]: (r: SummaryResponse) => getSummaryCount(r, "fileCount"),
  [FILE_FORMATS]: calculateSummaryFileFormatsCount,
  [FILE_SIZE]: getTotalFileSize,
  [SPECIES]: (r: SummaryResponse) => getSummaryCount(r, "speciesCount"),
  [SPECIMENS]: (r: SummaryResponse) => getSummaryCount(r, "specimenCount"),
};

/**
 * Value for displaying pluralized metadata labels, for example, "tissues" or "diseases".
 * TODO refine with https://github.com/clevercanary/data-browser/issues/128
 */
export const PLURALIZED_METADATA_LABEL = {
  [METADATA_KEY.SPECIES]: "species",
};

/**
 * Set of summary labels.
 */
export const SUMMARY_LABEL = {
  [DONORS]: "Donors",
  [ESTIMATED_CELLS]: "Estimated Cells",
  [FILES]: "Files",
  [FILE_FORMATS]: "Files",
  [FILE_SIZE]: "File Size",
  [SPECIES]: "Species",
  [SPECIMENS]: "Specimens",
};
