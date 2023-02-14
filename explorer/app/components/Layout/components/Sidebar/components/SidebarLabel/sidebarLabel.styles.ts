import { DESKTOP } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import styled from "@emotion/styled";

export const SidebarLabel = styled.div`
  padding: 0 24px;

  ${({ theme }) => theme.breakpoints.up(DESKTOP)} {
    margin: 8px 0;
    padding: 8px 16px;
  }
`;
