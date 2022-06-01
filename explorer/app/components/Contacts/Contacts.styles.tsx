import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";

export const Text = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.colorInk};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
