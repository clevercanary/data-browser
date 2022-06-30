import { RoundedPaper } from "../common/Paper/paper.styles";
import styled from "@emotion/styled";
import { BREAKPOINT } from "../../hooks/useBreakpointHelper";

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing(0, 4)};
  padding: ${({ theme }) => theme.spacing(6, 0)};

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    margin: 0 auto;
    max-width: min(calc(100% - 32px), 1232px);
  }
`;

export const Project = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const ProjectOverview = styled.div`
  align-items: flex-start;
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

export const ProjectOverviewMain = styled(RoundedPaper)`
  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    grid-column: 1 / 9;
  }
`;

export const ProjectOverviewSide = styled(RoundedPaper)`
  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    grid-column: 9 / -1;
  }
`;
