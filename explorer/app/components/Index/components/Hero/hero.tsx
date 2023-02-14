/**
 * ExploreView page hero component comprising title, summary counts, and export button.
 */

import {
  HeroTitle,
  Title,
} from "@clevercanary/data-explorer-ui/lib/components/common/Title/title";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
  ExportButton,
  HeroLayout,
  SummaryWidget,
  Widgets,
} from "./hero.styles";

interface Props {
  Summaries?: ReactNode;
  title: HeroTitle;
}

export const Hero = ({ Summaries, title }: Props): JSX.Element => {
  return (
    <HeroLayout>
      <Title title={title} />
      {Summaries && (
        <Widgets>
          <SummaryWidget buttonWidget={true}>
            {/* TODO +n link widget, and accompanying Dot separator */}
            {Summaries}
          </SummaryWidget>
          <Link href="/export" passHref>
            <ExportButton href="passHref">Export</ExportButton>
          </Link>
        </Widgets>
      )}
    </HeroLayout>
  );
};
