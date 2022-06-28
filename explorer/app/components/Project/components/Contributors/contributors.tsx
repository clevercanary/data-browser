// Core dependencies
import React from "react";

// App dependencies
import { Sup } from "app/components/Citations/Citations.styles";
import { Section } from "../Section/section";
import { SectionDetailsEmpty } from "../Section/components/SectionDetailsEmpty/sectionDetailsEmpty";

export const enum CONTRIBUTOR_ROLE {
  DATA_CURATOR = "data curator",
}

export interface Contributor {
  citation?: number;
  name: string;
  role?: string;
}

interface Props {
  contributors?: Contributor[];
}

export const Contributors = ({ contributors }: Props): JSX.Element => {
  return (
    <Section collapsable title="Contributors">
      <div>
        {contributors ? (
          contributors.map(({ citation, name }) => (
            <div key={name}>
              <span>{name}</span>
              <Sup>{citation}</Sup>
            </div>
          ))
        ) : (
          <SectionDetailsEmpty />
        )}
      </div>
    </Section>
  );
};
