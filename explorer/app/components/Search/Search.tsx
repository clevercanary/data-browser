import React from "react";
import { StyledButton } from "./Search.styles";
import SearchIcon from "@mui/icons-material/Search";

export const Search: React.FC = () => {
  return (
    <StyledButton variant="text" startIcon={<SearchIcon />}>
      Search
    </StyledButton>
  );
};
