/**
 * Index page hero component comprising title, summary counts, and export button.
 */

// Core dependencies
import React, { ReactNode } from "react";
import Link from "next/link";

// App dependencies
import { HeroTitle, Title } from "../../../common/Title/title";

// Styles
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
