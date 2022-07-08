// App dependencies
import { MetadataValue } from "./entities";
import { SummaryResponse } from "../../../models/responses";

/**
 * Calculates the summary file format count using count values returned for each file format in the summary response.
 * @param summaryResponse - Response model return from summary API.
 * @returns count of file formats.
 */
export function calculateSummaryFileFormatsCount(
  summaryResponse: SummaryResponse
): number {
  return (summaryResponse.fileFormats ?? []).reduce((accum, { count }) => {
    return accum + count;
  }, 0);
}

/**
 * Calculates the summary total cell count using the estimatedCellCount and totalCells values fom the summary response.
 * @param summaryResponse - Response model return from summary API.
 * @returns count of total cell count.
 */
export function calculateSummaryTotalCellCount(
  summaryResponse: SummaryResponse
): number {
  return (summaryResponse.projects ?? []).reduce(
    (accum, { cellSuspensions, projects }) => {
      if (
        projects &&
        (projects.estimatedCellCount || projects.estimatedCellCount === 0)
      ) {
        accum += projects.estimatedCellCount;
      } else if (
        cellSuspensions &&
        (cellSuspensions.totalCells || cellSuspensions.totalCells === 0)
      ) {
        accum += cellSuspensions.totalCells;
      }
      return accum;
    },
    0
  );
}

/**
 * Formats count sizes.
 * @param value - Count size.
 * @returns formatted count size as display string.
 */
export function formatCountSize(value: number): string {
  const countSizes = ["k", "M", "G", "T", "P", "E"];

  // Determine count size display value and unit
  let val = value || 0;
  let sigFig = 0;
  while (val >= 1000) {
    val = val / 1000;
    sigFig += 1;
  }

  // No format of count size - tens, hundreds
  if (sigFig === 0) {
    return `${val}`;
  }

  // Format of count size to "n.0k"
  // Round value to precision
  const precision = 1;
  const roundedValue = val.toFixed(precision);
  return `${roundedValue}${countSizes[sigFig - 1]}`;
}

/**
 * Formats file sizes.
 * @param value - File size count.
 * @returns formatted file size as display string.
 */
export function formatFileSize(value: number): string {
  const fileSizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // Determine file size display value and unit
  let val = value || 0;
  let sigFig = 0;
  while (val >= 1024) {
    val = val / 1024;
    sigFig += 1;
  }

  // Prevent format of file size to "n.00 B" (display just "n B" instead)
  let precision = 2;
  if (sigFig === 0) {
    precision = 0;
  }

  // Round value to precision
  const roundedValue = val.toFixed(precision);
  return `${roundedValue} ${fileSizes[sigFig]}`;
}

/**
 * Calculates the summary count for the specified summary property key in the summary response.
 * @param summaryResponse - Response model return from summary API.
 * @param summaryKey - Summary response property key.
 * @returns count of specified summary property key.
 */
export function getSummaryCount(
  summaryResponse: SummaryResponse,
  summaryKey: keyof SummaryResponse
): number {
  return summaryResponse[summaryKey] as number;
}

/**
 * Returns the summary total file size count from the summary response API.
 * Handles special case where totalFileSize may return a string value.
 * @param summaryResponse
 * @returns count of total file size.
 */
export function getTotalFileSize(summaryResponse: SummaryResponse): number {
  if (typeof summaryResponse.totalFileSize === "string") {
    return 0;
  }
  return summaryResponse.totalFileSize;
}

/**
 * String-concatenates the specified list of metadata values to a string value, joined by a comma ",".
 * @param metadataValues - List of metadata values.
 * @returns the metadata values in a string, each value joined by a comma.
 */
export function stringifyMetadataValues(
  metadataValues: MetadataValue[]
): string {
  return metadataValues.join(", ");
}
