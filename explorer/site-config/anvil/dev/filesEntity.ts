import * as T from "./fileTransformer";
import * as C from "../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../app/config/model";
import { AnvilFileResponse } from "app/models/responses";

/**
 * Entity config object responsible to config anything related to the /explore/files route.
 */
export const filesEntity: EntityConfig<AnvilFileResponse> = {
  apiPath: "index/files",
  label: "Files",
  list: {
    columns: [
      {
        componentConfig: {
          component: C.Links,
          transformer: T.filesToDatasetNameColumn,
        } as ComponentConfig<typeof C.Links>,
        header: "Dataset Name",
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.filesToFileFormatColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "File Format",
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.filesToFileIdColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "File ID",
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.filesToFileTypeColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "File Type",
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.filesToDataModalityColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Data Modality",
      },
    ],
  } as ListConfig<AnvilFileResponse>,
  route: "files",
};
