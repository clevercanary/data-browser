import { ButtonPrimary } from "@clevercanary/data-explorer-ui/lib/components/common/Button/button.styles";
import { FluidPaper } from "@clevercanary/data-explorer-ui/lib/components/common/Paper/paper.styles";
import { SectionTitle } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionTitle/sectionTitle";
import {
  Section,
  SectionActions,
  SectionContent,
  SectionText,
} from "@clevercanary/data-explorer-ui/lib/components/common/Section/section.styles";
import { ANCHOR_TARGET } from "@clevercanary/data-explorer-ui/lib/components/Links/common/entities";
import Link from "next/link";
import React from "react";
import { BatchNormalizationWarning } from "../../../BatchNormalizationWarning/batchNormalizationWarning";

interface Props {
  terraUrl: string;
}

export const ExportToTerraReady = ({ terraUrl }: Props): JSX.Element => {
  return (
    <FluidPaper>
      <Section>
        <SectionContent>
          <SectionTitle title="Your Terra Workspace Link is Ready" />
          <SectionText component="div" variant="text-body-400-2lines">
            <p>
              Your Terra Workspace has been opened in a new browser tab. The
              workspace URL is referenced below.
            </p>
            <BatchNormalizationWarning />
          </SectionText>
        </SectionContent>
        <SectionActions>
          <Link href={terraUrl} passHref>
            <ButtonPrimary
              href="passHref"
              rel="noopener"
              target={ANCHOR_TARGET.BLANK}
            >
              Open Terra
            </ButtonPrimary>
          </Link>
        </SectionActions>
      </Section>
    </FluidPaper>
  );
};
