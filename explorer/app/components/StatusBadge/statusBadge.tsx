// Core dependencies
import { Chip } from "@mui/material";
import React from "react";

export enum STATUS {
  NEW = "NEW",
  UPDATED = "UPDATED",
}

const BADGE_COLOR = {
  NEW: "info",
  UPDATED: "warning",
} as const;

const BADGE_LABEL = {
  NEW: "New",
  UPDATED: "Updated",
};

interface Props {
  status: STATUS;
}

export const StatusBadge = ({ status }: Props): JSX.Element => {
  return (
    <Chip
      color={BADGE_COLOR[status]}
      label={BADGE_LABEL[status]}
      variant="status"
    />
  );
};
