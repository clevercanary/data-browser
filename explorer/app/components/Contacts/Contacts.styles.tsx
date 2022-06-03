import styled from "@emotion/styled";
import { Text } from "../Text/Text";

export const TextItem = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
