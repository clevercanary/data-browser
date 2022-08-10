// Core dependencies
import React from "react";
import { Typography } from "@mui/material";

interface Props {
  className?: string;
  title: string;
}

export const SectionTitle = ({ className, title }: Props): JSX.Element => {
  return (
    <Typography
      className={className}
      color="ink.main"
      component="h3"
      variant="text-body-large-500"
    >
      {title}
    </Typography>
  );
};
