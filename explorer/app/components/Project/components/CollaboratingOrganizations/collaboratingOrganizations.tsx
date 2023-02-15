import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { SectionDetailsEmpty } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import React from "react";
import { CollaboratingOrganization } from "../../common/entities";
import { Sup } from "../Sup/Sup.styles";

interface Props {
  collaboratingOrganizations?: CollaboratingOrganization[];
}

export const CollaboratingOrganizations = ({
  collaboratingOrganizations,
}: Props): JSX.Element => {
  return (
    <CollapsableSection collapsable title="Collaborating Organizations">
      {collaboratingOrganizations ? (
        <div>
          {collaboratingOrganizations.map(({ citation, name }, c) => (
            <div key={`${name}${c}`}>
              <Sup>{citation}</Sup>
              <span>{name}</span>
            </div>
          ))}
        </div>
      ) : (
        <SectionDetailsEmpty />
      )}
    </CollapsableSection>
  );
};
