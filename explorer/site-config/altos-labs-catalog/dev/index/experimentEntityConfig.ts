import { AltosLabsCatalogExperiment } from "../../../../app/apis/catalog/altos-labs-catalog/common/entities";
import {
  AltosLabsExperimentInputMapper,
  getShorthandId,
} from "../../../../app/apis/catalog/altos-labs-catalog/common/utils";
import * as Components from "../../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/catalog/altos-labs-catalog/common/viewModelBuilders";
import { ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS } from "../../filter-category-keys";
import { mainColumn } from "../detail/experiment/overviewMainColumn";
import { sideColumn } from "../detail/experiment/overviewSideColumn";
import { top } from "../detail/experiment/top";

/**
 * Entity config object responsible to config anything related to the /explore/experiments route.
 */
export const experimentEntity: EntityConfig<AltosLabsCatalogExperiment> = {
  detail: {
    detailOverviews: ["Overview"],
    staticLoad: true,
    tabs: [
      {
        label: "Overview",
        mainColumn: mainColumn,
        route: "",
        sideColumn: sideColumn,
      },
    ],
    top: top,
  },
  getId: getShorthandId,
  label: "Experiments",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildInitiative,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Initiative",
        hiddenColumn: false,
        sort: {
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.INITIATIVE,
        },
        width: { max: "0.5fr", min: "132px" },
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
        width: { max: "0.5fr", min: "132px" },
      },
      {
        componentConfig: {
          component: Components.Link,
          viewBuilder: ViewBuilder.buildExperiment,
        } as ComponentConfig<typeof Components.Link>,
        header: "Experiment",
        sort: {
          default: true,
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.EXPERIMENT,
        },
        width: { max: "1.5fr", min: "200px" },
      },
      {
        componentConfig: {
          component: Components.Link,
          viewBuilder: ViewBuilder.buildDOI,
        } as ComponentConfig<typeof Components.Link>,
        header: "DOI",
        hiddenColumn: true,
        sort: {
          default: true,
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.DOI,
        },
        width: { max: "1fr", min: "160px" },
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
        width: { max: "0.5fr", min: "132px" },
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
        width: { max: "0.5fr", min: "132px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildExperimentType,
        } as ComponentConfig<typeof Components.Cell>,
        header: "Experiment Type",
        sort: {
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.EXPERIMENT_TYPE,
        },
        width: { max: "1fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildAssay,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: "Assay",
        sort: {
          sortKey: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.ASSAY,
        },
        width: { max: "0.5fr", min: "132px" },
      },
    ],
  } as ListConfig<AltosLabsCatalogExperiment>,
  listView: {
    disablePagination: true,
  },
  route: "experiments",
  staticEntityImportMapper: AltosLabsExperimentInputMapper,
  staticLoad: true,
  staticLoadFile:
    "../../altos-data-browser/files/altos-catalog/out/altos-catalog-experiment.json",
};
