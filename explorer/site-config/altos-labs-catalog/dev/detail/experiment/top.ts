import { ComponentConfig, ComponentsConfig } from "app/config/common/entities";
import { AltosLabsCatalogEntity } from "../../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import * as C from "../../../../../app/components";
import * as T from "../../../../../app/viewModelBuilders/catalog/altos-labs-catalog/common/viewModelBuilders";

export const top: ComponentsConfig = [
  {
    component: C.BackPageHero,
    viewBuilder: T.buildExperimentHero,
  } as ComponentConfig<typeof C.BackPageHero, AltosLabsCatalogEntity>,
];
