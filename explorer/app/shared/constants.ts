import { config } from "../config/config";

/**
 * Site specific environment variables
 */
export const ROOT_URL: string | undefined = config().redirectRootToPath;

/**
 * Session time out. 15 minutes
 */
export const SESSION_TIME_OUT = 1000 * 60 * 15;

/**
 * Determine if current deployment environment is development.
 * @returns True if deployment environment is development.
 */
export const isDevelopment = (): boolean =>
  process.env.NODE_ENV === "development";
