import { SiteConfig } from "../../../app/config/common/entities";
import ncpiDevConfig from "../../ncpi-catalog/dev/config";
import { studiesEntityConfig } from "site-config/ncpi-catalog/dev/index/studiesEntityConfig";
import { relatedStudiesEntityConfig } from "./index/relatedStudiesEntityConfig";


// Images
import logoNcpi from "images/logoNcpiDug.svg";

const config: SiteConfig = {
  ...ncpiDevConfig,
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
