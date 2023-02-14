import { HeroTitle } from "@clevercanary/data-explorer-ui/lib/components/common/Title/title";
import React, { ReactNode } from "react";
import { Hero } from "./components/Hero/hero";
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
