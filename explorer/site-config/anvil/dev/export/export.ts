import * as C from "app/components";
import { BackPageConfig, ComponentConfig } from "app/config/common/entities";
import * as T from "../../../../app/viewModelBuilders/azul/anvil/common/viewModelBuilders";

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
      sideColumn: [
        {
          component: C.TitledText,
          viewBuilder: T.buildDataReleasePolicy,
        } as ComponentConfig<typeof C.TitledText>,
      ],
    },
  ],
  top: [
    {
      component: C.ProjectHero,
      props: {
        breadcrumbs: [
          { path: "/datasets", text: "Datasets" },
          { path: "/export", text: "Export" },
        ],
        title: "Choose Export Method",
      },
    } as ComponentConfig<typeof C.ProjectHero>,
  ],
};
