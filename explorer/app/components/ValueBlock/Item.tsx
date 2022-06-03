import React from "react";
import { Text } from "../Text/Text";
import { ItemContainer } from "./ValueBlock.styles";

export interface ItemProps {
  label: string;
  value: string;
}

export const Item = ({ label, value }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Text variant="textHeadingSmall" customColor="colorInk">
        {value}
      </Text>
      <Text variant="textBody400" customColor="colorInkLight">
        {label}
      </Text>
    </ItemContainer>
  );
};
