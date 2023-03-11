import { ComponentConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import { HCACatalogProject } from "../../../../../app/apis/catalog/hca-catalog/common/entities";
import * as C from "../../../../../app/components";
import * as T from "../../../../../app/viewModelBuilders/catalog/hca-catalog/common/viewModelBuilders";

export const sideColumn = [
  {
    children: [
      {
        component: C.KeyValuePairs,
        viewBuilder: T.buildProjectSummary,
      } as ComponentConfig<typeof C.KeyValuePairs, HCACatalogProject>,
    ],
    component: C.GridPaperSection,
  } as ComponentConfig<typeof C.GridPaperSection>,
];
