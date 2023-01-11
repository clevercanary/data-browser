import * as C from "app/components";
import { ComponentConfig } from "app/config/common/entities";
import { AltosLabsCatalogEntity } from "../../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import * as T from "../../../../../app/viewModelBuilders/catalog/altos-labs-catalog/common/viewModelBuilders";

export const mainColumn = [
  {
    children: [
      {
        component: C.Markdown,
        viewBuilder: T.buildExperimentDescription,
      } as ComponentConfig<typeof C.Markdown, AltosLabsCatalogEntity>,
    ],
    component: C.CollapsableSection,
    props: {
      collapsable: false,
      title: "Description",
    },
  } as ComponentConfig<typeof C.CollapsableSection, AltosLabsCatalogEntity>,
];
