/**
 * Handles Project's API requests
 */

import {
  AzulEntitiesResponse,
  AzulListParams,
  AzulSummaryResponse,
} from "../../apis/azul/common/entities";
import { ApiOption } from "../../config/common/entities";
import {
  DEFAULT_DETAIL_PARAMS,
  DEFAULT_LIST_PARAMS,
  URL,
} from "../../shared/constants";
import { convertUrlParams } from "../../utils/url";

/**
 * Request to get a list of entities.
 * @param apiPath - Path that will be used to compose the API url
 * @param listParams - Params to be used on the request. If none passed, it will default to page's size 25 and the current catalog version
 * @param method - String with the type of API call, must be either GET or POST for now
 * @returns @see ListResponseType
 */
export const list = async (
  apiPath: string,
  listParams?: AzulListParams,
  method?: ApiOption
): Promise<AzulEntitiesResponse> => {
  const params = { ...DEFAULT_LIST_PARAMS, ...listParams };
  return await fetchList(
    `${URL}${apiPath}?${convertUrlParams(params)}`,
    method
  );
};

/**
 * Make a get request to get a list of entities.
 * @param url - Absolute URL to be used on the request
 * @param method - String with the type of API call, must be either GET or POST for now
 * @returns JSON representation of request list.
 */
export const fetchList = async (
  url: string,
  method?: ApiOption
): Promise<AzulEntitiesResponse> => {
  console.log("I'm making a call!"); //TODO: get rid of this
  if (typeof method !== undefined) {
    const res = await fetch(url, { method: method });
    console.log(`It's a ${method} call!`); //TODO: get rid of this
    return await res.json();
  } else {
    const res = await fetch(url);
    return await res.json();
  }
};

/**
 * Recursively call the endpoint to get a list of entities. This will iterate over the entity list until the next entity comes null
 * @param apiPath - Path that will be used to compose the API url
 * @param listParams - Params to be used on the request. If none passed, it will default to page's size 25 and the current catalog version
 * @param method - String with the type of API call, must be either GET or POST for now
 * @returns @see ListResponseType
 */
export const listAll = async (
  apiPath: string,
  listParams?: AzulListParams,
  method?: ApiOption
): Promise<AzulEntitiesResponse> => {
  let hits = [];
  const result = await list(apiPath, listParams, method);
  hits = result.hits;
  let nextPage = result.pagination.next;
  while (nextPage) {
    const resNextPage = await fetch(nextPage);
    const nextPageJson: AzulEntitiesResponse = await resNextPage.json();
    nextPage = nextPageJson.pagination.next;
    hits = [...hits, ...nextPageJson.hits];
  }
  return { ...result, hits } as AzulEntitiesResponse;
};

/**
 *  Request to get a single project.
 * @param id - project's uuid.
 * @param apiPath - API endpoint URL.
 * @param method - The method to use to make the API call, right now either GET or POST
 * @param param - Catalog's version, if none passed it will default to the current one.
 * @returns @see ProjectResponse
 */
export const detail = async (
  id: string,
  apiPath: string,
  method?: ApiOption,
  param = DEFAULT_DETAIL_PARAMS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this response type can't be determined beforehand
): Promise<any> => {
  const res = await fetch(
    `${URL}${apiPath}/${id}?${convertUrlParams({ ...param })}`,
    { method: method }
  );
  return await res.json();
};

/**
 * Request to a single summary object that doesn't need id
 * @param apiPath - API endpoint URL.
 * @param param - Query string params to include in request.
 * @returns @see SummaryResponse
 */
export const summary = async (
  apiPath: string,
  param = DEFAULT_DETAIL_PARAMS
): Promise<AzulSummaryResponse> => {
  const res = await fetch(`${URL}${apiPath}?${convertUrlParams({ ...param })}`);
  return await res.json();
};
