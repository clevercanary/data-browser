/**
 * Handles requests to TSV file
 */

import { database } from "app/utils/database";
import {
  AnvilSourceItem,
  ListResponseType,
  SummaryResponse,
} from "../../models/responses";

export const list = async (): Promise<ListResponseType> => {
  const items = database.get().all();
  return Promise.resolve({
    hits: items,
    pagination: {
      count: 0,
      pages: 25,
      size: items.length,
      total: items.length,
    },
  });
};

export const fetchList = async (): Promise<ListResponseType> => {
  return list();
};

export const listAll = async (): Promise<ListResponseType> => {
  return list();
};

export const detail = async (): Promise<AnvilSourceItem> => {
  throw new Error("Not implemented function"); //This function isn't necessary yet
};

export const summary = async (): Promise<SummaryResponse> => {
  throw new Error("Not implemented function"); //This function isn't necessary yet
};
