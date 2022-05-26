import React from "react";
import { Page } from "../../../app/components";
import { DetailViewModel } from "../../../app/models";
import { DetailContainer } from "../../../app/project/detail";

const SamplesDetailPage: React.FC<DetailViewModel> = (
  props: DetailViewModel
) => {
  return (
    <Page>
      <DetailContainer {...props} />
    </Page>
  );
};

export default SamplesDetailPage;
