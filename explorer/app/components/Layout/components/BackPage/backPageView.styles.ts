import styled from "@emotion/styled";
import { BREAKPOINT } from "../../../../hooks/useBreakpointHelper";

export const BackPageView = styled.div`
  display: grid;
  flex: 1;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 16px;
  padding: 24px 0;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    max-width: min(calc(100% - 32px), 1232px);
  }
`;

export const BackPageHero = styled.div`
  display: contents;

  > * {
    grid-column: 1 / -1;
  }
`;

export const BackPageTabs = styled.div`
  grid-column: 1 / -1;

  ${({ theme }) => theme.breakpoints.down(BREAKPOINT.TABLET)} {
    margin-left: -16px;
    margin-right: -16px;
  }
`;

export const BackPageOverview = styled.div`
  align-items: flex-start;
  display: grid;
  gap: 16px 0;
  grid-column: 1 / -1;
  grid-template-columns: 1fr;
  margin-left: -16px;
  margin-right: -16px;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    display: grid;
    gap: 0 16px;
    grid-template-columns: inherit;
    margin: 0;
  }
`;

const BackPageOverviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

export const BackPageOverviewMain = styled(BackPageOverviewColumn)`
  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    grid-column: 1 / 9;
  }
`;

export const BackPageOverviewSide = styled(BackPageOverviewColumn)`
  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    grid-column: 9 / -1;
  }
`;
