import { SearchIcon } from "@clevercanary/data-explorer-ui/lib/components/common/CustomIcon/components/SearchIcon/searchIcon";
import {
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "@clevercanary/data-explorer-ui/lib/hooks/useBreakpointHelper";
import { DESKTOP_SM } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import { Button, IconButton } from "@mui/material";
import React from "react";

export const Search = (): JSX.Element => {
  const smDesktop = useBreakpointHelper(BREAKPOINT_FN_NAME.UP, DESKTOP_SM);
  return (
    <>
      {smDesktop ? (
        <Button startIcon={<SearchIcon />} variant="nav">
          Search
        </Button>
      ) : (
        <IconButton color="ink">
          <SearchIcon fontSize="medium" />
        </IconButton>
      )}
    </>
  );
};
