/**
 * Container component that will wrap all presentational components used by the project's detail page
 */
import { useEntityDetailData } from "app/hooks";
import React from "react";
import { PrettyJSON } from "../../components";
import { DetailViewModel } from "../../models";

export const DetailContainer = (props: DetailViewModel) => {
  const { data, isLoading } = useEntityDetailData(props);

  if (isLoading || !data) {
    return <span>LOADING...</span>; //TODO: return the loading UI component
  }

  const { detailName, json } = data;

  return (
    <>
      <h1>{detailName}</h1>
      {json && <PrettyJSON value={json} />}
    </>
  );
};
