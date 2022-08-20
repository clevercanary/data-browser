import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { BREAKPOINT } from "../../../../hooks/useBreakpointHelper";
import { SectionTitle as Title } from "./components/SectionTitle/sectionTitle";

export const Section = styled.div`
  padding: 20px 16px;

  ${({ theme }) => theme.breakpoints.up(BREAKPOINT.TABLET)} {
    padding: 20px;
  }
`;

export const SectionTitle = styled(Title)`
  margin: 0 0 8px;
`;

export const Content = styled(Typography)`
  > p {
    margin: 0 0 8px;
  }

  > *:last-child {
    margin-bottom: 0;
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

export const SectionActions = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;
