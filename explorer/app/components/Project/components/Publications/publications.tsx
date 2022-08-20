import { Typography } from "@mui/material";
import React from "react";
import { SectionDetailsEmpty } from "../../../Detail/components/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import { Section } from "../../../Detail/components/Section/section";
import { ANCHOR_TARGET, Link } from "../../../Links/components/Link/link";
import { Publication } from "../../common/entities";

interface Props {
  publications?: Publication[];
}

export const Publications = ({ publications }: Props): JSX.Element => {
  return (
    <Section collapsable title="Publications">
      {publications ? (
        <div>
          {publications.map(
            (
              { officialHcaPublication, publicationTitle, publicationUrl },
              p
            ) => (
              <Typography key={`${publicationTitle}${p}`}>
                <Link
                  label={publicationTitle}
                  target={ANCHOR_TARGET.BLANK}
                  url={publicationUrl}
                />
                {officialHcaPublication && (
                  <span> (Official HCA Publication)</span>
                )}
              </Typography>
            )
          )}
        </div>
      ) : (
        <SectionDetailsEmpty />
      )}
    </Section>
  );
};
