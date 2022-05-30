import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.nav`
  display: flex;

  & > .MuiTypography-root {
    margin: ${({ theme }) => theme.spacing(0, 2)};
    color: ${({ theme }) => theme.palette.colorInk};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing(2, 2)};
    box-sizing: border-box;
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.colorSmokeLight};
    }
  }

  ${({ theme }) => `
    ${theme.breakpoints.down("lg")} {
      ${
        css`
          flex-direction: column;

          & > .MuiTypography-root {
            padding: ${theme.spacing(4, 2)};
          }
        `.styles
      }
    }
  `}
`;
