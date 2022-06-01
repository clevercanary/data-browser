import React from "react";
import { Citation, ItemContainer, Text } from "./Contributors.styles";

export interface ItemProps {
  name: string;
  role?: string;
  citation?: string;
}

export const Item = ({ name, citation, role }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Text variant="textBody400">{name}</Text>
      {role && <Text variant="textBody400">{` (${role})`}</Text>}
      {citation && <Citation>{citation}</Citation>}
    </ItemContainer>
  );
};
