// Core dependencies
import { Theme, useMediaQuery } from "@mui/material";
import React, { Fragment, ReactNode } from "react";

// App dependencies
import { FlatPaper } from "../common/Paper/paper.styles";

// Styles
import {
  Project as ProjectLayout,
  ProjectOverview as Overview,
  ProjectOverviewMain as Main,
  ProjectOverviewSide as Side,
} from "./project.styles";

interface Props {
  mainColumn: ReactNode;
  sideColumn: ReactNode;
  top: ReactNode;
}

export const Project = ({
  mainColumn,
  sideColumn,
  top,
}: Props): JSX.Element => {
  const tablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("tablet")
  );
  const ProjectOverview = tablet ? Overview : Overview.withComponent(FlatPaper);
  const ProjectOverviewMain = tablet ? Main : Fragment;
  const ProjectOverviewSide = tablet ? Side : Fragment;
  return (
    <ProjectLayout>
      {top}
      <ProjectOverview>
        <ProjectOverviewMain>{mainColumn}</ProjectOverviewMain>
        <ProjectOverviewSide>{sideColumn}</ProjectOverviewSide>
      </ProjectOverview>
    </ProjectLayout>
  );
};
