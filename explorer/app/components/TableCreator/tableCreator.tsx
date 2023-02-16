import { Pagination } from "@clevercanary/data-explorer-ui/lib/common/entities";
import { Loading } from "@clevercanary/data-explorer-ui/lib/components/Loading/loading";
import { ColumnConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import { CellContext, ColumnDef, ColumnSort } from "@tanstack/react-table";
import React, { useMemo } from "react";
import { ComponentCreator } from "../ComponentCreator/ComponentCreator";
import {
  arrIncludesSome,
  getInitialState,
  sortingFn,
} from "../Table/common/utils";
import { Table } from "../Table/table";

interface TableCreatorProps<T> {
  columns: ColumnConfig<T>[];
  defaultSort: ColumnSort | undefined;
  disablePagination?: boolean;
  items: T[];
  loading?: boolean;
  pageCount?: number;
  pages: number;
  pageSize: number;
  pagination?: Pagination;
  staticallyLoaded?: boolean;
  total?: number;
}

const createCell = <T extends object>(config: ColumnConfig<T>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We can't determine the cell type
  function CellCreator({ row }: CellContext<T, any>): JSX.Element {
    return (
      <ComponentCreator
        components={[config.componentConfig]}
        response={row.original}
      />
    );
  };

export const TableCreator = <T extends object>({
  columns,
  defaultSort,
  disablePagination,
  items,
  loading,
  pageCount,
  pages,
  pageSize,
  pagination,
  staticallyLoaded,
  total,
}: TableCreatorProps<T>): JSX.Element => {
  const columnDefs: ColumnDef<T>[] = useMemo(
    () =>
      columns.map(({ disableHiding, disableSorting, ...columnConfig }) => ({
        accessorKey: columnConfig.id,
        cell: createCell(columnConfig),
        enableHiding: !disableHiding,
        enableSorting: !disableSorting,
        filterFn: arrIncludesSome,
        header: columnConfig.header,
        id: columnConfig.id,
        meta: {
          width: columnConfig.width,
        },
        sortingFn: sortingFn,
      })),
    [columns]
  );
  const initialState = getInitialState(columns, defaultSort);
  return (
    <div>
      <Loading loading={loading || false} />
      <Table<T>
        columns={columnDefs}
        count={pageCount}
        disablePagination={disablePagination}
        initialState={initialState}
        items={items}
        loading={loading}
        pages={pages}
        pageSize={pageSize}
        pagination={pagination}
        staticallyLoaded={staticallyLoaded}
        total={total}
      />
    </div>
  );
};
