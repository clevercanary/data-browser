// App dependencies
import * as C from "app/components";
import { ComponentConfig } from "app/config/common/entities";
import * as T from "../../../../../app/viewModelBuilders/azul/anvil/common/viewModelBuilders";
import { DatasetsResponse } from "../../../../../app/apis/azul/anvil/common/responses";

export const mainColumn = [
  {
    component: C.Description,
    transformer: T.buildDatasetDescription,
  } as ComponentConfig<typeof C.Description, DatasetsResponse>,
];
