// App dependencies
import * as C from "app/components";
import * as T from "../../../../app/viewModelBuilders/azul/anvil/common/viewModelBuilders";
import { BackPageConfig, ComponentConfig } from "app/config/common/entities";

export const exportConfig: BackPageConfig = {
  tabs: [
    {
      label: "Choose Export Method",
      mainColumn: [
        {
          component: C.ExportMethod,
          viewBuilder: T.buildExportToTerraMetadata,
        } as ComponentConfig<typeof C.ExportMethod>,
      ],
      route: "/export",
      sideColumn: [],
    },
  ],
  top: [
    {
      component: C.ProjectHero,
      props: {
        breadcrumbs: [
          { path: "/datasets", text: "Datasets" },
          { path: "export", text: "Export" },
        ],
        title: "Choose Export Method",
      },
    } as ComponentConfig<typeof C.ProjectHero>,
  ],
};