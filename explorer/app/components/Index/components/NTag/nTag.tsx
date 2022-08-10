// Core dependencies
import { ReactElement } from "react";
import { Tooltip } from "@mui/material";

interface Props {
  Tag: ReactElement;
  TooltipTitle: ReactElement;
}

export const NTag = ({ Tag, TooltipTitle }: Props): JSX.Element => {
  return (
    <Tooltip arrow placement="top" title={TooltipTitle}>
      {Tag}
    </Tooltip>
  );
};
