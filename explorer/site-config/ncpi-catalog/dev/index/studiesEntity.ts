import {
  NCPICatalogStudy,
  NCPIStudyInputMapper,
} from "../../../../app/apis/catalog/ncpi-catalog/common/entities";
import { getDbGapId } from "../../../../app/apis/catalog/ncpi-catalog/common/transformers";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/ncpi-catalog/common/viewModelBuilders";
import { NCPI_CATALOG_FILTER_CATEGORY_KEYS } from "../../filter-category-keys";

/**
 * Entity config object responsible for config related to the /explore/studies route.
 */
export const studiesEntity: EntityConfig<NCPICatalogStudy> = {
  detail: {
    detailOverviews: [],
    staticLoad: true,
    tabs: [],
    top: [],
  },
  getId: getDbGapId,
  label: "Studies",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildPlatforms,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Platform",
        sort: {
          default: true,
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.PLATFORM,
        },
        width: { max: "1fr", min: "100px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildStudyTitle,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Study",
        sort: {
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.TITLE,
        },
        width: { max: "2fr", min: "200px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildDbGapId,
        } as ComponentConfig<typeof Components.Cell>,
        header: "dbGap Id",
        sort: {
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.DB_GAP_ID,
        },
        width: { max: "1.24fr", min: "124px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildFocus,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Focus / Disease",
        sort: {
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.FOCUS,
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
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.DATA_TYPE,
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
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.STUDY_DESIGN,
        },
        width: { max: "1.6fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildConsentCodes,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Consent Code",
        sort: {
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.CONSENT_CODE,
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
          sortKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.PARTICIPANT_COUNT,
        },
        width: { max: "1.16fr", min: "116px" },
      },
    ],
  } as ListConfig<NCPICatalogStudy>,
  route: "studies",
  staticEntityImportMapper: NCPIStudyInputMapper,
  staticLoad: true,
  staticLoadFile: "files/ncpi-catalog/out/ncpi-platform-studies.json",
};
