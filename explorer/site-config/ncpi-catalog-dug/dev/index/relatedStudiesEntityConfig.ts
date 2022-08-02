import * as T from "../../../../app/viewModelBuilders/ncpi-catalog/common/viewModelBuilders";
import * as C from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import { NPCICatalogSourceItem } from "../../../../app/apis/ncpi-catalog/common/entities";

import { studiesEntityConfig } from "site-config/ncpi-catalog/dev/index/studiesEntityConfig";

/**
 * Entity config object responsible for config related to the /explore/studies route.
 */
export const relatedStudiesEntityConfig: EntityConfig<NPCICatalogSourceItem> = {
  ...studiesEntityConfig,
  label: "Related Studies"
};
