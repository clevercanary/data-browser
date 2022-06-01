import { Typography } from "@mui/material";
import React from "react";
import { ItemContainer } from "./FileCounts.styles";

export interface ItemProps {
  name: string;
  count: string | number;
}

export const Item = ({ count, name }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Typography
        variant="textBody400"
        component="span"
        color={(theme) => theme.palette.colorInk}
      >
        {name}
      </Typography>
      <Typography
        variant="textBody400"
        component="span"
        color={(theme) => theme.palette.colorPrimartAnvil}
      >{`${count} file(s)`}</Typography>
    </ItemContainer>
  );
};
