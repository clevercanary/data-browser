import { useCallback, useEffect, useRef, useState } from "react";
import { useAsync } from "./useAsync";
import { useCurrentEntity } from "./useCurrentEntity";
import { EntityConfig } from "app/config/model";
import { useFetcher } from "./useFetcher";
import {
  AzulEntitiesStaticResponse,
  AzulEntitiesResponse,
} from "../apis/azul/common/entities";

export interface PaginationConfig {
  canNextPage: boolean;
  canPreviousPage: boolean;
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  resetPage: () => void;
}

export type SortOrderType = "asc" | "desc";

interface SortType {
  sortKey?: string;
  sortOrder?: SortOrderType;
}

export interface SortConfig extends SortType {
  sort: (key?: string, sortOrder?: SortOrderType) => void;
}

interface UseEntityListResponse {
  isLoading: boolean;
  pagination?: PaginationConfig;
  response?: AzulEntitiesResponse;
  sort?: SortConfig;
}

const DEFAULT_CURRENT_PAGE = 1;

/**
 * Determine the default sort column.
 * @param entity - Current entity config containing all column definitions.
 * @returns Column name of default sorted column, or the first column if no default is specified.
 */
const getDefaultSort = (entity: EntityConfig): string | undefined => {
  return (
    entity.list.columns.find((column) => column.sort?.default)?.sort?.sortKey ??
    entity.list.columns[0].sort?.sortKey
  );
};

/**
 * Hook handling the load and transformation of the values used by index pages. If the current entity loaded statically,
 * this hook will return the already loaded data. Otherwise, it will make a request for the entity's pathUrl.
 * @param value - Statically loaded data, if any.
 * @returns An object with the loaded data and a flag indicating is the data is loading.
 */
export const useFetchEntities = (
  value?: AzulEntitiesStaticResponse
): UseEntityListResponse => {
  const entity = useCurrentEntity();
  const currentEntity = useRef(entity);

  // Determine if the hook is allowed  to load
  const [load, setLoad] = useState<boolean>(true);

  // Determine type of fetch to be executed, either endpoint or TSV.
  const { fetchList, list, path, staticLoad } = useFetcher();

  // Init pagination-related state.
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);

  // Init sort.
  const sortType = useRef<SortType | undefined>();

  // Guard to check the data should be updated
  const guardDataSet = useCallback(
    (entityRoute?: string): boolean =>
      entityRoute === currentEntity.current.route,
    []
  );

  // Init fetch of entities.
  const {
    data: apiData,
    isIdle,
    isLoading: apiIsLoading,
    run,
  } = useAsync<AzulEntitiesResponse>();

  useEffect(() => {
    currentEntity.current = entity;
  }, [entity]);

  useEffect(() => {
    sortType.current = {
      sortKey: getDefaultSort(entity),
      sortOrder: "asc",
    };
    setLoad(true);
  }, [entity]);

  // Execute fetch of entities.
  useEffect(() => {
    if (!staticLoad && load) {
      run(
        list(path, {
          order: sortType.current?.sortOrder,
          sort: sortType.current?.sortKey,
        }),
        { check: guardDataSet, param: entity.route }
      );
      setLoad(false);
    }
  }, [list, load, path, run, staticLoad, entity.route, guardDataSet]);

  // Handle change of sort.
  const sort = useCallback(
    (key?: string, order?: SortOrderType) => {
      sortType.current = {
        sortKey: key ?? getDefaultSort(entity),
        sortOrder: order,
      };
      setLoad(true);
    },
    [entity]
  );

  // Create callback for next page action.
  const nextPage = useCallback(async () => {
    if (apiData?.pagination.next) {
      setCurrentPage((s) => s + 1);
      run(fetchList(apiData.pagination.next));
    }
  }, [apiData?.pagination.next, fetchList, run]);

  // Create callback for previous page action.
  const previousPage = useCallback(async () => {
    if (apiData?.pagination.previous) {
      setCurrentPage((s) => s - 1);
      run(fetchList(apiData.pagination.previous));
    }
  }, [apiData?.pagination.previous, fetchList, run]);

  const resetPage = useCallback(() => {
    setCurrentPage(DEFAULT_CURRENT_PAGE);
  }, []);

  // Exit if we're dealing with a statically-loaded entity; data has already been fetched during build; indicate
  // load is complete and return static data.
  if (staticLoad) {
    return {
      isLoading: false,
      response: value?.data,
    };
  }

  // Otherwise return the fetching, pagination and sort state.
  return {
    isLoading: apiIsLoading || isIdle,
    pagination: {
      canNextPage: !!apiData?.pagination.next,
      canPreviousPage: !!apiData?.pagination.previous,
      currentPage,
      nextPage,
      previousPage,
      resetPage,
    },
    response: apiData,
    sort: {
      sort,
      sortKey: sortType.current?.sortKey,
      sortOrder: sortType.current?.sortOrder,
    },
  };
};
