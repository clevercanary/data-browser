import { SearchOffIcon } from "@clevercanary/data-explorer-ui/lib/components/common/CustomIcon/components/SearchOffIcon/searchOffIcon";
import { RoundedPaper } from "@clevercanary/data-explorer-ui/lib/components/common/Paper/paper.styles";
import { SectionTitle } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionTitle/sectionTitle";
import { SectionActions } from "@clevercanary/data-explorer-ui/lib/components/common/Section/section.styles";
import {
  PRIORITY,
  StatusIcon,
} from "@clevercanary/data-explorer-ui/lib/components/common/StatusIcon/statusIcon";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { NoResultsSection, NoResultsSectionContent } from "./noResults.styles";

interface Props {
  actions?: ReactNode;
  description?: string;
  title: string;
}

export const NoResults = ({
  actions,
  description,
  title,
}: Props): JSX.Element => {
  return (
    <RoundedPaper>
      <NoResultsSection>
        <StatusIcon priority={PRIORITY.LOW} StatusIcon={SearchOffIcon} />
        <NoResultsSectionContent>
          <SectionTitle title={title} />
          {description && (
            <Typography color="ink.light" variant="text-body-400-2lines">
              {description}
            </Typography>
          )}
        </NoResultsSectionContent>
        {actions && <SectionActions>{actions}</SectionActions>}
      </NoResultsSection>
    </RoundedPaper>
  );
};
