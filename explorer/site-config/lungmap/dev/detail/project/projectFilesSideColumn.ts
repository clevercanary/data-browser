import { ComponentConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import * as C from "../../../../../app/components";
import * as MDX from "../../../../../app/content";

export const sideColumn: ComponentConfig[] = [
  {
    children: [
      {
        children: [
          {
            component: MDX.LungMAPDataReleasePolicy,
          } as ComponentConfig<typeof MDX.LungMAPDataReleasePolicy>,
        ],
        component: MDX.Section,
      } as ComponentConfig<typeof MDX.Section>,
    ],
    component: C.FluidPaper,
  } as ComponentConfig<typeof C.FluidPaper>,
];
