import {
  ComponentConfig,
  ComponentsConfig,
} from "@clevercanary/data-explorer-ui/lib/config/entities";
import { DatasetsResponse } from "../../../../../app/apis/azul/anvil-cmg/common/responses";
import * as C from "../../../../../app/components";
import * as V from "../../../../../app/viewModelBuilders/azul/anvil-cmg/common/viewModelBuilders";

export const top: ComponentsConfig = [
  {
    children: [
      {
        children: [
          {
            component: C.StatusBadge,
            viewBuilder: V.buildDatasetStatus,
          } as ComponentConfig<typeof C.StatusBadge, DatasetsResponse>,
        ],
        component: C.Fade,
        viewBuilder: V.renderDatasetStatusBadge,
      } as ComponentConfig<typeof C.Fade>,
    ],
    component: C.BackPageHero,
    viewBuilder: V.buildDatasetHero,
  } as ComponentConfig<typeof C.BackPageHero, DatasetsResponse>,
];
