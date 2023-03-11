import { ComponentConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import * as C from "app/components";
import { HCACatalogProject } from "../../../../../app/apis/catalog/hca-catalog/common/entities";
import * as T from "../../../../../app/viewModelBuilders/catalog/hca-catalog/common/viewModelBuilders";

export const mainColumn = [
  {
    children: [
      {
        component: C.Markdown,
        viewBuilder: T.buildProjectDescription,
      } as ComponentConfig<typeof C.Markdown, HCACatalogProject>,
    ],
    component: C.CollapsableSection,
    props: {
      collapsable: false,
      title: "Description",
    },
  } as ComponentConfig<typeof C.CollapsableSection, HCACatalogProject>,
];
