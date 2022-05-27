import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: ${({ theme }) => theme.spacing(5)};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
