import React from "react";
import { Column, TableState, usePagination, useTable } from "react-table";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Pagination } from "../Pagination/pagination";

interface TableProps<T extends object> {
  items: T[];
  pageSize: number;
  columns: Column<T>[];
  total?: number;
  onNextPageClicked?: () => void;
  onPreviousPageClicked?: () => void;
  canPreviousPage?: boolean;
  canNextPage?: boolean;
  currentPage?: number;
}

/**
 * This table can be Controlled or Uncrontrolled based on the set of props passed to it.
 * Controlled table will receive the navigation functions and it will be used for dynamic loads.
 * Uncrontrolled table will take advantage of react's table state and will be used for static loads.
 */
export const Table = <T extends object>({
  items,
  columns,
  pageSize,
  total,
  onNextPageClicked,
  onPreviousPageClicked,
  canPreviousPage,
  canNextPage,
  currentPage,
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
      manualPagination: !!currentPage,
      pageCount: total,
      initialState: {
        pageSize: pageSize ?? 25,
      } as TableState,
    },
    usePagination
  );

  return (
    <>
      <MuiTable {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map((column) => (
              <TableCell {...column.getHeaderProps()} key={column.id}>
                {column.render("Header")}
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
        currentPage={currentPage ?? pageIndex + 1}
        onNextPage={onNextPageClicked ?? tableNextPage}
        onPreviousPage={onPreviousPageClicked ?? tablePreviousPage}
        canNextPage={canNextPage ?? tableCanNextPage}
        canPreviousPage={canPreviousPage ?? tableCanPreviousPage}
        totalPage={total ?? pageOptions.length}
      />
    </>
  );
};
