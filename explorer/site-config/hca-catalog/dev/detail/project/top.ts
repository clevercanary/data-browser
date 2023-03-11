import {
  ComponentConfig,
  ComponentsConfig,
} from "@clevercanary/data-explorer-ui/lib/config/entities";
import { HCACatalogProject } from "../../../../../app/apis/catalog/hca-catalog/common/entities";
import * as C from "../../../../../app/components";
import * as T from "../../../../../app/viewModelBuilders/catalog/hca-catalog/common/viewModelBuilders";

export const top: ComponentsConfig = [
  {
    component: C.BackPageHero,
    viewBuilder: T.buildProjectHero,
  } as ComponentConfig<typeof C.BackPageHero, HCACatalogProject>,
];
