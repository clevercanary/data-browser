import { useContext, useEffect } from "react";
import {
  AzulEntitiesResponse,
  AzulEntitiesStaticResponse,
  AzulListParams,
} from "../apis/azul/common/entities";
import {
  transformAzulPagination,
  transformFilters,
  transformTermFacets,
} from "../apis/azul/common/filterTransformer";
import { AuthContext } from "../common/context/authState";
import {
  ExploreActionKind,
  ExploreStateContext,
} from "../common/context/exploreState";
import { Pagination } from "../common/entities";
import { useAsync } from "./useAsync";
import { getEntityServiceByPath } from "./useEntityService";
import { usePagination } from "./usePagination";

/**
 * Model of loading state, pagination, sort, filter and data related to the fetch.
 */
interface EntitiesResponse {
  loading: boolean;
  pagination?: Pagination;
  response?: AzulEntitiesResponse;
}

/**
 * Hook handling the load and transformation of the values used by index pages. If the current entity loaded statically,
 * this hook will return the already loaded data. Otherwise, it will make a request for the entity's pathUrl.
 * @param staticResponse - Statically loaded data, if any.
 * @returns Model of the entities list including pagination, sort, filter and loading indicator.
 */
export const useEntityList = (
  staticResponse: AzulEntitiesStaticResponse | null
): void => {
  // Load up the relevant contexts
  const { exploreDispatch, exploreState } = useContext(ExploreStateContext);
  const { filterState, sortState } = exploreState;
  const { sortKey, sortOrder } = sortState;

  const { token } = useContext(AuthContext);
  const { fetchEntitiesFromQuery, listStaticLoad, path } =
    getEntityServiceByPath(exploreState.tabValue); // Determine type of fetch to be executed, either API endpoint or TSV.
  const { data, isIdle, isLoading, run } = useAsync<AzulEntitiesResponse>(); // Init fetch of entities.
  const { termFacets } = data || {};
  const { resetPage, ...pagination } = usePagination(data);

  /**
   * Hook for fetching entities matching the current query and authentication state.
   * Only runs if one of its deps changes. Skipped if staticLoaded entity
   */
  useEffect(() => {
    if (!listStaticLoad) {
      // Build basic list params
      const listParams: AzulListParams = { order: sortOrder, sort: sortKey };

      // Build filter query params, if any
      const filtersParam = transformFilters(filterState);
      if (filtersParam) {
        listParams.filters = filtersParam;
      }
      // Execute the fetch.
      console.log("Fetching for:", path);
      run(fetchEntitiesFromQuery(path, listParams, token));
    }
  }, [
    fetchEntitiesFromQuery,
    filterState,
    path,
    run,
    sortKey,
    sortOrder,
    listStaticLoad,
    token,
  ]);

  // Builds categoryViews with an update of term facets.
  useEffect(() => {
    if (!listStaticLoad && termFacets) {
      exploreDispatch({
        payload: {
          listItems: data?.hits,
          loading: isLoading || isIdle,
          // pagination: { ...pagination, resetPage },
          pagination: transformAzulPagination(data?.pagination),
          selectCategories: transformTermFacets(termFacets),
        },
        type: ExploreActionKind.ProcessExploreResponse,
      });
    }
  }, [
    data?.hits,
    exploreDispatch,
    isIdle,
    isLoading,
    listStaticLoad,
    termFacets,
  ]);

  useEffect(() => {
    if (listStaticLoad) {
      exploreDispatch({
        payload: {
          listItems: staticResponse?.data?.hits ?? [],
          loading: false,
          pagination: undefined,
          selectCategories: [],
        },
        type: ExploreActionKind.ProcessExploreResponse,
      });
    }
  }, [staticResponse?.data?.hits, exploreDispatch, listStaticLoad]);

  // Exit if we're dealing with a statically-loaded entity; data has already been fetched during build; indicate
  // load is complete and return static data.
  // if (listStaticLoad) {
  //   return {
  //     loading: false,
  //     response: staticResponse?.data,
  //   };
  // }
  //
  // // Otherwise, return the fetching, pagination and sort state.
  // return {
  //   loading: isLoading || isIdle,
  //   pagination: { ...pagination, resetPage },
  //   response: data,
  // };
};
