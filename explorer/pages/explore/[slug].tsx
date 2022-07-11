import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { Page } from "../../app/components/Layout/components/Page/page";
import { ListModel } from "../../app/models/viewModels";
import { ListContainer } from "../../app/entity/list/ListContainer";
import { config } from "app/config/config";
import { ParsedUrlQuery } from "querystring";
import { EMPTY_PAGE } from "app/entity/api/constants";
import { getCurrentEntity } from "app/hooks/useCurrentEntity";
import { getFetcher } from "app/hooks/useFetcher";

interface PageUrl extends ParsedUrlQuery {
  slug: string;
}

interface ListPageProps extends ListModel {
  slug: string;
}

const ListPage = ({ slug, ...props }: ListPageProps): JSX.Element => {
  if (!slug) return <></>;
  const entity = getCurrentEntity(slug, config());

  return (
    <Page entity={entity}>
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
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps<ListModel> = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params as PageUrl;
  const entity = getCurrentEntity(slug, config());
  const fetcher = getFetcher(entity);

  const resultList = entity.staticLoad
    ? await fetcher.listAll(fetcher.path)
    : EMPTY_PAGE;

  return {
    props: {
      data: resultList,
      slug,
    },
  };
};

export default ListPage;
