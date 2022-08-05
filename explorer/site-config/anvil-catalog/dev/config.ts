import anvilDevConfig from "../../anvil/dev/config";
import { workspaceEntityConfig } from "./index/workspaceEntityConfig";
import { SiteConfig } from "../../../app/config/common/entities";

const config: SiteConfig = {
  ...anvilDevConfig,
  disablePagination: true,
  entities: [workspaceEntityConfig],
  entityTitle: "Anvil Dataset Catalog",
  redirectRootToPath: "/workspaces",
  summaryConfig: {
    apiPath: "",
    components: [],
  },
};

export default config;
