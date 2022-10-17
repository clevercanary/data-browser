import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { SelectedFilter } from "../../apis/azul/common/entities";
import { config, getDefaultSort, getEntityConfig } from "../../config/config";
import {
  buildCategoryViews,
  buildNextFilterState,
} from "../../hooks/useCategoryFilter";
import {
  CategoryKey,
  CategoryValueKey,
  PaginationDirectionType,
  SelectCategory,
  Sort,
  SortOrderType,
} from "../entities";

/**
 * Model of explore state context.
 */
interface IExploreStateContext {
  exploreDispatch: Dispatch<ExploreAction>;
  exploreState: ExploreState;
}

const defaultPaginationState = {
  canNextPage: false,
  canPreviousPage: false,
  currentPage: 1,
  pageCount: 1,
  rowsPerPage: 25,
  totalRows: 0,
};

const defaultEntity = config().redirectRootToPath?.slice(1) ?? ""; // TODO remove ??

/**
 * Explore state context for storing and using filter-related and explore state.
 */
export const ExploreStateContext = createContext<IExploreStateContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function -- allow dummy function for default state.
  exploreDispatch: () => {},
  exploreState: {
    categoryViews: [],
    filterState: [],
    listItems: [],
    listStaticLoad: false,
    loading: false,
    paginationState: defaultPaginationState,
    sortState: {
      sortKey: getDefaultSort(getEntityConfig(defaultEntity)) ?? "",
      sortOrder: "asc",
    }, // TODO remove ??
    tabValue: defaultEntity,
  },
});

/**
 * Explore state provider for consuming components to subscribe to changes in filter-related and explore-related state.
 * @param props - Component inputs.
 * @param props.children - Set of children components that can possibly consume the query provider.
 * @returns Provider element to be used by consumers to both update explore state and subscribe to changes in explore state.
 */
export function ExploreStateProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}): JSX.Element {
  const [exploreState, exploreDispatch] = useReducer(exploreReducer, {
    categoryViews: [],
    filterState: [],
    listItems: [],
    listStaticLoad: false,
    loading: false,
    paginationState: defaultPaginationState,
    sortState: {
      sortKey: getDefaultSort(getEntityConfig(defaultEntity)) ?? "", // TODO remove ??
      sortOrder: "asc",
    },
    tabValue: defaultEntity,
  });

  return (
    <ExploreStateContext.Provider value={{ exploreDispatch, exploreState }}>
      {children}
    </ExploreStateContext.Provider>
  );
}

export interface PaginationState {
  canNextPage: boolean;
  canPreviousPage: boolean;
  currentPage: number;
  pageCount: number;
  rowsPerPage: number;
  totalRows: number;
}

export interface ExploreResponse {
  listItems: any[] | undefined;
  loading: boolean;
  pagination: PaginationState;
  selectCategories: SelectCategory[];
}

export type ExploreState = {
  categoryViews: SelectCategory[];
  filterState: SelectedFilter[];
  listItems: any[] | undefined;
  listStaticLoad: boolean;
  loading: boolean;
  paginationState: PaginationState;
  sortState: Sort;
  tabValue: string;
};

export enum ExploreActionKind {
  // ClearFilters = "CLEAR_FILTERS",
  FlipSortOrder = "FLIP_SORT_ORDER",
  PaginateTable = "PAGINATE_TABLE",
  ProcessExploreResponse = "PROCESS_EXPLORE_RESPONSE",
  SelectEntityType = "SELECT_ENTITY_TYPE",
  SetSortKey = "SET_SORT_KEY",
  UpdateFilter = "UPDATE_FILTER",
}

type ExploreAction =
  | PaginateTableAction
  | ProcessExploreResponseAction
  | SelectEntityTypeAction
  | SetSortKeyAction
  | SetSortOrderAction
  | UpdateFilterAction;

type PaginateTableAction = {
  payload: PaginationDirectionType;
  type: ExploreActionKind.PaginateTable;
};

type ProcessExploreResponseAction = {
  payload: ExploreResponse;
  type: ExploreActionKind.ProcessExploreResponse;
};

type SelectEntityTypeAction = {
  payload: string;
  type: ExploreActionKind.SelectEntityType;
};

type SetSortKeyAction = {
  payload: string;
  type: ExploreActionKind.SetSortKey;
};

type SetSortOrderAction = {
  payload: SortOrderType;
  type: ExploreActionKind.FlipSortOrder;
};

type UpdateFilterAction = {
  payload: UpdateFilterPayload;
  type: ExploreActionKind.UpdateFilter;
};

type UpdateFilterPayload = {
  categoryKey: CategoryKey;
  selected: boolean;
  selectedValue: CategoryValueKey;
};

function exploreReducer(
  state: ExploreState,
  action: ExploreAction
): ExploreState {
  const { payload, type } = action;
  const { categoryConfigs } = config();
  switch (type) {
    /**
     * Flip sort order
     **/
    case ExploreActionKind.FlipSortOrder: {
      const nextSort: Sort = { ...state.sortState };
      if (state.sortState.sortOrder == "asc") {
        nextSort.sortOrder = "desc";
      } else {
        nextSort.sortOrder = "asc";
      }
      return {
        ...state,
        sortState: nextSort,
      };
    }
    /**
     * Paginate table
     **/
    case ExploreActionKind.PaginateTable: {
      return {
        ...state, // TODO implement this case
      };
    }
    /**
     * Process explore response
     **/
    case ExploreActionKind.ProcessExploreResponse: {
      let listItems: any[] | undefined = [];
      if (!payload.loading) {
        listItems = payload.listItems;
      }

      return {
        ...state,
        categoryViews: buildCategoryViews(
          payload.selectCategories,
          categoryConfigs,
          state.filterState
        ),
        listItems: listItems,
        loading: payload.loading,
        paginationState: payload.pagination,
      };
    }
    /**
     * Select entity type
     **/
    case ExploreActionKind.SelectEntityType: {
      const nextSort: Sort = {
        sortKey: getDefaultSort(getEntityConfig(payload)),
        sortOrder: "asc",
      };

      const { tsv } = getEntityConfig(payload);
      const listStaticLoad = !!tsv;

      return {
        ...state,
        listStaticLoad,
        loading: true,
        sortState: nextSort,
        tabValue: payload,
      };
    }
    /**
     * Set sort key
     **/
    case ExploreActionKind.SetSortKey: {
      const nextSort: Sort = {
        sortKey: payload,
        sortOrder: "asc",
      };
      return {
        ...state,
        sortState: nextSort,
      };
    }
    /**
     * Update filter
     **/
    case ExploreActionKind.UpdateFilter: {
      return {
        ...state,
        filterState: buildNextFilterState(
          state.filterState,
          payload.categoryKey,
          payload.selectedValue,
          payload.selected
        ),
      };
    }
    default:
      return state;
  }
}
