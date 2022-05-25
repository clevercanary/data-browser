import { config } from "app/config";
import { useRouter } from "next/router";

/**
 * Get the current entity based on the given path
 * @param path url path
 * @returns the currenty entity or undefined
 */
export const getCurrentEntity = (path: string) => {
  const value = path.replace("/explore/", "");
  return config().entities.find((entity) => entity.route === value);
};

/**
 *
 * @returns the current entity based on the current route
 */
export const useCurrentEntity = () => {
  const router = useRouter();
  const paths = router.asPath.split("/").filter((path) => !!path);
  return getCurrentEntity(paths[1]);
};
