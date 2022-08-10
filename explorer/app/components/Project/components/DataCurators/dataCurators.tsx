// Core dependencies
import React from "react";

// App dependencies
import { DataCurator } from "../../common/entities";
import { Section } from "../Section/section";
import { SectionDetailsEmpty } from "../Section/components/SectionDetailsEmpty/sectionDetailsEmpty";

interface Props {
  dataCurators?: DataCurator[];
}

export const DataCurators = ({ dataCurators }: Props): JSX.Element => {
  return (
    <Section collapsable title="Data Curators">
      {dataCurators ? (
        <div>
          {dataCurators.map((name, n) => (
            <div key={`${name}${n}`}>{name}</div>
          ))}
        </div>
      ) : (
        <SectionDetailsEmpty />
      )}
    </Section>
  );
};
