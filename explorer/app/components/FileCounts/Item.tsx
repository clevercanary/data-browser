import React from "react";
import { Text } from "../Text/Text";
import { ItemContainer } from "./FileCounts.styles";

export interface ItemProps {
  name: string;
  count: string | number;
}

export const Item = ({ count, name }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Text variant="textBody4002Lines" customColor="colorInk">
        {name}
      </Text>
      <Text
        variant="textBody4002Lines"
        customColor="colorPrimartAnvil"
      >{`${count} file(s)`}</Text>
    </ItemContainer>
  );
};
