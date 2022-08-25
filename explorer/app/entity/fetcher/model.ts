import {
  AzulEntitiesResponse,
  AzulListParams,
  AzulSummaryResponse,
} from "../../apis/azul/common/entities";
import { ApiOption } from "../../config/common/entities";

/**
 * Object that has all necessary functions to fetch data to fill listing and detail pages
 * for each entity
 */
export interface Fetcher {
  detail: (
    id: string,
    apiPath: string,
    method?: ApiOption,
    param?: { [key: string]: string }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- This type can't be known before hand
  ) => Promise<any>;
  fetchList: (url: string, method?: ApiOption) => Promise<AzulEntitiesResponse>;
  list: (
    apiPath: string,
    listParams?: AzulListParams,
    method?: ApiOption
  ) => Promise<AzulEntitiesResponse>;
  listAll: (
    apiPath: string,
    listParams?: AzulListParams,
    method?: ApiOption
  ) => Promise<AzulEntitiesResponse>;
  summary: (
    apiPath: string,
    param?: { [key: string]: string }
  ) => Promise<AzulSummaryResponse>;
}

/**
 * Type that list all possible fetchers
 */
export type FetcherType = "API" | "TSV";
