// Core dependencies
import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  flex-direction: column;
  min-height: 64px; /* maintains a minimum height for the collapsed section */
`;

export const SectionSummary = styled(ButtonBase)`
  display: flex;
  justify-content: space-between;
  margin-bottom: -20px; /* scoots the expanded section content closer to the section summary */
  padding: 20px 16px; /* maintains a clickable area of 64px for the collapsed section */
`;
