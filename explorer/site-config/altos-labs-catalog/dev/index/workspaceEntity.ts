import { AltosLabsCatalogWorkspace } from "../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import { buildAltosLabsCatalogWorkspaces } from "../../../../app/apis/catalog/altos-labs-catalog/common/utils";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/altos-labs-catalog/common/viewModelBuilders";
import { SOURCE_FIELD_KEY, SOURCE_FIELD_TYPE } from "../../tsv-config";

/**
 * Entity config object responsible to config anything related to the /explore/workspaces route.
 */
export const workspaceEntity: EntityConfig<AltosLabsCatalogWorkspace> = {
  detail: {
    staticLoad: true,
    tabs: [],
    top: [],
  },
  label: "Workspaces",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildConsortium,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Consortium",
        sort: {
          default: true,
          sortKey: "consortium",
        },
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildDbGapId,
        } as ComponentConfig<typeof Components.Cell>,
        header: "dbGap Id",
        sort: {
          default: true,
          sortKey: "dbGapId",
        },
        width: { max: "1.24fr", min: "124px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildConsentCode,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Consent Code",
        sort: {
          default: true,
          sortKey: "consentCode",
        },
        width: { max: "1.6fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildTerraWorkspaceName,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Terra Workspace Name",
        sort: {
          sortKey: "workspaceName",
        },
        width: { max: "1fr", min: "360px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildDiseases,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Disease (indication)",
        sort: {
          sortKey: "diseases",
        },
        width: { max: "1.6fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildDataTypes,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Data Type",
        sort: {
          sortKey: "dataTypes",
        },
        width: { max: "1.6fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildStudyDesigns,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Study Design",
        sort: {
          sortKey: "studyDesigns",
        },
        width: { max: "1.6fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildParticipantCount,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Participants",
        sort: {
          sortKey: "participantCount",
        },
        width: { max: "1.16fr", min: "116px" },
      },
    ],
  } as ListConfig<AltosLabsCatalogWorkspace>,
  route: "workspaces",
  staticLoad: true,
  tsv: {
    builderFn: buildAltosLabsCatalogWorkspaces,
    path: "dashboard-source-anvil.tsv",
    sourceFieldKey: SOURCE_FIELD_KEY,
    sourceFieldType: SOURCE_FIELD_TYPE,
  },
};
