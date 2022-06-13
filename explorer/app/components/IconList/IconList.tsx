import React from "react";
import { Text } from "../Text/Text";
import { Item, ItemProps } from "./Item";

interface IconListProps {
  icons: ItemProps[];
}

export const IconList = ({ icons }: IconListProps): JSX.Element => {
  return (
    <div>
      {icons.map((item, index) => (
        <Item key={index} {...item} />
      ))}
      {!icons.length && (
        <Text variant="text-body-400" customColor="colorInk">
          None
        </Text>
      )}
    </div>
  );
};
