import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { SectionDetailsEmpty } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import { Stack } from "@clevercanary/data-explorer-ui/lib/components/common/Stack/stack";
import { ANCHOR_TARGET } from "@clevercanary/data-explorer-ui/lib/components/Links/common/entities";
import { Link } from "@clevercanary/data-explorer-ui/lib/components/Links/components/Link/link";
import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { SupplementaryLink } from "../../common/entities";
import {
  Marker,
  SupplementaryLink as EllipsisLink,
  SupplementaryList,
} from "./supplementaryLinks.styles";

interface Props {
  supplementaryLinks?: SupplementaryLink[];
}

export const SupplementaryLinks = ({
  supplementaryLinks,
}: Props): JSX.Element => {
  return (
    <CollapsableSection collapsable title="Supplementary Links">
      {supplementaryLinks ? (
        <Stack gap={2}>
          <Typography>
            Supplementary links are provided by contributors and represent items
            such as additional data which can’t be hosted here; code that was
            used to analyze this data; or tools and visualizations associated
            with this specific dataset.
          </Typography>
          <SupplementaryList>
            {supplementaryLinks.map((link, marker) => (
              <Fragment key={link}>
                <Marker>{marker + 1}.</Marker>
                <EllipsisLink>
                  <Link
                    copyable
                    label={link}
                    noWrap
                    target={ANCHOR_TARGET.BLANK}
                    url={link}
                  />
                </EllipsisLink>
              </Fragment>
            ))}
          </SupplementaryList>
        </Stack>
      ) : (
        <SectionDetailsEmpty />
      )}
    </CollapsableSection>
  );
};
