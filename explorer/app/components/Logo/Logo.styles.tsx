import styled from "@emotion/styled";

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
  max-width: 160px;
  height: 100%;
`;
