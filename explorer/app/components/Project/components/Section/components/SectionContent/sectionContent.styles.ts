// Core dependencies
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const SectionContent = styled(Typography)`
  align-items: flex-start;
  color: ${({ theme }) => theme.palette.ink};
  display: flex;
  flex-direction: column;
  padding: 8px 16px 20px;
`;

export const SectionContentListItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;
