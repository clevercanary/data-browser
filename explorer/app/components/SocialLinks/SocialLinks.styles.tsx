import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;

  & > * {
    margin: ${({ theme }) => theme.spacing(0, 1)};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
