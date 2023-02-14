import { CallToActionButton as CTAButton } from "@clevercanary/data-explorer-ui/lib/components/common/Button/components/CallToActionButton/callToActionButton";
import { TABLET } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";

interface Props {
  row: number;
}

export const BackPageHeroHeadline = styled.div`
  display: contents;

  > * {
    grid-column: 1 / -1; // Title and breadcrumbs consume full width of available grid.
  }

  ${({ theme }) => theme.breakpoints.up(TABLET)} {
    display: flex;
    flex: 1;
    gap: 88px;

    > * {
      grid-column: unset;
    }
  }
`;

export const HeroHeader = styled(Stack)`
  flex: 1;
`;

export const CallToActionButton = styled(CTAButton)<Props>`
  align-self: center;
  grid-row: ${({ row }) => row}; // Positions between status and tabs.
  justify-self: flex-start;

  ${({ theme }) => theme.breakpoints.up(TABLET)} {
    justify-self: flex-end;
  }
`;
