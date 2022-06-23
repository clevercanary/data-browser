import React from "react";
import { Box } from "@mui/material";

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

export const TabPanel = ({ index, value, children }: TabPanelProps) => {
  if (index !== value) {
    return null;
  }

  return <Box>{children}</Box>;
};
