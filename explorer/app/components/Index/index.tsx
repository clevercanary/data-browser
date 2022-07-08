// Core dependencies
import React, { ReactNode } from "react";

// App dependencies
import { IndexTitle } from "./common/entities";
import { Hero } from "./components/Hero/hero";

// Styles
import { Index as IndexLayout } from "./index.styles";

interface Props {
  entities?: ReactNode;
  Summaries?: ReactNode;
  Tabs?: ReactNode;
  title: IndexTitle;
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
