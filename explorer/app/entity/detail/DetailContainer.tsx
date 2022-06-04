/**
 * Container component that will wrap all presentational components used by an entity detail page
 */
import { MAP } from "app/components";
import { config } from "app/config/config";
import { useEntityDetailData } from "app/hooks/useEntityData";
import { DetailResponseType } from "app/models/responses";
import React from "react";
import { PrettyJSON } from "../../components/PrettyJSON/PrettyJSON";
import { DetailViewModel } from "../../models/viewModels";

const getComponents = (detail: DetailResponseType) => {
  const components = config().detail?.components;
  return components?.map((c) => {
    const props = c.transformer ? c.transformer(detail).args : c.props?.args;
    return React.createElement(MAP[c.component] as any, { ...props });
  });
};

export const DetailContainer = (props: DetailViewModel) => {
  const { data, isLoading, apiData } = useEntityDetailData(props);

  if (isLoading || !data || !apiData) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  const { detailName, json } = data;

  return (
    <>
      <h1>{detailName}</h1>
      {getComponents(apiData!)}
      {json && <PrettyJSON value={json} />}
    </>
  );
};
