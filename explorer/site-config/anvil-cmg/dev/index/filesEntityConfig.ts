import { FilesResponse } from "../../../../app/apis/azul/anvil-cmg/common/responses";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/azul/anvil-cmg/common/viewModelBuilders";

/**
 * Entity config object responsible for config related to the /explore/files route.
 */
export const filesEntityConfig: EntityConfig<FilesResponse> = {
  apiPath: "index/files",
  detail: {
    detailOverviews: [],
    staticLoad: false,
    tabs: [],
    top: [],
  },
  label: "Files",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.AzulFileDownload,
          viewBuilder: ViewBuilder.buildFileDownload,
        } as ComponentConfig<typeof Components.AzulFileDownload>,
        editable: false,
        enableSorting: false,
        header: " ",
        id: "azulFileDownload",
        width: "auto",
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildFileName,
        } as ComponentConfig<typeof Components.Cell>,
        defaultSorting: true,
        header: "Name",
        id: "files.file_name",
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildFileFormat,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Format",
        id: "files.file_format",
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildFileSize,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Size",
        id: "files.file_size",
        width: { max: "1fr", min: "120px" },
      },
      // { //TODO remove builders etc.
      //   componentConfig: {
      //     component: Components.Cell,
      //     viewBuilder: ViewBuilder.buildFileType,
      //   } as ComponentConfig<typeof Components.Cell>,
      //   header: "File Type",
      //   id: "files.file_type",
      //   width: { max: "1fr", min: "120px" },
      // },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildFileDataModality,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Data Modality",
        id: "activities.data_modality",
        width: { max: "1fr", min: "240px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildDatasetTitles,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Dataset",
        id: "datasets.title",
        width: { max: "2fr", min: "240px" },
      },
    ],
  } as ListConfig<FilesResponse>,
  route: "files",
  staticLoad: false,
};
