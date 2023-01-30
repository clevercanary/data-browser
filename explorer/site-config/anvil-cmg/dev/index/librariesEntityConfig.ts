import { LibrariesResponse } from "../../../../app/apis/azul/anvil-cmg/common/responses";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/azul/anvil-cmg/common/viewModelBuilders";

/**
 * Entity config object responsible for config related to the /explore/libraries route.
 */
export const librariesEntityConfig: EntityConfig<LibrariesResponse> = {
  apiPath: "index/libraries",
  detail: {
    detailOverviews: [],
    staticLoad: false,
    tabs: [],
    top: [],
  },
  label: "Libraries",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildLibraryId,
        } as ComponentConfig<typeof Components.Cell>,
        defaultSorting: true,
        header: "Library Id",
        id: "library_id",
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildPrepMaterialName,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Prep Material Name",
        id: "prep_material_name",
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildBioSampleTypes,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "BioSample Type",
        id: "biosample_type",
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildDatasetIds,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Dataset Name",
        id: "dataset_id",
        width: { max: "1fr", min: "200px" },
      },
    ],
  } as ListConfig<LibrariesResponse>,
  route: "libraries",
  staticLoad: false,
};
