import { EntityConfig } from "../config/model";
import { create } from "../entity/fetcher/factory";

export const getFetcher = (entity: EntityConfig) => {
  return entity.apiPath ? create("API") : create("TSV");
};
