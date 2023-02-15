import {
  Section,
  SectionContent,
} from "@clevercanary/data-explorer-ui/lib/components/common/Section/section.styles";
import styled from "@emotion/styled";

export const NoResultsSection = styled(Section)`
  align-items: center;
  padding: 40px !important; /* Overrides section padding. */
`;

export const NoResultsSectionContent = styled(SectionContent)`
  max-width: 456px;
  text-align: center;
`;
