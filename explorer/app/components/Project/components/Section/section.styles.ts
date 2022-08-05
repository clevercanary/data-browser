import { SectionTitle as Title } from "./components/SectionTitle/sectionTitle";
import styled from "@emotion/styled";
import { BREAKPOINT } from "../../../../hooks/useBreakpointHelper";
import { ButtonBase, Typography } from "@mui/material";

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 20px 16px;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    padding: 20px;
  }
`;

export const CollapsableSection = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  flex-direction: column;
  padding: 4px 0;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    gap: 8px;
    padding: 20px;
  }
`;

export const SectionSummary = styled(ButtonBase)`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    padding: 0;
  }
`;

export const SectionTitle = styled(Title)`
  margin: 0 0 8px !important;
`;

export const Content = styled(Typography)`
  > p {
    margin: 0 0 8px;
  }

  > *:last-child {
    margin-bottom: 0;
  }
` as typeof Typography;

export const SectionContent = styled(Typography)`
  align-items: flex-start;
  color: ${({ theme }) => theme.palette.ink};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 16px;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    padding: 0;
  }
` as typeof Typography;

export const SectionContentListItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const SectionCallout = styled.div`
  margin-top: 16px;
`;
