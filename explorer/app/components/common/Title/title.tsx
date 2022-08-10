// Core dependencies
import React from "react";
import { Typography } from "@mui/material";

export type HeroTitle = string;

interface Props {
  title: HeroTitle;
}

export const Title = ({ title }: Props): JSX.Element => {
  return (
    <Typography color="ink.main" component="h1" variant="text-heading-large">
      {title}
    </Typography>
  );
};
