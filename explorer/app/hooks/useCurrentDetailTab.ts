import { EntityConfig } from "app/config/model";
import { useRouter } from "next/router";

/**
 * Hook to get the current tab that will be used to create the detail page
 * @param currentEntity
 */
export const useCurrentDetailTab = (currentEntity?: EntityConfig) => {
  const router = useRouter();
  const tabRoute = router.query.uuid?.[1] ?? "";

  if (!currentEntity) {
    return { currentTab: undefined, tabIndex: -1 };
  }

  const currentIndex =
    currentEntity.detail?.tabs.findIndex((tab) => tab.route === tabRoute) ?? 0;

  return {
    currentTab: currentEntity.detail?.tabs[currentIndex],
    tabIndex: currentIndex,
  };
};
