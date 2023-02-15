import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { SectionDetailsEmpty } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import React from "react";
import { DataCurator } from "../../common/entities";

interface Props {
  dataCurators?: DataCurator[];
}

export const DataCurators = ({ dataCurators }: Props): JSX.Element => {
  return (
    <CollapsableSection collapsable title="Data Curators">
      {dataCurators ? (
        <div>
          {dataCurators.map((name, n) => (
            <div key={`${name}${n}`}>{name}</div>
          ))}
        </div>
      ) : (
        <SectionDetailsEmpty />
      )}
    </CollapsableSection>
  );
};
