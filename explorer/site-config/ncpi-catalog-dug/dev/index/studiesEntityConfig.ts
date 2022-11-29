import { DUGCatalogStudy } from "../../../../app/apis/catalog/ncpi-catalog-dug/common/entities";
import { EntityConfig } from "../../../../app/config/common/entities";
import { studiesEntityConfig as ncpiStudiesEntityConfig } from "../../../ncpi-catalog/dev/index/studiesEntityConfig";
import { NCPI_CATALOG_FILTER_CATEGORY_KEYS } from "../../../ncpi-catalog/filter-category-keys";
import { fetchRelatedStudies } from "./common/utils";

/**
 * Entity config object responsible for config related to the /explore/studies route.
 */
export const studiesEntityConfig: EntityConfig<DUGCatalogStudy> = {
  ...ncpiStudiesEntityConfig,
  listView: {
    disablePagination: true,
    relatedView: {
      relatedSearchFn: fetchRelatedStudies,
      resultKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.DB_GAP_ID,
      searchKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.FOCUS,
    },
  },
};
