import { config, getEntityConfig } from "app/config/config";
import { getEntityService } from "app/hooks/useEntityService";
import { PARAMS_INDEX_UUID } from "app/shared/constants";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { AzulEntityStaticResponse } from "../../app/apis/azul/common/entities";
import { EntityConfig } from "../../app/config/common/entities";
import { database } from "../../app/utils/database";
import { readFile } from "../../app/utils/tsvParser";
import { EntityDetailView } from "../../app/views/EntityDetailView/entityDetailView";

interface PageUrl extends ParsedUrlQuery {
  entityListType: string;
  params: string[];
}

export interface EntityDetailPageProps extends AzulEntityStaticResponse {
  entityListType: string;
}

/**
 * Entity detail view page.
 * @param props - Entity detail view page props.
 * @param props.entityListType - Entity list type.
 * @returns Entity detail view component.
 */
const EntityDetailPage = (props: EntityDetailPageProps): JSX.Element => {
  if (!props.entityListType) return <></>;
  return <EntityDetailView {...props} />;
};

/**
 * Seed database.
 * @param entityListType - Entity list type.
 * @param entityConfig - Entity config.
 */
const seedDatabase = async function seedDatabase(
  entityListType: string,
  entityConfig: EntityConfig
): Promise<void> {
  const { label, staticEntityImportMapper, staticLoadFile } = entityConfig;

  if (!staticLoadFile) {
    throw new Error(`staticLoadFile not found for entity entity ${label}`);
  }

  // Build database from configured TSV, if any.
  const rawData = await readFile(staticLoadFile);

  if (!rawData) {
    throw new Error(`File ${staticLoadFile} not found for entity ${label}`);
  }

  const object = JSON.parse(rawData.toString());
  const entities = staticEntityImportMapper
    ? Object.values(object).map(staticEntityImportMapper)
    : Object.values(object);

  // Seed entities.
  database.get().seed(entityListType, entities);
};

/**
 * getStaticPaths - return the list of paths to prerender for each entity type and its tabs.
 */
export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const entities = config().entities;
  const paths = await Promise.all(
    entities.map(async (entityConfig) => {
      // Seed database.
      if (
        entityConfig &&
        entityConfig.staticLoad &&
        entityConfig.detail.staticLoad
      ) {
        await seedDatabase(entityConfig.route, entityConfig);
      }

      const resultParams: { params: PageUrl }[] = [];
      if (entityConfig.detail.staticLoad && entityConfig.getId) {
        const { fetchAllEntities, path } = getEntityService(entityConfig);
        console.log(path);
        const data = await fetchAllEntities(path);
        const tabs = entityConfig.detail?.tabs.map((tab) => tab.route) ?? [];

        // process all hits
        data.hits.forEach((hit) => {
          // process all tabs on each hit
          // TODO maybe we dont't want to pre-render the tabs.
          tabs.forEach((tab) => {
            resultParams.push({
              params: {
                entityListType: entityConfig.route,
                params: [entityConfig.getId?.(hit) ?? "", tab],
              },
            });
          });
        });
      }
      return resultParams;
    })
  );

  const result = paths
    .reduce((prev, curr) => [...prev, ...curr], [])
    .filter(({ params }) => !!params); // TODO why is this filter needed?

  return {
    fallback: false, // others e.g. true, blocking are not supported with next export
    paths: result,
  };
};

export const getStaticProps: GetStaticProps<AzulEntityStaticResponse> = async ({
  params,
}: GetStaticPropsContext) => {
  const { entityListType } = params as PageUrl;
  const entityConfig = getEntityConfig(entityListType);

  if (!entityConfig) {
    return {
      notFound: true,
    };
  }

  const props: EntityDetailPageProps = { entityListType: entityListType };
  if (entityConfig.detail.staticLoad) {
    // Seed database.
    if (
      entityConfig &&
      entityConfig.staticLoad &&
      entityConfig.detail.staticLoad
    ) {
      await seedDatabase(entityConfig.route, entityConfig);
    }

    const { fetchEntityDetail, path } = getEntityService(entityConfig);
    const data = await fetchEntityDetail(
      (params as PageUrl).params[PARAMS_INDEX_UUID],
      path
    );
    props.data = data;
  }
  return {
    props,
  };
};

export default EntityDetailPage;
