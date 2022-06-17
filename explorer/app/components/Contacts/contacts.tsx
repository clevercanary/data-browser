// Core dependencies
import { Link as EmailLink, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

// Styles
import {
  SectionContent,
  SectionContentListItem,
} from "../Section/components/SectionContent/sectionContent.styles";

interface Contact {
  email?: string;
  institution?: string;
  name: string;
}

interface Props {
  contacts: Contact[];
}

export const Contacts = ({ contacts }: Props): JSX.Element => {
  return (
    <SectionContent gap={4}>
      {contacts.map(({ email, institution, name }, c) => (
        <SectionContentListItem key={`${name}${c}`}>
          <Typography variant="text-body-500">{name}</Typography>
          {institution && (
            <Typography variant="text-body-400">{institution}</Typography>
          )}
          {email && (
            <Link href={`mailto:${email}`} passHref>
              <EmailLink variant="text-body-400">{email}</EmailLink>
            </Link>
          )}
        </SectionContentListItem>
      ))}
    </SectionContent>
  );
};
