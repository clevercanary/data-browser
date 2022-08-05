import anvilDevConfig from "../../anvil/dev/config";
import { entities } from "../../../app/apis/anvil-catalog/common/entities";
import { SiteConfig } from "../../../app/config/common/entities";

const config: SiteConfig = {
  ...anvilDevConfig,
  disablePagination: true,
  entities: [entities],
  entityTitle: "Anvil Dataset Catalog",
  redirectRootToPath: "/workspaces",
  summaryConfig: {
    apiPath: "",
    components: [],
  },
};

export default config;
