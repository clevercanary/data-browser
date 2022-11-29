import logoNcpi from "images/logoNcpiDug.svg";
import { studiesEntityConfig } from "site-config/ncpi-catalog/dev/index/studiesEntityConfig";
import { SiteConfig } from "../../../app/config/common/entities";
import ncpiDevConfig from "../../ncpi-catalog/dev/config";
import { NCPI_CATALOG_FILTER_CATEGORY_KEYS } from "../../ncpi-catalog/filter-category-keys";
import { DUG_API_PARAMS, DUG_API_URL } from "./constants";
import { fetchRelatedStudies } from "./index/common/utils";

const config: SiteConfig = {
  ...ncpiDevConfig,
  dataSource: {
    defaultListParams: DUG_API_PARAMS,
    url: DUG_API_URL,
  },
  entities: [
    {
      ...studiesEntityConfig,
      listView: {
        relatedView: {
          relatedSearchFn: fetchRelatedStudies,
          resultKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.DB_GAP_ID,
          searchKey: NCPI_CATALOG_FILTER_CATEGORY_KEYS.FOCUS,
        },
      },
    },
  ],
  layout: {
    ...ncpiDevConfig.layout,
    header: {
      ...ncpiDevConfig.layout.header,
      logo: {
        ...ncpiDevConfig.layout.header.logo,
        src: logoNcpi,
      },
    },
  },
};

export default config;
