import React from "react";
import {
  Column,
  ColumnInstance,
  TableState,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { Pagination } from "../Pagination/pagination";
import { PaginationConfig, SortConfig } from "app/hooks/useFetchEntities";

interface TableProps<T extends object> {
  items: T[];
  pageSize: number;
  columns: Column<T>[];
  total?: number;
  pagination?: PaginationConfig;
  sort?: SortConfig;
}

/**
 * This table can be Controlled or Uncontrolled based on the set of props passed to it.
 * Controlled table will receive the navigation functions and it will be used for dynamic loads.
 * Uncontrolled table will take advantage of React Table's state and will be used for static loads.
 */
export const Table = <T extends object>({
  items,
  columns,
  pageSize,
  total,
  pagination,
  sort,
}: TableProps<T>): JSX.Element => {
  const {
    getTableProps,
    headers,
    getTableBodyProps,
    page,
    prepareRow,
    canNextPage: tableCanNextPage,
    canPreviousPage: tableCanPreviousPage,
    nextPage: tableNextPage,
    previousPage: tablePreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable<T>(
    {
      columns,
      data: items,
      disableMultiSort: true,
      initialState: {
        pageSize: pageSize,
      } as TableState,
      manualPagination: !!pagination,
      manualSortBy: true,
      pageCount: total,
    },
    useSortBy,
    usePagination
  );

  const handleSortClicked = (column: ColumnInstance<T>) => {
    const newColumn =
      column.id === sort?.sortKey && sort.sortOrder === "desc"
        ? undefined
        : column.id;
    const newOrder =
      newColumn !== sort?.sortKey
        ? "asc"
        : sort?.sortOrder === "desc"
        ? undefined
        : sort?.sortOrder === "asc"
        ? "desc"
        : "asc";
    sort?.sort(newColumn, newOrder);
  };

  return (
    <>
      <MuiTable {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map((column) => (
              <TableCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={column.id}
              >
                <TableSortLabel
                  active={sort?.sortKey === column.id}
                  disabled={column.disableSortBy}
                  direction={
                    sort?.sortKey !== column.id
                      ? "asc"
                      : sort?.sortOrder === "desc"
                      ? "desc"
                      : "asc"
                  }
                  onClick={() => handleSortClicked(column)}
                >
                  {column.render("Header")}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell, index) => {
                  return (
                    <TableCell {...cell.getCellProps()} key={index}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
      <Pagination
        currentPage={pagination?.currentPage ?? pageIndex + 1}
        onNextPage={pagination?.nextPage ?? tableNextPage}
        onPreviousPage={pagination?.previousPage ?? tablePreviousPage}
        canNextPage={pagination?.canNextPage ?? tableCanNextPage}
        canPreviousPage={pagination?.canPreviousPage ?? tableCanPreviousPage}
        totalPage={total ?? pageOptions.length}
      />
    </>
  );
};