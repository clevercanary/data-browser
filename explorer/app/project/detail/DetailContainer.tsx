/**
 * Container component that will wrap all presentational components used by the project's detail page
 */
import React from "react";
import { PrettyJSON } from "../../components";
import { DetailViewModel } from "../../models";

export const DetailContainer = ({ json, detailName }: DetailViewModel) => {
  return (
    <>
      <h1>{detailName}</h1>
      {json && <PrettyJSON value={json} />}
    </>
  );
};
