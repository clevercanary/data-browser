import React, { useState, useMemo, useCallback } from "react";
import { ColumnConfig } from "app/config/model";
import { PaginationConfig, SortConfig } from "app/hooks/useFetchEntities";
import { CellProps, Column } from "react-table";
import { ComponentCreator } from "../ComponentCreator/ComponentCreator";
import { Table } from "../Table/table";

interface TableCreatorProps<T> {
  columns: ColumnConfig<T>[];
  items: T[];
  pageSize: number;
  total?: number;
  pagination?: PaginationConfig;
  sort?: SortConfig;
}

const createCell = <T extends object>(config: ColumnConfig<T>) =>
  function CellCreator({ row }: CellProps<T>) {
    return (
      <ComponentCreator
        components={[config.componentConfig]}
        response={row.original}
      />
    );
  };

export const TableCreator = <T extends object>({
  columns,
  items,
  pageSize,
  total,
  pagination,
  sort,
}: TableCreatorProps<T>): JSX.Element => {
  const defaultColumns = useMemo(
    () => columns.filter((column) => !column.hiddenColumn),
    [columns]
  );
  const [visibleColumn, setVisibleColumn] = useState(defaultColumns);

  const reactVisibleColumns: Column<T>[] = useMemo(
    () =>
      visibleColumn.map((columnConfig) => ({
        Cell: createCell(columnConfig),
        Header: columnConfig.header,
        disableSortBy: !columnConfig.sort,
        id: columnConfig.sort?.sortKey,
      })),
    [visibleColumn]
  );

  const readOnlyColumns = defaultColumns.map(({ header }) => header);
  const selectedColumns = visibleColumn.map(({ header }) => header);
  const columnsOptions = columns.map(({ header }) => ({
    id: header,
    label: header,
  }));

  const handleVisibleColumnsChanged = useCallback(
    (columnId: string) => {
      setVisibleColumn((state) => {
        const columnIndex = state.findIndex(
          ({ header }) => header === columnId
        );

        if (columnIndex !== -1) {
          const newState = [...state];
          newState.splice(columnIndex, 1);
          return newState;
        }

        const newColumn = columns.find(({ header }) => header === columnId);
        if (newColumn) {
          return [...state, newColumn];
        }
        return state;
      });
    },
    [columns]
  );

  const editColumns = useMemo(() => {
    if (defaultColumns.length !== columns.length) {
      return {
        onVisibleColumnsChange: handleVisibleColumnsChanged,
        options: columnsOptions,
        readOnlyColuns: readOnlyColumns,
        selectedColumns: selectedColumns,
      };
    }
    return undefined;
  }, [
    columns.length,
    columnsOptions,
    defaultColumns.length,
    handleVisibleColumnsChanged,
    readOnlyColumns,
    selectedColumns,
  ]);

  return (
    <Table<T>
      items={items}
      columns={reactVisibleColumns}
      pageSize={pageSize}
      total={total}
      pagination={pagination}
      sort={sort}
      editColumns={editColumns}
    />
  );
};
