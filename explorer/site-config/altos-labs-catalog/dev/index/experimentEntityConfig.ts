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
  SORT_DIRECTION,
} from "../../../../app/config/common/entities";
import * as ViewBuilder from "../../../../app/viewModelBuilders/catalog/altos-labs-catalog/common/viewModelBuilders";
import {
  ALTOS_LABS_CATALOG_CATEGORY_KEY,
  ALTOS_LABS_CATALOG_CATEGORY_LABEL,
} from "../../category";
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
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.INITIATIVE,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.INITIATIVE,
        width: { max: "0.5fr", min: "132px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildShorthand,
        } as ComponentConfig<typeof Components.Cell>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.SHORTHAND,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.SHORTHAND,
        width: { max: "0.5fr", min: "132px" },
      },
      {
        componentConfig: {
          component: Components.Link,
          viewBuilder: ViewBuilder.buildExperiment,
        } as ComponentConfig<typeof Components.Link>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.EXPERIMENT,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.EXPERIMENT,
        width: { max: "1.5fr", min: "200px" },
      },
      {
        componentConfig: {
          component: Components.Link,
          viewBuilder: ViewBuilder.buildDOI,
        } as ComponentConfig<typeof Components.Link>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.DOI,
        hiddenColumn: true,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.DOI,
        width: { max: "1fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildSpecies,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.SPECIES,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.SPECIES,
        width: { max: "0.5fr", min: "132px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildTissue,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.TISSUE,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.TISSUE,
        width: { max: "0.5fr", min: "132px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildExperimentType,
        } as ComponentConfig<typeof Components.Cell>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.EXPERIMENT_TYPE,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.EXPERIMENT_TYPE,
        width: { max: "1fr", min: "160px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildAssay,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: ALTOS_LABS_CATALOG_CATEGORY_LABEL.ASSAY,
        id: ALTOS_LABS_CATALOG_CATEGORY_KEY.ASSAY,
        width: { max: "0.5fr", min: "132px" },
      },
    ],
    defaultSort: {
      desc: SORT_DIRECTION.ASCENDING,
      id: ALTOS_LABS_CATALOG_CATEGORY_KEY.EXPERIMENT,
    },
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