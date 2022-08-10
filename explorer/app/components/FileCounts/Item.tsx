import { ItemContainer } from "./FileCounts.styles";
import React from "react";
import { Text } from "../Text/Text";
import { Typography } from "@mui/material";

export interface ItemProps {
  count: string | number;
  name: string;
}

export const Item = ({ count, name }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Text variant="text-body-400-2lines" customColor="ink">
        {name}
      </Text>
      <Typography
        variant="text-body-400-2lines"
        color="primary"
      >{`${count} file(s)`}</Typography>
    </ItemContainer>
  );
};
