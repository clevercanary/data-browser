import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.typography.textBody500.fontSize};
  color: ${({ theme }) => theme.palette.colorInk};
  text-transform: none;

  .MuiButton-startIcon {
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }
`;
