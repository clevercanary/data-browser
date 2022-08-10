import * as C from "../../../../../app/components";
import * as T from "../../../../../app/viewModelBuilders/azul/anvil/common/viewModelBuilders";
import { ComponentConfig } from "../../../../../app/config/common/entities";

export const sideColumn = [
  {
    component: C.Details,
    viewBuilder: T.buildDatasetDetails,
  } as ComponentConfig<typeof C.Details>,
];
