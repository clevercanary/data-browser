import React from "react";
import { ItemContainer, Text } from "./Contacts.styles";

export interface ItemProps {
  name: string;
  institution?: string;
  email?: string;
}

export const Item = ({ name, institution, email }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Text variant="textBody400">{name}</Text>
      {institution && <Text variant="textBody400">{` (${institution})`}</Text>}
      {email && <Text variant="textBody400">{email}</Text>}
    </ItemContainer>
  );
};
