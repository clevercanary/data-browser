import { EntityConfig } from "app/config/common/entities";
import { useCallback, useContext, useEffect, useMemo } from "react";
import {
  AzulEntitiesResponse,
  AzulEntitiesStaticResponse,
  AzulListParams,
  Filters,
} from "../apis/azul/common/entities";
import {
  transformFilters,
  transformTermFacets,
} from "../apis/azul/common/filterTransformer";
import { FilterStateContext } from "../common/context/filterState";
import {
  CategoryKey,
  CategoryValueKey,
  Pagination,
  SelectCategory,
  Sort,
} from "../common/entities";
import { useAsync } from "./useAsync";
import { OnFilterFn, useCategoryFilter } from "./useCategoryFilter";
import { useConfig } from "./useConfig";
import { getCurrentEntity, useCurrentEntity } from "./useCurrentEntity";
import { useFetcher } from "./useFetcher";
import { usePagination } from "./usePagination";
import { useSort } from "./useSort";

/**
 * Type of function called to update filter query string params and trigger re-fetch of entities.
 */
export type SetFilterFn = (nextFilters: Filters) => void;

/**
 * Model of loading state, pagination, sort, filter and data related to the fetch.
 */
interface EntitiesResponse {
  categories: SelectCategory[];
  dataEntity: EntityConfig;
  dataEntityRoute: string;
  loading: boolean;
  onFilter: OnFilterFn;
  pagination?: Pagination;
  response?: AzulEntitiesResponse;
  sort?: Sort;
}

/**
 * Hook handling the load and transformation of the values used by index pages. If the current entity loaded statically,
 * this hook will return the already loaded data. Otherwise, it will make a request for the entity's pathUrl.
 * @param staticResponse - Statically loaded data, if any.
 * @returns Model of the entities list including pagination, sort, filter and loading indicator.
 */
export const useFetchEntities = (
  staticResponse: AzulEntitiesStaticResponse | null
): EntitiesResponse => {
  // Determine type of fetch to be executed, either API endpoint or TSV.
  const { list, path, staticLoad } = useFetcher();
  const entity = useCurrentEntity();
  const config = useConfig();

  // Init fetch of entities.
  const { data, dataEntityRoute, isIdle, isLoading, run } =
    useAsync<AzulEntitiesResponse>();
  const { resetPage, ...pagination } = usePagination(run, data);
  const { sort, sortKey, sortOrder } = useSort();
  const dataEntity = getCurrentEntity(dataEntityRoute, config);

  // Generalize the filters returned from Azul.
  const categories = useMemo(() => {
    if (staticLoad || !data || !data.termFacets) {
      return [];
    }
    return transformTermFacets(data.termFacets);
  }, [data, staticLoad]);

  // Grab the filter context; use this to keep selected filter state up-to-date.
  const { filterState, setFilterState } = useContext(FilterStateContext);

  // Init filter functionality.
  const {
    categories: categoryViews,
    filter,
    onFilter,
  } = useCategoryFilter(categories, filterState);

  // Update filter state with current selected values.
  useEffect(() => {
    setFilterState(filter);
  }, [filter, setFilterState]);

  // Execute fetch of entities.
  useEffect(() => {
    // Build basic list params
    const listParams: AzulListParams = { order: sortOrder, sort: sortKey };

    // Build filter query params, if any
    const filtersParam = transformFilters(filterState);
    if (filtersParam) {
      listParams.filters = filtersParam;
    }

    // Execute the fetch.
    run(
      list(path, listParams, staticLoad ? staticResponse?.data : undefined),
      entity
    );
  }, [
    entity,
    filterState,
    list,
    path,
    run,
    sortKey,
    sortOrder,
    staticLoad,
    staticResponse?.data,
  ]);

  const handleFilterChange = useCallback(
    (
      categoryKey: CategoryKey,
      selectedCategoryValue: CategoryValueKey,
      selected: boolean
    ) => {
      onFilter(categoryKey, selectedCategoryValue, selected);
      resetPage();
    },
    [onFilter, resetPage]
  );

  return {
    categories: categoryViews,
    dataEntity,
    dataEntityRoute,
    loading: isLoading || isIdle,
    onFilter: handleFilterChange,
    pagination: staticLoad ? undefined : { ...pagination, resetPage },
    response: data,
    sort: {
      sort,
      sortKey,
      sortOrder,
    },
  };
};
