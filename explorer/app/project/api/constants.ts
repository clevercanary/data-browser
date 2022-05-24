import { ListResponseType } from "app/models";

export const EMPTY_PAGE: ListResponseType = {
  hits: [],
  pagination: { count: 0, total: 0, size: 0, pages: 0 },
};
