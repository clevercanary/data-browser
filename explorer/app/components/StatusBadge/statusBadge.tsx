// Core dependencies
import { Chip } from "@mui/material";
import React from "react";

export enum STATUS {
  NEW = "NEW",
  NONE = "NONE",
  UPDATED = "UPDATED",
}

const statusConfig = {
  [STATUS.NEW]: { color: "info", label: "New" },
  [STATUS.NONE]: { color: "default", label: "None" },
  [STATUS.UPDATED]: { color: "warning", label: "Updated" },
} as const;

interface Props {
  status: STATUS;
}

export const StatusBadge = ({ status }: Props): JSX.Element => {
  return (
    <>
      {status !== STATUS.NONE && (
        <Chip
          color={statusConfig[status].color}
          label={statusConfig[status].label}
          variant="status"
        />
      )}
    </>
  );
};
