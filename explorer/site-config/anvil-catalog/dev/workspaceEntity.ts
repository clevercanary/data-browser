import * as T from "./workspaceTransformer";
import * as C from "../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../app/config/model";
import { AnvilCatalogSourceItem } from "./../../../app/models/responses";
import { SOURCE_FIELD_KEY, SOURCE_FIELD_TYPE } from "../tsv-config";

/**
 * Entity config object responsible to config anything related to the /explore/workspaces route.
 */
export const workspaceEntity: EntityConfig<AnvilCatalogSourceItem> = {
  detail: {
    tabs: [],
    top: [],
  },
  label: "Workspace",
  list: {
    columns: [
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToConsortiumColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Consortium",
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToStudyColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Study",
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToDbGapColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "dbGap Id",
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToConsentCodeColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Consent Code",
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToTerraWorkspaceColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Terra Workspace Name",
        width: { max: "2fr", min: "240px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToDiseaseColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Disease",
        width: { max: "2fr", min: "240px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToAccessColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Access",
        width: { max: "2fr", min: "240px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToStudyDesignColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Study Design",
        width: { max: "2fr", min: "240px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToDataTypeColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Data Type",
        width: { max: "2fr", min: "240px" },
      },
      {
        componentConfig: {
          component: C.Text,
          transformer: T.workspaceToParticipantsColumn,
        } as ComponentConfig<typeof C.Text>,
        header: "Participants",
        width: { max: "2fr", min: "240px" },
      },
    ],
  } as ListConfig<AnvilCatalogSourceItem>,
  route: "workspaces",
  tsv: {
    path: "anvil-dataset-catalog-results.tsv",
    sourceFieldKey: SOURCE_FIELD_KEY,
    sourceFieldType: SOURCE_FIELD_TYPE,
  },
};
