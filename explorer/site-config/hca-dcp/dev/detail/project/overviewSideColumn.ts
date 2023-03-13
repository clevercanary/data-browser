import { ComponentConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import { ProjectsResponse } from "../../../../../app/apis/azul/hca-dcp/common/entities";
import * as C from "../../../../../app/components";
import * as T from "../../../../../app/viewModelBuilders/azul/hca-dcp/common/projectViewModelBuilder";

export const sideColumn = [
  {
    children: [
      {
        component: C.IconList,
        viewBuilder: T.projectsToAnalysisPortals, // TODO use KeyValuePairs component and remove IconList components
      } as ComponentConfig<typeof C.IconList, ProjectsResponse>,
    ],
    component: C.CollapsableSection,
    props: {
      title: "Analysis Portals",
    },
  } as ComponentConfig<typeof C.CollapsableSection>,
  {
    component: C.Details,
    viewBuilder: T.buildDetails,
  } as ComponentConfig<typeof C.Details>,
];
