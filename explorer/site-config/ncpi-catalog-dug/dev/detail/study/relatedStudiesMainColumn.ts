import * as C from "app/components";
import { ComponentConfig } from "app/config/common/entities";
import { DugCatalogStudy } from "../../../../../app/apis/catalog/ncpi-catalog-dug/common/entities";
import * as T from "../../../../../app/viewModelBuilders/catalog/ncpi-catalog-dug/common/viewModelBuilders";

export const relatedStudiesMainColumn = [
  {
    component: C.DetailViewTable,
    viewBuilder: T.buildDetailViewRelatedStudiesTable,
  } as ComponentConfig<typeof C.DetailViewTable, DugCatalogStudy>,
];