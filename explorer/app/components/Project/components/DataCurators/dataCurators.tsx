import React from "react";
import { SectionDetailsEmpty } from "../../../Detail/components/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import { Section } from "../../../Detail/components/Section/section";
import { DataCurator } from "../../common/entities";

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
