import { Item, ItemProps } from "./Item";
import React from "react";

interface TextLinksProps {
  values: ItemProps[];
}

export const TextLinks = ({ values }: TextLinksProps): JSX.Element => {
  return (
    <div>
      {values.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};
