import { AzulEntitiesResponse } from "app/apis/azul/common/entities";
import { Pagination } from "app/common/entities";
import { useCallback, useState } from "react";
import { useFetcher } from "./useFetcher";

const DEFAULT_CURRENT_PAGE = 1;

export const usePagination = (
  runFn: (p: Promise<AzulEntitiesResponse>) => Promise<AzulEntitiesResponse>,
  data?: AzulEntitiesResponse
): Pagination => {
  // Determine type of fetch to be executed, either API endpoint or TSV.
  const { fetchList } = useFetcher();

  // Init pagination-related state.
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);

  // Create callback for next page action.
  const nextPage = useCallback(async () => {
    if (data?.pagination.next) {
      setCurrentPage((s) => s + 1);
      runFn(fetchList(data.pagination.next));
    }
  }, [data?.pagination.next, fetchList, runFn]);

  // Create callback for previous page action.
  const previousPage = useCallback(async () => {
    if (data?.pagination.previous) {
      setCurrentPage((s) => s - 1);
      runFn(fetchList(data.pagination.previous));
    }
  }, [data?.pagination.previous, fetchList, runFn]);

  const resetPage = useCallback(() => {
    setCurrentPage(DEFAULT_CURRENT_PAGE);
  }, []);

  return {
    canNextPage: !!data?.pagination.next,
    canPreviousPage: !!data?.pagination.previous,
    currentPage,
    nextPage,
    previousPage,
    resetPage,
  };
};
