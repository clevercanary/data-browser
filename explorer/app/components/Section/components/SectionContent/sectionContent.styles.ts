// Core dependencies
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SectionContent = styled(Box)`
  align-items: flex-start;
  color: ${({ theme }) => theme.palette.ink};
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const SectionContentListItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
