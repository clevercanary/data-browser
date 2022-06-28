import React from "react";
import {
  Column,
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
import { PaginationConfig } from "app/hooks/useFetchEntities";

interface TableProps<T extends object> {
  items: T[];
  pageSize: number;
  columns: Column<T>[];
  total?: number;
  pagination?: PaginationConfig;
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
      manualPagination: !!pagination,
      manualSortBy: true,
      disableMultiSort: true,
      pageCount: total,
      initialState: {
        pageSize: pageSize,
      } as TableState,
      manualPagination: !!pagination,
      pageCount: total,
    },
    useSortBy,
    usePagination
  );

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
                  active={column.isSorted}
                  disabled={column.disableSortBy}
                  direction={column.isSortedDesc ? "desc" : "asc"}
                  // onClick={createSortHandler(headCell.id)}
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
