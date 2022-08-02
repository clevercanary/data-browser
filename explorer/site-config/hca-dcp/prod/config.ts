// App dependencies
import devConfig from "../dev/config";
import { SiteConfig } from "../../../app/config/common/entities";

// Template constants
const BROWSER_URL = "https://data.humancellatlas.org";

const config: SiteConfig = {
  ...devConfig,
  browserURL: BROWSER_URL,
  dataSources: {
    defaultDetailParams: {
      catalog: "dcp18",
    },
    defaultListParams: {
      catalog: "dcp18",
      size: "25",
    },
    url: "https://service.azul.data.humancellatlas.org/",
  },
};

export default config;
