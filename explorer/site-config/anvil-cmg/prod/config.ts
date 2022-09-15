import { SiteConfig } from "../../../app/config/common/entities";
import devConfig from "../dev/config";

// Template constants
const BROWSER_URL = "https://anvilproject.org/";

const config: SiteConfig = {
  ...devConfig,
  browserURL: BROWSER_URL,
  exportToTerraUrl: "https://app.terra.bio/",
};

export default config;