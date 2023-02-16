import * as C from "app/components";
import { ComponentConfig } from "app/config/common/entities";
import { AnVILCatalogConsortium } from "../../../../../app/apis/catalog/anvil-catalog/common/entities";
import * as T from "../../../../../app/viewModelBuilders/catalog/anvil-catalog/common/viewModelBuilders";

export const studiesMainColumn = [
  {
    component: C.DetailViewTable,
    viewBuilder: T.buildConsortiumDetailViewStudiesTable,
  } as ComponentConfig<typeof C.DetailViewTable, AnVILCatalogConsortium>,
];
