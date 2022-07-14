import { Fetcher } from "./../entity/fetcher/model";
import { EntityConfig } from "../config/model";
import { create } from "../entity/fetcher/factory";
import { useCurrentEntity } from "./useCurrentEntity";

interface FetcherResponse extends Fetcher {
  path: string;
  staticLoad: boolean;
}

export const getFetcher = (entity: EntityConfig): FetcherResponse => {
  if (entity.apiPath) {
    return {
      ...create("API"),
      path: entity.apiPath,
      staticLoad: !!entity.staticLoad,
    };
  }

  if (entity.tsvPath) {
    return {
      ...create("TSV"),
      path: entity.tsvPath,
      staticLoad: !!entity.staticLoad,
    };
  }

  throw Error(
    `There's no data path for the entity ${entity.label}. Define a tsvPath or an apiPath`
  );
};

/**
 * Hook to determine how the data should be loaded.
 * From API or from a tsv file.
 * @returns @see FetcherResponse
 */
export const useFetcher = (): FetcherResponse => {
  const entity = useCurrentEntity();
  return getFetcher(entity);
};
