import { ColumnConfig } from "app/config/model";
import React from "react";
import { CellProps, Column } from "react-table";
import { ComponentCreator } from "../ComponentCreator/ComponentCreator";
import { Table } from "../Table/table";

interface TableCreatorProps<T> {
  columns: ColumnConfig<T>[];
  items: T[];
  pageSize: number;
  total?: number;
  onNextPageClicked?: () => void;
  onPreviousPageClicked?: () => void;
  canPreviousPage?: boolean;
  canNextPage?: boolean;
  currentPage?: number;
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
  onNextPageClicked,
  onPreviousPageClicked,
  canPreviousPage,
  canNextPage,
  currentPage,
}: TableCreatorProps<T>): JSX.Element => {
  const reactColumns: Column<T>[] = columns.map((columnConfig) => ({
    Header: columnConfig.header,
    Cell: createCell(columnConfig),
  }));

  return (
    <Table<T>
      items={items}
      columns={reactColumns}
      pageSize={pageSize}
      total={total}
      canNextPage={canNextPage}
      canPreviousPage={canPreviousPage}
      onNextPageClicked={onNextPageClicked}
      onPreviousPageClicked={onPreviousPageClicked}
      currentPage={currentPage}
    />
  );
};
