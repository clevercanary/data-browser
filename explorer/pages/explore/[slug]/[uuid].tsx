import { config } from "app/config";
import { getCurrentEntity } from "app/hooks/useCurrentEntity";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { Page } from "../../../app/components";
import { DetailViewModel } from "../../../app/models";
import { detail, listAll } from "../../../app/project/api";
import { DetailContainer } from "../../../app/project/detail";

interface PageUrl extends ParsedUrlQuery {
  uuid: string;
  slug: string;
}

const ProjectDetailPage: React.FC<DetailViewModel> = (
  props: DetailViewModel
) => {
  return (
    <Page>
      <DetailContainer {...props} />
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
            uuid: entity.getId(hit),
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

export const getStaticProps: GetStaticProps<DetailViewModel> = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params as PageUrl;
  const entity = getCurrentEntity(slug);
  let props: DetailViewModel = {};
  if (entity?.loadStaticallyDetail) {
    const data = await detail((params as PageUrl).uuid, entity.apiPath);
    props = entity.detailTransformer(data);
  }
  return {
    props,
  };
};

export default ProjectDetailPage;
