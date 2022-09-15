import { Tabs, TabsValue, TabValue } from "app/components/common/Tabs/tabs";
import { ComponentCreator } from "app/components/ComponentCreator/ComponentCreator";
import { NoResults } from "app/components/NoResults/noResults";
import { TableCreator } from "app/components/TableCreator/tableCreator";
import { useCurrentEntityConfig } from "app/hooks/useCurrentEntityConfig";
import { useEntityList } from "app/hooks/useEntityList";
import { useResetableState } from "app/hooks/useResetableState";
import { useRouter } from "next/router";
import React from "react";
import {
  AzulEntitiesResponse,
  AzulEntitiesStaticResponse,
  AzulSummaryResponse,
} from "../../apis/azul/common/entities";
import { Filters } from "../../components/Filter/components/Filters/filters";
import { Index as IndexView } from "../../components/Index/index";
import { SidebarLabel } from "../../components/Layout/components/Sidebar/components/SidebarLabel/sidebarLabel";
import { Sidebar } from "../../components/Layout/components/Sidebar/sidebar";
import { SummaryConfig } from "../../config/common/entities";
import { config, getTabs } from "../../config/config";
import { useSummary } from "../../hooks/useSummary";

// TODO(Dave) create an interface for props and maybe not drill the static load through here
export const ExploreView = (props: AzulEntitiesStaticResponse): JSX.Element => {
  const { disablePagination, explorerTitle, summaryConfig } = config();
  const currentEntityConfig = useCurrentEntityConfig();

  const route = currentEntityConfig.route;

  const { push } = useRouter();

  // Init tabs state.
  const [tabsValue, setTabsValue] = useResetableState<TabsValue>(route);
  const tabs = getTabs();

  // Fetch summary and entities.
  const { response: summaryResponse } = useSummary();
  const { categories, loading, onFilter, pagination, response, sort } =
    useEntityList(props);

  // Get the column config for the current entity.
  const columnsConfig = currentEntityConfig.list.columns;

  /**
   * Callback fired when selected tab value changes.
   * - Sets state tabsValue to selected tab value.
   * - Executes a pushState and resets pagination.
   * @param tabValue - Selected tab value.
   */
  const onTabChange = (tabValue: TabValue): void => {
    setTabsValue(tabValue); // Set state tabsValue prior to route change to indicate selection success.
    push(`/${tabValue}`);
    pagination?.resetPage();
  };

  /**
   * Render either a loading view, empty result set notification or the table itself.
   * @param entitiesResponse - ExploreView responses from Azul, such as projects (index/projects), samples (index/samples) and files (index/files).
   * @returns Element to render.
   */
  const renderContent = (
    entitiesResponse?: AzulEntitiesResponse
  ): JSX.Element => {
    if (!entitiesResponse) {
      return <></>; //TODO: return the loading UI component
    }

    if (!entitiesResponse.hits || entitiesResponse.hits.length === 0) {
      return (
        <NoResults
          // actions={
          //   <>
          //     <ButtonPrimary
          //       onClick={(): void => console.log("Remove last filter")} // TODO create "remove last filter" function
          //     >
          //       Remove last filter
          //     </ButtonPrimary>
          //     <ButtonSecondary
          //       onClick={(): void => console.log("Clear all filters")} // TODO create "clear all filters" function
          //     >
          //       Clear all filters
          //     </ButtonSecondary>
          //   </>
          // }
          title={"No Results found"}
        />
      );
    }

    return (
      <TableCreator
        columns={columnsConfig}
        items={entitiesResponse.hits}
        pageSize={entitiesResponse.pagination.size}
        total={entitiesResponse.pagination.total}
        pageCount={entitiesResponse.pagination.count}
        pagination={pagination}
        sort={sort}
        pages={entitiesResponse.pagination.pages}
        loading={loading}
        staticallyLoaded={currentEntityConfig.staticLoad}
        disablePagination={disablePagination}
      />
    );
  };

  return (
    <>
      {categories && !!categories.length && (
        <Sidebar Label={<SidebarLabel label={"Filters"} />}>
          <Filters categories={categories} onFilter={onFilter} />
        </Sidebar>
      )}
      <IndexView
        entities={renderContent(response)}
        Summaries={renderSummary(summaryConfig, summaryResponse)}
        Tabs={<Tabs onTabChange={onTabChange} tabs={tabs} value={tabsValue} />}
        title={explorerTitle}
      />
    </>
  );
};

/**
 * Renders Summaries component when all the following requirements are fulfilled:
 * - defined summary config,
 * - valid summary response, and
 * - defined summaries transformed from the given summary response.
 * @param summaryConfig - Summary config.
 * @param summaryResponse - Response model return from summary API.
 * @returns rendered Summaries component.
 */
function renderSummary(
  summaryConfig?: SummaryConfig,
  summaryResponse?: AzulSummaryResponse
): JSX.Element | undefined {
  if (!summaryConfig || !summaryResponse) {
    return;
  }
  /* Render the Summaries component. */
  return (
    <ComponentCreator
      components={summaryConfig.components}
      response={summaryResponse}
    />
  );
}