/**
 * Hook to make the current site config available
 */
import { ConfigContext } from "app/components/Config/Config";
import { SiteConfig } from "../config/common/entities";
import { useContext } from "react";

export const useConfig = (): SiteConfig => {
  return useContext(ConfigContext);
};
