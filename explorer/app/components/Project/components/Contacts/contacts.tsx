// Core dependencies
import { Link as EmailLink, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

// App dependencies
import { Contact } from "../../common/entities";
import { Section } from "../Section/section";
import { SectionDetailsEmpty } from "../Section/components/SectionDetailsEmpty/sectionDetailsEmpty";

// Styles
import { SectionContentListItem } from "../Section/section.styles";

interface Props {
  contacts?: Contact[];
}

export const Contacts = ({ contacts }: Props): JSX.Element => {
  return (
    <Section collapsable title="Contact">
      {contacts ? (
        contacts.map(({ email, institution, name }, c) => (
          <SectionContentListItem key={`${name}${c}`}>
            <Typography variant="text-body-500-2lines">{name}</Typography>
            {institution && <span>{institution}</span>}
            {email && (
              <Link href={`mailto:${email}`} passHref>
                <EmailLink>{email}</EmailLink>
              </Link>
            )}
          </SectionContentListItem>
        ))
      ) : (
        <SectionDetailsEmpty />
      )}
    </Section>
  );
};
