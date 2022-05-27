import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;

  & > .MuiTypography-root {
    margin: ${({ theme }) => theme.spacing(0, 4)};
    color: ${({ theme }) => theme.palette.colorInk};
    text-decoration: none;
  }
`;
