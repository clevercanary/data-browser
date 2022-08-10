// App dependencies
import * as C from "app/components";
import * as T from "../../../../../app/viewModelBuilders/azul/anvil/common/viewModelBuilders";
import { ComponentConfig } from "app/config/common/entities";
import { DatasetsResponse } from "../../../../../app/apis/azul/anvil/common/responses";

export const mainColumn = [
  {
    component: C.Description,
    viewBuilder: T.buildDatasetDescription,
  } as ComponentConfig<typeof C.Description, DatasetsResponse>,
];
