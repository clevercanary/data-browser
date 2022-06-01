import React from "react";
import { Item, ItemProps } from "./Item";

interface ContributorsProps {
  contributors: ItemProps[];
}

export const Contributors = ({
  contributors,
}: ContributorsProps): JSX.Element => {
  return (
    <div>
      {contributors.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </div>
  );
};
