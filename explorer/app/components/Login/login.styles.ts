import {
  Section,
  SectionActions,
} from "@clevercanary/data-explorer-ui/lib/components/common/Section/section.styles";
import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  max-width: 424px;
  padding-top: 92px;
  margin: 0 auto;
`;

export const LoginSection = styled(Section)`
  gap: 24px 0;
  padding: 32px !important;
  padding-top: 32px !important;
`;

export const LoginSectionActions = styled(SectionActions)`
  flex-direction: column;
  gap: 16px 0;
`;
