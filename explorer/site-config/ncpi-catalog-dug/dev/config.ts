import { SiteConfig } from "../../../app/config/common/entities";
import ncpiDevConfig from "../../ncpi-catalog/dev/config";
import { studiesEntityConfig } from "site-config/ncpi-catalog/dev/index/studiesEntityConfig";
import { relatedStudiesEntityConfig } from "./index/relatedStudiesEntityConfig";
import {DUG_API_URL, DUG_API_PARAMS} from "./constants";

// Images
import logoNcpi from "images/logoNcpiDug.svg";
import { Api, BluetoothSearchingRounded } from "@mui/icons-material";


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
  dataSource: {
    url: DUG_API_URL,
    defaultListParams: DUG_API_PARAMS
  }
};

export default config;
