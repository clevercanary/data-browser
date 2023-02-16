import { config } from "../config/config";

/**
 * Site specific environment variables
 */
export const ROOT_URL: string | undefined = config().redirectRootToPath;
export const URL: string = config().dataSource.url;
export const DEFAULT_LIST_PARAMS = config().dataSource.defaultListParams ?? {};
export const DEFAULT_DETAIL_PARAMS =
  config().dataSource.defaultDetailParams ?? {};

/**
 * Determine if current deployment environment is development.
 * @returns True if deployment environment is development.
 */
export const isDevelopment = (): boolean =>
  process.env.NODE_ENV === "development";

export const PAGINATION_PAGE_SIZE = 25;
