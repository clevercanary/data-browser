// App dependencies
import {
  BIND_SUMMARY_RESPONSE_FN,
  PLURALIZED_METADATA_LABEL,
  SUMMARY_LABEL,
} from "./constants";
import { METADATA_KEY, SUMMARY, Summary } from "./entities";
import { SummaryResponse } from "../../../models/responses";
import { formatCountSize, formatFileSize } from "./utils";

/**
 * Returns the pluralized metadata label for the specified metadata.
 * @param metadataKey - Metadata key.
 * @returns string label describing the metadata in plural form.
 */
export function getPluralizedMetadataLabel(
  metadataKey: keyof typeof METADATA_KEY
): string {
  return PLURALIZED_METADATA_LABEL[metadataKey];
}

/**
 * Maps index summaries from summary API response.
 * @param summaryKeys - List of summary keys.
 * @param summaryResponse - Response model return from summary API.
 * @returns summary counts.
 */
export function getSummaries(
  summaryKeys: SUMMARY[],
  summaryResponse?: SummaryResponse
): Summary[] | undefined {
  if (!summaryResponse) {
    return;
  }
  return summaryKeys.map((summaryKey) => {
    const summaryBinderFn = BIND_SUMMARY_RESPONSE_FN[summaryKey];
    const count = summaryBinderFn(summaryResponse);
    const formattedCount =
      summaryKey === SUMMARY.FILE_SIZE
        ? formatFileSize(count)
        : formatCountSize(count);
    return {
      count: formattedCount,
      label: SUMMARY_LABEL[summaryKey],
    };
  });
}
