/**
 * Handles requests to TSV file
 */

import { ListResponseType, SummaryResponse } from "../../models/responses";

export const list = async (): Promise<ListResponseType> => {
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

export const listAll = async (): Promise<ListResponseType> => {
  return list();
};

export const detail =
  async (): // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this response type can't be determined beforehand
  Promise<any> => {
    return Promise.resolve({});
  };

export const summary = async (): Promise<SummaryResponse> => {
  return Promise.resolve({} as any);
};
