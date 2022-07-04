// Core dependencies
import React, { Fragment, ReactNode } from "react";

// App dependencies
import { FlatPaper } from "../common/Paper/paper.styles";
import { Tabs } from "../Tabs/tabs";

// Styles
import {
  BREAKPOINT,
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "../../hooks/useBreakpointHelper";
import {
  Container,
  Project as ProjectLayout,
  ProjectHero,
  ProjectOverview as Overview,
  ProjectOverviewMain as Main,
  ProjectOverviewSide as Side,
} from "./project.styles";

interface Props {
  tabs: { label: string }[];
  mainColumn: ReactNode;
  sideColumn: ReactNode;
  top: ReactNode;
  tabIndex: number;
  onTabChange: (newTab: number) => void;
}

export const Project = ({
  mainColumn,
  sideColumn,
  top,
  tabs,
  tabIndex,
  onTabChange,
}: Props): JSX.Element => {
  const tablet = useBreakpointHelper(BREAKPOINT_FN_NAME.UP, BREAKPOINT.TABLET);
  const ProjectOverview = tablet ? Overview : Overview.withComponent(FlatPaper);
  const ProjectOverviewMain = tablet ? Main : Fragment;
  const ProjectOverviewSide = tablet ? Side : Fragment;
  return (
    <Container>
      <ProjectHero>{top}</ProjectHero>
      <Tabs onTabChange={onTabChange} selectedTab={tabIndex} tabs={tabs}>
        <ProjectLayout>
          <ProjectOverview>
            <ProjectOverviewMain>{mainColumn}</ProjectOverviewMain>
            <ProjectOverviewSide>{sideColumn}</ProjectOverviewSide>
          </ProjectOverview>
        </ProjectLayout>
      </Tabs>
    </Container>
  );
};
