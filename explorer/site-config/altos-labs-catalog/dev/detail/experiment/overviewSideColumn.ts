import { AltosLabsCatalogEntity } from "../../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import * as C from "../../../../../app/components";
import { ComponentConfig } from "../../../../../app/config/common/entities";
import * as T from "../../../../../app/viewModelBuilders/catalog/altos-labs-catalog/common/viewModelBuilders";

export const sideColumn = [
  {
    children: [
      {
        component: C.KeyValuePairs,
        viewBuilder: T.buildExperimentDetails,
      } as ComponentConfig<typeof C.KeyValuePairs, AltosLabsCatalogEntity>,
    ],
    component: C.GridPaperSection,
  } as ComponentConfig<typeof C.GridPaperSection>,
];
