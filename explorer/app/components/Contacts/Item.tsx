import Link from "next/link";
import React from "react";
import { ItemContainer, TextItem as Text } from "./Contacts.styles";

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
      {email && (
        <Link href={`mailto:${email}`} passHref>
          <Text
            variant="textBody400"
            component="a"
            customColor="colorPrimartAnvil"
          >
            {email}
          </Text>
        </Link>
      )}
    </ItemContainer>
  );
};
