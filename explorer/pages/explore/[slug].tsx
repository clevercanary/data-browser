import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { Page } from "../../app/components";
import { ListViewModel } from "../../app/models";
import { ListContainer } from "../../app/project/list";
import { config } from "app/config";
import { ParsedUrlQuery } from "querystring";
import { EMPTY_PAGE, listAll } from "app/project/api";
import { getCurrentEntity } from "app/hooks/useCurrentEntity";

interface PageUrl extends ParsedUrlQuery {
  slug: string;
}

const ListPage: React.FC<ListViewModel> = (props: ListViewModel) => {
  return (
    <Page>
      <ListContainer {...props} />
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entities = config().entities;
  const paths = entities.map((entity) => ({
    params: {
      slug: entity.route,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ListViewModel> = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params as PageUrl;
  const entity = getCurrentEntity(slug);

  if (!entity) {
    return {
      notFound: true,
    };
  }

  const resultList = entity.staticLoad
    ? await listAll(entity.apiPath)
    : EMPTY_PAGE;

  return {
    props: {
      ...entity.listTransformer(resultList),
    },
  };
};

export default ListPage;
