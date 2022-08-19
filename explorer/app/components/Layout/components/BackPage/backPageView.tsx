import React, { Fragment, ReactNode } from "react";
import {
  BREAKPOINT,
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "../../../../hooks/useBreakpointHelper";
import {
  BackPageHero,
  BackPageOverview,
  BackPageOverviewMain as Main,
  BackPageOverviewSide as Side,
  BackPageTabs,
  BackPageView as BackPageLayout,
} from "./backPageView.styles";

interface Props {
  mainColumn: ReactNode;
  sideColumn: ReactNode;
  Tabs?: ReactNode;
  top: ReactNode;
}

export const BackPageView = ({
  mainColumn,
  sideColumn,
  Tabs,
  top,
}: Props): JSX.Element => {
  const tablet = useBreakpointHelper(BREAKPOINT_FN_NAME.UP, BREAKPOINT.TABLET);
  const BackPageOverviewMain = tablet ? Main : Fragment;
  const BackPageOverviewSide = tablet ? Side : Fragment;
  return (
    <BackPageLayout>
      <BackPageHero>{top}</BackPageHero>
      {Tabs && <BackPageTabs>{Tabs}</BackPageTabs>}
      <BackPageOverview>
        <BackPageOverviewMain>{mainColumn}</BackPageOverviewMain>
        <BackPageOverviewSide>{sideColumn}</BackPageOverviewSide>
      </BackPageOverview>
    </BackPageLayout>
  );
};
