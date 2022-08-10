import { Item, ItemProps } from "./Item";
import React from "react";

interface IconListProps {
  icons: ItemProps[];
}

export const IconList = ({ icons }: IconListProps): JSX.Element => {
  return (
    <>
      {icons.length ? (
        <div>
          {icons.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      ) : (
        "None"
      )}
    </>
  );
};
