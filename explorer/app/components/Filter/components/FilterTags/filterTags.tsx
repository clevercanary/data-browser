import { CategoryTag } from "@clevercanary/data-explorer-ui/lib/common/entities";
import React from "react";
import { FilterTag as Tag } from "../FilterTag/filterTag";
import { FilterTags as Tags } from "./filterTags.styles";

interface Props {
  tags?: CategoryTag[];
}

export const FilterTags = ({ tags }: Props): JSX.Element | null => {
  return tags && tags.length ? (
    <Tags>
      {tags.map(({ label, onRemove, superseded }, t) => (
        <Tag
          key={`${label}${t}`}
          label={label}
          onRemove={onRemove}
          superseded={superseded}
        />
      ))}
    </Tags>
  ) : null;
};
