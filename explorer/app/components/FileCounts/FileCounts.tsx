import { Item, ItemProps } from "./Item";
import React from "react";

interface FileCountsProps {
  files: ItemProps[];
}

export const FileCounts = ({ files }: FileCountsProps): JSX.Element => {
  return (
    <div>
      {files.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </div>
  );
};
