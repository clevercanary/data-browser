/**
 * Container component that will wrap all presentational components used by an entity detail page
 */
import { ComponentCreator } from "app/components/ComponentCreator/ComponentCreator";
import { config } from "app/config/config";
import { useEntityDetailData } from "app/hooks/useEntityData";
import React from "react";
import { DetailViewModel } from "../../models/viewModels";

export const DetailContainer = (props: DetailViewModel) => {
  const { apiData, isLoading } = useEntityDetailData(props);
  const components = config().detail?.components;

  if (isLoading || !apiData) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  if (!components) {
    return null;
  }

  return <ComponentCreator components={components} detail={apiData} />;
};
