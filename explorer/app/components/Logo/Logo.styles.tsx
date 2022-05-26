import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SloganContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  border-left: 1px solid ${({ theme }) => theme.palette.colorSmoke};
  max-width: 160px;
`;
