import { AltosLabsCatalogStudy } from "../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import { buildAltosLabsCatalogStudies } from "../../../../app/apis/catalog/altos-labs-catalog/common/utils";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/altos-labs-catalog/common/viewModelBuilders";
import { SOURCE_FIELD_KEY, SOURCE_FIELD_TYPE } from "../../tsv-config";

/**
 * Entity config object responsible to config anything related to the /explore/studies route.
 */
export const studiesEntity: EntityConfig<AltosLabsCatalogStudy> = {
  detail: {
    staticLoad: true,
    tabs: [],
    top: [],
  },
  label: "Studies",
  list: {
    columns: [
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
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildConsortium,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Consortium",
        sort: {
          sortKey: "consortium",
        },
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildConsentCodes,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Consent Codes",
        sort: {
          default: true,
          sortKey: "consentCode", // consentCodes - a list of consent codes.
        },
        width: { max: "1fr", min: "120px" },
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
        width: { max: "1fr", min: "120px" },
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
        width: { max: "1fr", min: "120px" },
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
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildTerraWorkspaceNames,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Workspaces",
        sort: {
          sortKey: "workspaceName", // workspaceNames - a list of workspace names.
        },
        width: { max: "1fr", min: "120px" },
      },
      // {
      //   componentConfig: {
      //     component: Components.Cell,
      //     viewBuilder: ViewBuilder.buildTerraWorkspaceCount,
      //   } as ComponentConfig<typeof Components.Cell>,
      //   header: "Workspaces",
      //   sort: {
      //     sortKey: "workspaceCount",
      //   },
      //   width: { max: "1fr", min: "120px" },
      // },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildParticipantCount,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Participants",
        sort: {
          sortKey: "participantCount",
        },
        width: { max: "1fr", min: "120px" },
      },
    ],
  } as ListConfig<AltosLabsCatalogStudy>,
  route: "studies",
  staticLoad: true,
  tsv: {
    builderFn: buildAltosLabsCatalogStudies,
    path: "dashboard-source-anvil.tsv",
    sourceFieldKey: SOURCE_FIELD_KEY,
    sourceFieldType: SOURCE_FIELD_TYPE,
  },
};
