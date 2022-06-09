/**
 * Container component that will wrap all presentational components used by an entity detail page
 */
import { ComponentCreator } from "app/components/ComponentCreator/ComponentCreator";
import { config } from "app/config/config";
import { useEntityDetailData } from "app/hooks/useEntityData";
import React from "react";
import { PrettyJSON } from "../../components/PrettyJSON/PrettyJSON";
import { DetailViewModel } from "../../models/viewModels";

export const DetailContainer = (props: DetailViewModel) => {
  const { data, isLoading, apiData } = useEntityDetailData(props);
  const components = config().detail?.components;

  if (isLoading || !data || !apiData) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  if (!components) {
    return null;
  }

  const { detailName, json } = data;

  return (
    <>
      <h1>{detailName}</h1>
      <ComponentCreator components={components} detail={apiData!} />
      {json && <PrettyJSON value={json} />}
    </>
  );
};
