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

export const Project = (props: DetailModel) => {
  const { response, isLoading } = useFetchEntity(props);
  const { push, query } = useRouter();
  const uuid = query.uuid?.[0];
  const entity = useCurrentEntity();
  const { currentTab, tabIndex } = useCurrentDetailTab(entity);
  const mainColumn = currentTab?.mainColumn;
  const sideColumn = currentTab?.sideColumn;
  const top = entity?.detail?.top;
  const tabs = entity?.detail?.tabs.map((tab) => ({ label: tab.label }));

  if (isLoading || !response) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  if (!mainColumn || !sideColumn || !top || !tabs || !currentTab) {
    return null;
  }

  const handleTabChanged = (index: number) => {
    const newTab = entity.detail?.tabs[index];
    if (newTab) {
      push(`/explore/${entity.route}/${uuid}/${newTab.route}`);
    }
  };

  return (
    <ProjectView
      tabs={tabs}
      onTabChange={handleTabChanged}
      tabIndex={tabIndex}
      mainColumn={
        <ComponentCreator components={mainColumn} response={response} />
      }
      sideColumn={
        <ComponentCreator components={sideColumn} response={response} />
      }
      top={<ComponentCreator components={top} response={response} />}
    />
  );
};
