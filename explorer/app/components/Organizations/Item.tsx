import React from "react";
import { Citation, ItemContainer, Text } from "./Organizations.styles";

export interface ItemProps {
  name: string;
  citation?: string;
}

export const Item = ({ name, citation }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      {citation && <Citation>{citation}</Citation>}
      <Text variant="textBody400">{name}</Text>
    </ItemContainer>
  );
};
