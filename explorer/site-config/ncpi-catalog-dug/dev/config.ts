import logoNcpi from "images/logoNcpiDug.svg";
import { studiesEntity } from "site-config/ncpi-catalog/dev/index/studiesEntity";
import { SiteConfig } from "../../../app/config/common/entities";
import ncpiDevConfig from "../../ncpi-catalog/dev/config";
import { DUG_API_PARAMS, DUG_API_URL } from "./constants";
import { relatedStudiesEntityConfig } from "./index/relatedStudiesEntityConfig";

const config: SiteConfig = {
  ...ncpiDevConfig,
  dataSource: {
    defaultListParams: DUG_API_PARAMS,
    url: DUG_API_URL,
  },
  entities: [studiesEntity, relatedStudiesEntityConfig],
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
