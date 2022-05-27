import React from "react";
import { Page } from "../../../app/components/Page/Page";
import { DetailViewModel } from "../../../app/models/viewModels";
import { DetailContainer } from "../../../app/project/detail/DetailContainer";

const FilesDetailPage: React.FC<DetailViewModel> = (props: DetailViewModel) => {
  return (
    <Page>
      <DetailContainer {...props} />
    </Page>
  );
};

export default FilesDetailPage;
