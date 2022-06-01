import React from "react";
import { Item, ItemProps } from "./Item";

interface OrganizationsProps {
  organizations: ItemProps[];
}

export const Organizations = ({
  organizations,
}: OrganizationsProps): JSX.Element => {
  return (
    <div>
      {organizations.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </div>
  );
};
