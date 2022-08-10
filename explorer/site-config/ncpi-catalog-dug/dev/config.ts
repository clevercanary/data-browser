import { DUG_API_PARAMS, DUG_API_URL } from "./constants";
import ncpiDevConfig from "../../ncpi-catalog/dev/config";
import { relatedStudiesEntityConfig } from "./index/relatedStudiesEntityConfig";
import { SiteConfig } from "../../../app/config/common/entities";
import { studiesEntityConfig } from "site-config/ncpi-catalog/dev/index/studiesEntityConfig";

// Images
import logoNcpi from "images/logoNcpiDug.svg";

const config: SiteConfig = {
  ...ncpiDevConfig,
  dataSource: {
    defaultListParams: DUG_API_PARAMS,
    url: DUG_API_URL,
  },
  entities: [studiesEntityConfig, relatedStudiesEntityConfig],
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
