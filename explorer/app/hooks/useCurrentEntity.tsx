import { config } from "app/config";
import { useRouter } from "next/router";

/**
 *
 * @returns the current entity based on the current route
 */
export const useCurrentEntity = () => {
  const router = useRouter();
  const path = router.asPath.replace("/explore/", "");
  return config().entities.find((entity) => entity.route === path);
};
