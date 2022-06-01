import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Value = styled(Typography)`
  color: ${({ theme }) => theme.palette.colorInk};
`;

export const Label = styled(Typography)`
  color: ${({ theme }) => theme.palette.colorInkLight};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(4)};
`;
