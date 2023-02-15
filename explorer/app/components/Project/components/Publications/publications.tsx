import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { SectionDetailsEmpty } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import { ANCHOR_TARGET } from "@clevercanary/data-explorer-ui/lib/components/Links/common/entities";
import { Link } from "@clevercanary/data-explorer-ui/lib/components/Links/components/Link/link";
import { Typography } from "@mui/material";
import React from "react";
import { Publication } from "../../common/entities";

interface Props {
  publications?: Publication[];
}

export const Publications = ({ publications }: Props): JSX.Element => {
  return (
    <CollapsableSection collapsable title="Publications">
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
    </CollapsableSection>
  );
};
