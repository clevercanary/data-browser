// Core dependencies
import React, { ReactNode } from "react";

// App dependencies
import { Hero } from "./components/Hero/hero";
import { HeroTitle } from "../common/Title/title";

// Styles
import { Index as IndexLayout } from "./index.styles";

interface Props {
  entities?: ReactNode;
  Summaries?: ReactNode;
  Tabs?: ReactNode;
  title: HeroTitle;
}

export const Index = ({
  entities,
  Summaries,
  Tabs,
  title,
}: Props): JSX.Element => {
  return (
    <IndexLayout>
      <Hero Summaries={Summaries} title={title} />
      {Tabs}
      {entities}
    </IndexLayout>
  );
};
