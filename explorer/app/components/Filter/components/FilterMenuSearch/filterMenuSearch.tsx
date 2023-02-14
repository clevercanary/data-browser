import { SearchIcon } from "@clevercanary/data-explorer-ui/lib/components/common/CustomIcon/components/SearchIcon/searchIcon";
import { SetSearchTermFn } from "@clevercanary/data-explorer-ui/lib/components/Filter/common/entities";
import React from "react";
import { FilterMenuSearch as Search } from "./filterMenuSearch.styles";

interface Props {
  searchTerm: string;
  setSearchTerm: SetSearchTermFn;
}

export const FilterMenuSearch = ({
  searchTerm,
  setSearchTerm,
}: Props): JSX.Element => {
  return (
    <Search
      placeholder="Search"
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      StartAdornment={SearchIcon}
    />
  );
};
