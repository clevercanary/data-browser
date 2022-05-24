import { config } from "app/config";
import { detailToView } from "app/transformers/hca";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { Page } from "../../../app/components";
import { ProjectViewModel } from "../../../app/models";
import { detail as projectDetail, listAll } from "../../../app/project/api";
import { ProjectDetailContainer } from "../../../app/project/detail";

interface PageUrl extends ParsedUrlQuery {
  uuid: string;
  slug: string;
}

const ProjectDetailPage: React.FC<ProjectViewModel> = (
  props: ProjectViewModel
) => {
  return (
    <Page>
      <ProjectDetailContainer {...props} />
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const entities = config().entities;

  const paths = await Promise.all(
    entities.map(async (entity) => {
      if (entity.loadStaticallyDetail) {
        const data = await listAll(entity.apiPath);
        return data.hits.map((hit) => ({
          params: {
            uuid: hit.projects[0].projectId,
            slug: entity.route,
          },
        }));
      }

      return [];
    })
  );

  const result = paths
    .reduce((prev, curr) => [...prev, ...curr], [])
    .filter(({ params }) => !!params);

  return {
    paths: result,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const data = await projectDetail((params as PageUrl).uuid);
  return {
    props: detailToView(data),
  };
};

export default ProjectDetailPage;
