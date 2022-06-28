import { isSSR } from "./ssr";

/**
 * Converts a object into a url param. This function can be executed both on client or server side
 * @param params
 * @returns url param as string
 */
export const convertUrlParams = (params: Record<string, string>) => {
  const validParams = { ...params };
  Object.keys(params).forEach(
    (key) => validParams[key] === undefined && delete validParams[key]
  );
  if (isSSR()) {
    //check if the operation is being executed on server side
    return new global.URLSearchParams(validParams).toString();
  }
  return new URLSearchParams(validParams).toString();
};
