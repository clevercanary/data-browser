import React from "react";
import { StyledButton, StyledIconButton } from "./Search.styles";
import SearchIcon from "@mui/icons-material/Search";

export const Search: React.FC = () => {
  return (
    <>
      <StyledButton variant="text" startIcon={<SearchIcon />}>
        Search
      </StyledButton>
      <StyledIconButton>
        <SearchIcon fontSize="small" />
      </StyledIconButton>
    </>
  );
};
