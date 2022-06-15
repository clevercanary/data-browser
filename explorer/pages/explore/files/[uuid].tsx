import React from "react";
import { Page } from "../../../app/components/Page/page";
import { DetailViewModel } from "../../../app/models/viewModels";
import { DetailContainer } from "../../../app/entity/detail/DetailContainer";

const FilesDetailPage = (props: DetailViewModel): JSX.Element => {
  return (
    <Page>
      <DetailContainer {...props} />
    </Page>
  );
};

export default FilesDetailPage;
