// Core dependencies
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  mainColumn: ReactNode;
  sideColumn: ReactNode;
  top: ReactNode;
}

export const Project = ({
  mainColumn,
  sideColumn,
  top,
}: Props): JSX.Element => {
  return (
    <Box>
      {top}
      <Box display="grid" gap={4} gridAutoFlow="column">
        {mainColumn}
        {sideColumn}
      </Box>
    </Box>
  );
};
