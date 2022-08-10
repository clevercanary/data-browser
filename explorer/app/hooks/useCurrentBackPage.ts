// Core dependencies
import { useRouter } from "next/router";
import { useMemo } from "react";

// App dependencies
import { PARAMS_INDEX_TAB } from "app/shared/constants";
import { BackPageConfig } from "../config/common/entities";
import { useCurrentEntity } from "./useCurrentEntity";

/**
 * Model of current selected tab and the tab's corresponding route in the set of tabs.
 */
export interface CurrentBackPageTab {
  currentTab: BackPageConfig;
  route: string;
}

/**
 * Hook to get the current tab and its route that will be used to create the backpage.
 * @returns Current tab and current tab route.
 */
export const useCurrentBackPage = (): CurrentBackPageTab => {
  const router = useRouter();
  const currentEntity = useCurrentEntity();
  const tabRoute = router.query.params?.[PARAMS_INDEX_TAB] ?? "";

  const currentTab = useMemo(
    () =>
      !currentEntity.backPage.tabs
        ? ({
            label: "",
            mainColumn: [],
            route: "",
            sideColumn: [],
          } as BackPageConfig)
        : currentEntity.backPage.tabs.find((tab) => tab.route === tabRoute) ||
          currentEntity.backPage.tabs[0],
    [currentEntity.backPage.tabs, tabRoute]
  );

  return {
    currentTab,
    route: tabRoute,
  };
};
