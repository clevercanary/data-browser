import { AltosLabsCatalogExperiment } from "../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import {
  AltosLabsExperimentInputMapper,
  getDOIId,
} from "../../../../app/apis/catalog/altos-labs-catalog/common/utils";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/altos-labs-catalog/common/viewModelBuilders";
import { ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS } from "../../filter-category-keys";

/**
 * Entity config object responsible to config anything related to the /explore/experiments route.
 */
export const experimentEntity: EntityConfig<AltosLabsCatalogExperiment> = {
  detail: {
    detailOverviews: [],
    staticLoad: true,
    tabs: [],
    top: [],
  },
  getId: getDOIId, // TODO review getId "property" and associated function
  label: "Experiments",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildTitle,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Title",
        sort: {
          default: true,
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.TITLE,
        },
        width: { max: "1.5fr", min: "1fr" },
      },
      {
        componentConfig: {
          component: Components.Link,
          viewBuilder: ViewBuilder.buildDOI,
        } as ComponentConfig<typeof Components.Link>,
        header: "DOI",
        sort: {
          default: true,
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.DOI,
        },
        width: { max: "1fr", min: "1fr" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildShorthand,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Shorthand",
        sort: {
          default: true,
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.SHORTHAND,
        },
        width: { max: "0.5fr", min: "100px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildTissue,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Tissue",
        sort: {
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.TISSUE,
        },
        width: { max: "0.5fr", min: "100px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildSpecies,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Species",
        sort: {
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.SPECIES,
        },
        width: { max: "0.5fr", min: "100px" },
      },
    ],
  } as ListConfig<AltosLabsCatalogExperiment>,
  listView: {
    disablePagination: true,
  },
  route: "experiments",
  staticEntityImportMapper: AltosLabsExperimentInputMapper,
  staticLoad: true,
  staticLoadFile: "files/altos-catalog/out/altos-catalog-experiment.json",
};
