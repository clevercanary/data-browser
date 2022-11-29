import { SelectedFilterValue } from "../../../../../app/apis/azul/common/entities";
import { CategoryKey } from "../../../../../app/common/entities";
import { RelatedSearchResult } from "../../../../../app/config/common/entities";

// Template variables
const DUG_KEYS = ["AnVIL", "DbGaP"];
const DUG_URL =
  "https://search.biodatacatalyst.renci.org/search-api/search_var";

/**
 * Fetches BioDataCatalyst page specified by URL and corresponding search param and returns related studies.
 * @param searchKey - Category key used as search param for related studies.
 * @param resultKey - Category key used to filter for related studies.
 * @param selectedCategoryValues - Selected category values used as the search parameters.
 * @returns {Promise.<*>} - Promise with a list of related studies.
 */
export async function fetchRelatedStudies(
  searchKey: CategoryKey | undefined,
  resultKey: CategoryKey | undefined,
  selectedCategoryValues: SelectedFilterValue | undefined
): Promise<RelatedSearchResult | undefined> {
  if (!searchKey || !resultKey || !selectedCategoryValues) {
    return;
  }
  const relatedStudies: string[] = [];
  for (const selectedCategoryValue of selectedCategoryValues) {
    const params = { index: "variables_index", query: selectedCategoryValue };
    const options = {
      body: JSON.stringify(params),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    try {
      const response = await fetch(DUG_URL, options);
      const { result } = await response.json();
      for (const key of DUG_KEYS) {
        result[key]?.forEach((r: { c_id: string }) => {
          const dbGapId = r.c_id?.split(".")[0];
          return relatedStudies.push(dbGapId);
        });
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }
  return { resultKey, searchKey, values: relatedStudies };
}
