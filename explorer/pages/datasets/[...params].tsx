// Core dependencies
import { NextPage } from "next";
import React from "react";

// App dependencies
import { DetailPageModel } from "app/models/viewModels";
import { Project } from "../../app/views/Project/project";
import { withNonStacticDetail } from "app/hocs/withNonStaticDetail";
import { DetailPage } from "app/components/Layout/components/DetailPage/detailPage";

type DatasetPageProps = DetailPageModel;

/**
 * Dataset detail page
 * @param props - props that will be drilled to children components
 * @param props.slug - slug of the current path
 * @param props.errorCode - error code, if any, used to present the correct ErrorPage
 * @returns Element rendered as dataset detail page.
 */
const DatasetPage: NextPage<DatasetPageProps> = ({
  slug,
  errorCode,
  ...props
}: DatasetPageProps) => {
  return (
    <DetailPage slug={slug} errorCode={errorCode}>
      <Project {...props} />
    </DetailPage>
  );
};

export default withNonStacticDetail(DatasetPage);
