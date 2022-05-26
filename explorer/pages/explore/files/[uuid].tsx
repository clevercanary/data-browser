import React from "react";
import { Page } from "../../../app/components";
import { DetailViewModel } from "../../../app/models";
import { DetailContainer } from "../../../app/project/detail";

const FilesDetailPage: React.FC<DetailViewModel> = (props: DetailViewModel) => {
  return (
    <Page>
      <DetailContainer {...props} />
    </Page>
  );
};

export default FilesDetailPage;
