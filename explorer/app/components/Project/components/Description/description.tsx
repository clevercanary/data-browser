import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { Typography } from "@mui/material";
import React from "react";
import { Description as ProjectDescription } from "../../common/entities";

interface Props {
  projectDescription: ProjectDescription;
}

export const Description = ({ projectDescription }: Props): JSX.Element => {
  return (
    <CollapsableSection title={"Description"}>
      <Typography>{projectDescription}</Typography>
    </CollapsableSection>
  );
};
