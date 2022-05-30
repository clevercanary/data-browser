import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { css } from "@emotion/react";

const showIconButton = css`
  display: inline-block;
`;

const hideButton = css`
  display: none;
`;

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.typography.textBody500.fontSize};
  color: ${({ theme }) => theme.palette.colorInk};
  text-transform: none;

  .MuiButton-startIcon {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.colorSmokeLight};
  }

  ${({ theme }) => `
    ${theme.breakpoints.down("lg")} {
      ${hideButton.styles}
    }
  `}
`;

export const StyledIconButton = styled(IconButton)`
  display: none;
  color: ${({ theme }) => theme.palette.colorInk};

  &:hover {
    background-color: ${({ theme }) => theme.palette.colorSmokeLight};
  }

  ${({ theme }) => `
    ${theme.breakpoints.down("lg")} {
      ${showIconButton.styles}
    }
  `}
`;
