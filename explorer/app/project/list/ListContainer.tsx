/**
 * Container component that will wrap all presentational components used by the project's list page.
 */
import { useCurrentEntity, useEntityData } from "app/hooks";
import Link from "next/link";
import React from "react";
import { Column } from "react-table";
import { Table } from "../../components";
import { ListViewModel } from "../../models";

interface TableItem {
  label: string;
  url: string;
}

const columnsConfig: Column<TableItem>[] = [
  {
    accessor: "label",
    Header: "Project Name",
    Cell: (item) => (
      <Link href={item.row.original.url}>
        <a>{item.row.original.label}</a>
      </Link>
    ),
  },
];

export const ListContainer = (props: ListViewModel) => {
  const entity = useCurrentEntity();
  const { data, isLoading } = useEntityData(props);

  if (!entity || isLoading || !data) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  const tableItems: TableItem[] = data.items.map((item) => ({
    label: item.projectName,
    url: `/explore/${entity.route}/${item.uuid}`,
  }));

  return (
    <Table<TableItem>
      items={tableItems}
      columns={columnsConfig}
      pageSize={25}
    />
  );
};
