import React, { useContext } from "react";
import { EntityConfig, SiteConfig } from "app/config/model";

/**
 * Empty entity configuration to serve as default for the context
 */
const EMPTY_ENTITY: EntityConfig = {
  apiPath: "",
  detail: {
    tabs: [],
    top: [],
  },
  label: "",
  list: {
    columns: [],
  },
  route: "",
};

/**
 * Check if the currenct @see SiteConfing contains an entity with the route @param path
 * @param path - entity's route
 * @param config - currenct SiteConfig
 * @returns true, if config contains the entity. False otherwise
 */
export const hasEntity = (path: string, config: SiteConfig): boolean => {
  return !!config.entities.find((entity) => entity.route === path);
};

/**
 * Get the current entity based on the given path
 * @param path - Current URL path.
 * @param config - The site config for the current environment.
 * @returns The current entity or undefined
 */
export const getCurrentEntity = (
  path: string,
  config: SiteConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- This config model is part of a generic array
): EntityConfig<any> => {
  const entity = config.entities.find((entity) => entity.route === path);

  if (!entity) {
    throw Error("No entity found");
  }

  return entity;
};

const CurrentEntityContext = React.createContext<EntityConfig>(EMPTY_ENTITY);

export const CurrentEntityProvider = CurrentEntityContext.Provider;

/**
 * Get the current entity config.
 * @returns The current entity based using the context value provided by the current page.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This config model is part of a generic array
export const useCurrentEntity = (): EntityConfig<any> => {
  return useContext(CurrentEntityContext);
};
