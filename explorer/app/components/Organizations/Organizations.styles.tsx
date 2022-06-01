import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";

export const Text = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.colorInk};
`;

export const Citation = styled.sup`
  color: ${({ theme }) => theme.palette.colorInk};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 10px;
`;

export const ItemContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
