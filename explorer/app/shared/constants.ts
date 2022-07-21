import { config } from "../config/config";

/**
 * Site specific environment variables
 */
export const URL: string = config().datasources.url;
export const DEFAULT_LIST_PARAMS = config().datasources.defaultListParams ?? {};
export const DEFAULT_DETAIL_PARAMS =
  config().datasources.defaultDetailParams ?? {};

/**
 * Determine if current deployment environment is development.
 * @returns True if deployment environment is development.
 */
export const isDevelopment = (): boolean =>
  process.env.NODE_ENV === "development";

/**
 * Values to determine the index for each param.
 * https://host/explore/[slug]/[param-uuid]/[param-tab]
 * - Index 0 returns the current UUID
 * - Index 1 returns the current tab
 */
export const PARAMS_INDEX_UUID = 0;
export const PARAMS_INDEX_TAB = 1;

/**
 * Constant to determine the index to get the slug's value from @see Router.pathname
 * https://host/explore/[slug]/[param-uuid]/[param-tab]
 */
export const PATHNAME_INDEX_SLUG = 1;
