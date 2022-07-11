/**
 * Handles requests to TSV file
 */

import { convertUrlParams } from "../../utils/url";
import {
  DEFAULT_LIST_PARAMS,
  DEFAULT_DETAIL_PARAMS,
  URL,
} from "../../shared/constants";
import { ListParams } from "../../models/params";
import { ListResponseType, SummaryResponse } from "../../models/responses";

export const list = async (
  apiPath: string,
  listParams?: ListParams
): Promise<ListResponseType> => {
  return Promise.resolve({
    hits: [],
    pagination: {
      count: 0,
      pages: 0,
      size: 0,
      total: 0,
    },
  });
};

export const fetchList = async (url: string): Promise<ListResponseType> => {
  const res = await fetch(url);
  return await res.json();
};

export const listAll = async (
  apiPath: string,
  listParams?: ListParams
): Promise<ListResponseType> => {
  return list(apiPath);
};

export const detail = async (
  id: string,
  apiPath: string,
  param = DEFAULT_DETAIL_PARAMS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this response type can't be determined beforehand
): Promise<any> => {
  return Promise.resolve({});
};

export const summary = async (
  apiPath: string,
  param = DEFAULT_DETAIL_PARAMS
): Promise<SummaryResponse> => {
  return Promise.resolve({} as any);
};
