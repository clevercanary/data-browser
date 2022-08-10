import { BREAKPOINT } from "../../../../hooks/useBreakpointHelper";
import styled from "@emotion/styled";

export const Pagination = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.ink.main};
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 20px;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    justify-content: flex-start;
  }
`;
