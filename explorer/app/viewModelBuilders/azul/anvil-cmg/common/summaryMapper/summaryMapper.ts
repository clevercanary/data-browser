import { stringifyValues } from "@clevercanary/data-explorer-ui/lib/common/utils";
import {
  displaySummaryTerms,
  listSelectedTermsOfFacet,
} from "@clevercanary/data-explorer-ui/lib/components/Export/components/ExportSummary/common/utils";
import { FileFacet } from "@clevercanary/data-explorer-ui/lib/hooks/useFileManifest/common/entities";
import { formatCountSize } from "@clevercanary/data-explorer-ui/lib/utils/formatCountSize";
import { ANVIL_CMG_CATEGORY_KEY } from "../../../../../../site-config/anvil-cmg/category";
import { SummaryResponse } from "../../../../../apis/azul/anvil-cmg/common/responses";
import { DEFAULT_SUMMARY } from "./constants";
import { FileSummary, SUMMARY } from "./entities";

/**
 * Returns the summary response file formats, sorted alphabetically.
 * @param summaryResponse - Response model return from summary API.
 * @returns a list of file formats.
 */
export function bindFileFormatSummaryResponse(
  summaryResponse?: SummaryResponse
): string[] {
  if (!summaryResponse || summaryResponse.fileFormats.length === 0) {
    return DEFAULT_SUMMARY.fileFormats;
  }
  return summaryResponse.fileFormats.map(({ format }) => format).sort();
}

/**
 * Create a new file summary object from the file summary response.
 * @param summaryResponse - Response model return from summary API.
 * @returns file summary.
 */
export function bindFileSummaryResponse(
  summaryResponse?: SummaryResponse
): FileSummary {
  if (!summaryResponse) {
    return DEFAULT_SUMMARY;
  }
  return {
    biosampleCount: summaryResponse.biosampleCount,
    donorCount: summaryResponse.donorCount,
    fileCount: summaryResponse.fileCount,
    fileFormats: bindFileFormatSummaryResponse(summaryResponse),
  };
}

/**
 * Maps export summary related information, included formatted display text from the given file manifest.
 * @param filesFacets - Files facets.
 * @param summary - Response model return from summary API.
 * @returns summaries key-value pairs of data summary and corresponding value.
 */
export function mapExportSummary(
  filesFacets: FileFacet[],
  summary: SummaryResponse | undefined
): Map<SUMMARY, string> {
  const fileSummary = bindFileSummaryResponse(summary);
  // Grab summary values.
  const biosampleCount = fileSummary.biosampleCount;
  const donorCount = fileSummary.donorCount;
  const fileCount = fileSummary.fileCount;
  const fileFormats = fileSummary.fileFormats;
  const organismType = listSelectedTermsOfFacet(
    filesFacets,
    ANVIL_CMG_CATEGORY_KEY.DONOR_ORGANISM_TYPE
  );
  // Map summary by summary key or display text.
  const summaryBySummaryKey = new Map<SUMMARY, string>();
  summaryBySummaryKey.set(
    SUMMARY.BIOSAMPLE_COUNT,
    formatCountSize(biosampleCount)
  ); // BioSamples
  summaryBySummaryKey.set(SUMMARY.DONOR_COUNT, formatCountSize(donorCount)); // Donors
  summaryBySummaryKey.set(
    SUMMARY.ORGANISM_TYPE,
    displaySummaryTerms(organismType)
  ); // Organism Types
  summaryBySummaryKey.set(SUMMARY.FILE_COUNT, formatCountSize(fileCount)); // Files
  summaryBySummaryKey.set(SUMMARY.FILE_FORMATS, stringifyValues(fileFormats)); // Formats
  return summaryBySummaryKey;
}
