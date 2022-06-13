/**
 * Container component that will wrap all presentational components used by an entity detail page
 */
import { Layout } from "app/components";
import { ComponentCreator } from "app/components/ComponentCreator/ComponentCreator";
import { useConfig } from "app/hooks/useConfig";
import { useEntityDetailData } from "app/hooks/useEntityData";
import React from "react";
import { DetailViewModel } from "../../models/viewModels";

export const DetailContainer = (props: DetailViewModel) => {
  const { apiData, isLoading } = useEntityDetailData(props);
  const config = useConfig();
  const mainColumn = config.detail?.mainColumn;
  const sideColumn = config.detail?.sideColumn;

  if (isLoading || !apiData) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  if (!mainColumn || !sideColumn) {
    return null;
  }

  return (
    <Layout
      mainColumn={<ComponentCreator components={mainColumn} detail={apiData} />}
      sideColumn={<ComponentCreator components={sideColumn} detail={apiData} />}
    />
  );
};
