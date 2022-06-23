// Core dependencies
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export const ProjectHeader = ({ children }: Props): JSX.Element => {
  return <Box>{children}</Box>;
};
