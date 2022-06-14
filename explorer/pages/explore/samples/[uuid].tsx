import React from "react";
import { Page } from "../../../app/components/Page/page";
import { DetailModel } from "../../../app/models/viewModels";
import { DetailContainer } from "../../../app/entity/detail/DetailContainer";

const SamplesDetailPage = (props: DetailModel): JSX.Element => {
  return (
    <Page>
      <DetailContainer {...props} />
    </Page>
  );
};

export default SamplesDetailPage;
