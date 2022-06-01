import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  border-left: 1px solid ${({ theme }) => theme.palette.colorSmoke};
  height: 100%;

  ${({ theme }) => `
    ${theme.breakpoints.down("lg")} {
      ${
        css`
          display: none;
        `.styles
      }
    }
  `}
`;
