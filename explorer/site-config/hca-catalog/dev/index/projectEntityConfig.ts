import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
  SORT_DIRECTION,
} from "@clevercanary/data-explorer-ui/lib/config/entities";
import { HCACatalogProject } from "../../../../app/apis/catalog/hca-catalog/common/entities";
import {
  getProjectId,
  hcaCatalogProjectInputMapper,
} from "../../../../app/apis/catalog/hca-catalog/common/utils";
import * as Components from "../../../../app/components";
import * as ViewBuilder from "../../../../app/viewModelBuilders/catalog/hca-catalog/common/viewModelBuilders";
import {
  HCA_CATALOG_CATEGORY_KEY,
  HCA_CATALOG_CATEGORY_LABEL,
} from "../../category";
import { mainColumn } from "../detail/project/overviewMainColumn";
import { sideColumn } from "../detail/project/overviewSideColumn";
import { top } from "../detail/project/top";

/**
 * Entity config object responsible to config anything related to the /explore/projects route.
 */
export const projectEntityConfig: EntityConfig<HCACatalogProject> = {
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
  getId: getProjectId,
  label: "Projects",
  list: {
    columns: [
      {
        componentConfig: {
          component: Components.Link,
          viewBuilder: ViewBuilder.buildProjectTitle,
        } as ComponentConfig<typeof Components.Link>,
        header: HCA_CATALOG_CATEGORY_LABEL.PROJECT_TITLE,
        id: HCA_CATALOG_CATEGORY_KEY.PROJECT_TITLE,
        width: { max: "2fr", min: "240px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildSpecies,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.SPECIES,
        id: HCA_CATALOG_CATEGORY_KEY.SPECIES,
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildOrgan,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.ORGAN,
        id: HCA_CATALOG_CATEGORY_KEY.ORGAN,
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildTechnology,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.TECHNOLOGY,
        id: HCA_CATALOG_CATEGORY_KEY.TECHNOLOGY,
        width: { max: "1fr", min: "120px" },
      },
      {
        componentConfig: {
          component: Components.Cell,
          viewBuilder: ViewBuilder.buildCellCount,
        } as ComponentConfig<typeof Components.Cell>,
        header: HCA_CATALOG_CATEGORY_LABEL.CELL_COUNT,
        id: HCA_CATALOG_CATEGORY_KEY.CELL_COUNT,
        width: { max: "1fr", min: "120px" },
      },
      {
        columnVisible: false,
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildContributor,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.CONTRIBUTOR,
        id: HCA_CATALOG_CATEGORY_KEY.CONTRIBUTOR,
        width: { max: "1fr", min: "120px" },
      },
      {
        columnVisible: false,
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildFunder,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.FUNDER,
        id: HCA_CATALOG_CATEGORY_KEY.FUNDER,
        width: { max: "1fr", min: "120px" },
      },
      {
        columnVisible: false,
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildInstitution,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.INSTITUTION,
        id: HCA_CATALOG_CATEGORY_KEY.INSTITUTION,
        width: { max: "1fr", min: "120px" },
      },
      {
        columnVisible: false,
        componentConfig: {
          component: Components.NTagCell,
          viewBuilder: ViewBuilder.buildLaboratory,
        } as ComponentConfig<typeof Components.NTagCell>,
        header: HCA_CATALOG_CATEGORY_LABEL.LABORATORY,
        id: HCA_CATALOG_CATEGORY_KEY.LABORATORY,
        width: { max: "1fr", min: "120px" },
      },
    ],
    defaultSort: {
      desc: SORT_DIRECTION.ASCENDING,
      id: HCA_CATALOG_CATEGORY_KEY.PROJECT_TITLE,
    },
  } as ListConfig<HCACatalogProject>,
  listView: {
    disablePagination: true,
  },
  route: "projects",
  staticEntityImportMapper: hcaCatalogProjectInputMapper,
  staticLoad: true,
  staticLoadFile: "files/hca-catalog/out/hca-catalog-projects.json",
};
