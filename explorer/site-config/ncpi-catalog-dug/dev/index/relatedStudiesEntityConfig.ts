import * as C from "../../../../app/components";
import * as ViewBuilder from "../../../../app/viewModelBuilders/ncpi-catalog/common/viewModelBuilders";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";

import { DUG_API_PATH } from "../constants";
import { DugVariableResponse } from "../../../../app/apis/ncpi-catalog-dug/common/entities";
import { studiesEntityConfig } from "site-config/ncpi-catalog/dev/index/studiesEntityConfig";

/**
 * Entity config object responsible for config related to the /explore/studies route.
 */
export const relatedStudiesEntityConfig: EntityConfig<DugVariableResponse> = {
  apiPath: DUG_API_PATH,
  detail: studiesEntityConfig.detail,
  label: "Related Studies",
  list: {
    columns: [
      {
        componentConfig: {
          component: C.Cell,
          viewBuilder: ViewBuilder.buildDbGapId,
        } as ComponentConfig<typeof C.Cell>,
        header: "dbGap Id",
        width: { max: "1fr", min: "120px" },
      },
    ],
  } as ListConfig<DugVariableResponse>,
  route: "related",
};
