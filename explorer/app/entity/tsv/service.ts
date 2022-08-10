/**
 * Handles requests to TSV file
 */

import {
  AzulEntitiesResponse,
  AzulSummaryResponse,
} from "../../apis/azul/common/entities";
import { AnvilSourceItem } from "../../apis/anvil/common/entities";
import { database } from "app/utils/database";
import { PAGINATION_PAGE_SIZE } from "app/shared/constants";

export const list = async (): Promise<AzulEntitiesResponse> => {
  const items = database.get().all();
  return Promise.resolve({
    hits: items,
    pagination: {
      count: 0,
      pages: Math.ceil(items.length / PAGINATION_PAGE_SIZE),
      size: PAGINATION_PAGE_SIZE,
      total: items.length,
    },
    termFacets: {},
  });
};

export const fetchList = async (): Promise<AzulEntitiesResponse> => {
  return list();
};

export const listAll = async (): Promise<AzulEntitiesResponse> => {
  return list();
};

export const detail = async (): Promise<AnvilSourceItem> => {
  throw new Error("Not implemented function"); //This function isn't necessary yet
};

export const summary = async (): Promise<AzulSummaryResponse> => {
  throw new Error("Not implemented function"); //This function isn't necessary yet
};
