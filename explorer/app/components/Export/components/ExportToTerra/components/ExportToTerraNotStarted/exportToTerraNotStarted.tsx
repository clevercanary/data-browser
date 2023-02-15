import { ButtonPrimary } from "@clevercanary/data-explorer-ui/lib/components/common/Button/button.styles";
import { FluidPaper } from "@clevercanary/data-explorer-ui/lib/components/common/Paper/paper.styles";
import { SectionTitle } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/SectionTitle/sectionTitle";
import {
  Section,
  SectionActions,
  SectionContent,
} from "@clevercanary/data-explorer-ui/lib/components/common/Section/section.styles";
import React from "react";
import { BatchNormalizationWarning } from "../../../BatchNormalizationWarning/batchNormalizationWarning";

export type RunFn = () => void;

interface Props {
  run: RunFn;
}

export const ExportToTerraNotStarted = ({ run }: Props): JSX.Element => {
  return (
    <FluidPaper>
      <Section>
        <SectionContent>
          <SectionTitle title="Export To Terra" />
          <BatchNormalizationWarning />
        </SectionContent>
        <SectionActions>
          <ButtonPrimary onClick={run}>Request link</ButtonPrimary>
        </SectionActions>
      </Section>
    </FluidPaper>
  );
};
