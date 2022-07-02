// Core dependencies
import { Chip } from "@mui/material";
import React from "react";

// App dependencies
import { STATUS } from "../../common/constants";
import { Status } from "../../common/entities";

const STATUS_CONFIG = {
  [STATUS.NEW]: { color: "info", label: "New" },
  [STATUS.NONE]: { color: "default", label: "None" },
  [STATUS.UPDATED]: { color: "warning", label: "Updated" },
} as const;

interface Props {
  status: Status;
}

export const StatusBadge = ({ status }: Props): JSX.Element => {
  return (
    <>
      {status !== STATUS.NONE && (
        <Chip
          color={STATUS_CONFIG[status].color}
          label={STATUS_CONFIG[status].label}
          variant="status"
        />
      )}
    </>
  );
};
