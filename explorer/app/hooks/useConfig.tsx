/**
 * Hook to make the current site config available
 */
import { ConfigContext } from "app/components/Config/config";
import { useContext } from "react";
import { SiteConfig } from "../config/common/entities";

export const useConfig = (): SiteConfig => {
  return useContext(ConfigContext);
};
