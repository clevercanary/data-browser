// Core dependencies
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

// App dependencies
import { CheckboxMenu, CheckboxMenuItem } from "../CheckboxMenu/checkboxMenu";
import { Pagination as DXPagination } from "./components/Pagination/pagination";
import { PaginationSummary } from "./components/PaginationSummary/paginationSummary";
import { newColumnKey, newColumnOrder } from "./functions";

// Styles
import { RoundedPaper } from "../common/Paper/paper.styles";
import { Table as GridTable, TableToolbar } from "./table.styles";
import { useScroll } from "app/hooks/useScroll";
import { Pagination, Sort } from "../../common/entities";

export interface EditColumnConfig {
  onVisibleColumnsChange: (newColumnId: string) => void;
  options: CheckboxMenuItem[];
  readOnlyColumns: string[];
  selectedColumns: string[];
}

interface TableProps<T extends object> {
  columns: ColumnDef<T>[];
  disablePagination?: boolean;
  editColumns?: EditColumnConfig;
  gridTemplateColumns: string;
  items: T[];
  loading?: boolean;
  pageSize: number;
  pagination?: Pagination;
  sort?: Sort;
  total?: number;
}

/**
 * This table can be Controlled or Uncontrolled based on the set of props passed to it.
 * Controlled table will receive the navigation functions and it will be used for dynamic loads.
 * Uncontrolled table will take advantage of React Table's state and will be used for static loads.
 * @param tableProps - Set of props required for displaying the table.
 * @param tableProps.items - Row data to display.
 * @param tableProps.loading - Display table's loading state.
 * @param tableProps.columns - Set of columns to display.
 * @param tableProps.editColumns - True if edit column functionality is enabled for table.
 * @param tableProps.pageSize - Number of rows to display per page.
 * @param tableProps.total - Total number of rows in the result set.
 * @param tableProps.pagination - Config for rendering pagination and corresponding events.
 * @param tableProps.sort - Config for rendering current sort and handling corresponding events.
 * @param tableProps.gridTemplateColumns - Defines grid table track sizing.
 * @param tableProps.disablePagination - Determine if the table shouldn't be paginated
 * @returns Configured table element for display.
 */
export const Table = <T extends object>({
  columns,
  disablePagination,
  editColumns,
  gridTemplateColumns,
  items,
  loading,
  pageSize,
  pagination,
  sort,
  total,
}: TableProps<T>): JSX.Element => {
  const {
    getHeaderGroups,
    getRowModel,
    // canNextPage: tableCanNextPage,
    // canPreviousPage: tableCanPreviousPage,
    // getTableBodyProps,
    // getTableProps,
    // headers,
    // nextPage: tableNextPage,
    // page,
    // pageOptions,
    // prepareRow,
    // previousPage: tablePreviousPage,
    // state: { pageIndex },
  } = useReactTable<T>({
    columns,
    data: items,
    getCoreRowModel: getCoreRowModel(),
    // disableMultiSort: true,
    // initialState: {
    //   pageSize: disablePagination ? Number.MAX_SAFE_INTEGER : pageSize,
    // } as TableState,
    // manualPagination: !!pagination,
    // manualSortBy: true,
    // pageCount: total,
  });
  // const scrollTop = useScroll();
  // const currentPage = pagination?.currentPage ?? pageIndex + 1;
  // const totalPage = total ?? pageOptions.length;

  // const handleSortClicked = (column: ColumnInstance<T>): void => {
  //   if (sort) {
  //     const newColumn = newColumnKey<T>(sort, column);
  //     const newOrder = newColumnOrder(sort, newColumn);
  //     sort.sort(newColumn, newOrder);
  //     pagination?.resetPage();
  //   }
  // };

  // const handleTableNextPage = (): void => {
  //   const nextPage = pagination?.nextPage ?? tableNextPage;
  //   nextPage();
  //   scrollTop();
  // };

  // const handleTablePreviousPage = (): void => {
  //   const previousPage = pagination?.previousPage ?? tablePreviousPage;
  //   previousPage();
  //   scrollTop();
  // };

  return (
    <div>
      {/* TODO: Render the Loading component when loading is true */}
      {loading && <></>}{" "}
      <RoundedPaper>
        {editColumns && (
          <TableToolbar>
            {/* <PaginationSummary
              firstResult={(currentPage - 1) * pageSize + 1}
              lastResult={pageSize * currentPage}
              totalResult={totalPage * pageSize}
            /> */}
            <CheckboxMenu
              label="Edit Columns"
              onItemSelectionChange={editColumns.onVisibleColumnsChange}
              options={editColumns.options}
              readOnly={editColumns.readOnlyColumns}
              selected={editColumns.selectedColumns}
            />
          </TableToolbar>
        )}
        <TableContainer>
          <GridTable gridTemplateColumns={gridTemplateColumns}>
            {getHeaderGroups().map((headerGroup) => (
              <TableHead key={headerGroup.id}>
                <TableRow>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id}>
                      {/* <TableSortLabel
                        active={sort?.sortKey === column.id}
                        direction={
                          sort?.sortKey === column.id ? sort?.sortOrder : "asc"
                        }
                        disabled={column.disableSortBy}
                        IconComponent={SouthRoundedIcon}
                        onClick={(): void => handleSortClicked(column)}
                      > */}
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {/* </TableSortLabel> */}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            ))}

            <TableBody>
              {getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </GridTable>
        </TableContainer>
        {/* {!disablePagination && (
          <DXPagination
            canNextPage={pagination?.canNextPage ?? tableCanNextPage}
            canPreviousPage={
              pagination?.canPreviousPage ?? tableCanPreviousPage
            }
            currentPage={currentPage}
            onNextPage={handleTableNextPage}
            onPreviousPage={handleTablePreviousPage}
            totalPage={totalPage}
          />
        )} */}
      </RoundedPaper>
    </div>
  );
};
