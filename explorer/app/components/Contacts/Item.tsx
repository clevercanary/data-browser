import Link from "next/link";
import React from "react";
import { ItemContainer } from "./Contacts.styles";
import { Text } from "../Text/Text";

export interface ItemProps {
  name: string;
  institution?: string;
  email?: string;
}

export const Item = ({ name, institution, email }: ItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Text variant="textBody4002Lines" customColor="colorInk">
        {name}
      </Text>
      {institution && (
        <Text
          variant="textBody4002Lines"
          customColor="colorInk"
        >{` (${institution})`}</Text>
      )}
      {email && (
        <Link href={`mailto:${email}`} passHref>
          <Text
            variant="textBody4002Lines"
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
