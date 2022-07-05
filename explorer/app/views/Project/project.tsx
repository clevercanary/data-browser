// Core dependencies
import React from "react";
import { useRouter } from "next/router";

// App dependencies
import { ComponentCreator } from "app/components/ComponentCreator/ComponentCreator";
import { Project as ProjectView } from "app/components/Project/project";
import { useCurrentEntity } from "app/hooks/useCurrentEntity";
import { useFetchEntity } from "app/hooks/useFetchEntity";
import { DetailModel } from "../../models/viewModels";
import { useCurrentDetailTab } from "app/hooks/useCurrentDetailTab";
import { TabControllerProvider } from "app/components/Tabs/context";
import { UUID_PARAM_INDEX } from "app/shared/constants";

export const Project = (props: DetailModel) => {
  const { response, isLoading } = useFetchEntity(props);
  const { push, query } = useRouter();
  const uuid = query.param?.[UUID_PARAM_INDEX];
  const entity = useCurrentEntity();
  const { currentTab, tabIndex } = useCurrentDetailTab();
  const mainColumn = currentTab.mainColumn;
  const sideColumn = currentTab.sideColumn;
  const top = entity.detail.top;

  if (isLoading) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  const handleTabChanged = (index: number) => {
    const newTab = entity.detail.tabs[index];
    if (newTab) {
      push(`/explore/${entity.route}/${uuid}/${newTab.route}`);
    }
  };

  return (
    <TabControllerProvider
      value={{ onTabChange: handleTabChanged, selectedTab: tabIndex }}
    >
      <ProjectView
        mainColumn={
          <ComponentCreator components={mainColumn} response={response} />
        }
        sideColumn={
          <ComponentCreator components={sideColumn} response={response} />
        }
        top={<ComponentCreator components={top} response={response} />}
      />
    </TabControllerProvider>
  );
};
