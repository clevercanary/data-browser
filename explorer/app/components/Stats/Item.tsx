import React from "react";
import { ItemContainer, Label, Value } from "./Stats.styles";

export interface ItemProps {
  label: string;
  value: string;
}

export const Item = ({ label, value }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Value variant="textHeadingSmall">{value}</Value>
      <Label variant="textBody400">{label}</Label>
    </ItemContainer>
  );
};
