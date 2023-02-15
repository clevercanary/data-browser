import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { SectionDetailsEmpty } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import React from "react";
import { Contributor } from "../../common/entities";
import { Sup } from "../Sup/Sup.styles";

interface Props {
  contributors?: Contributor[];
}

export const Contributors = ({ contributors }: Props): JSX.Element => {
  return (
    <CollapsableSection collapsable title="Contributors">
      {contributors ? (
        <div>
          {contributors.map(({ citation, name, role }, c) => (
            <div key={`${name}${c}`}>
              <span>{name}</span>
              {role && <span> ({role})</span>}
              {citation && <Sup>{citation}</Sup>}
            </div>
          ))}
        </div>
      ) : (
        <SectionDetailsEmpty />
      )}
    </CollapsableSection>
  );
};
