import anvilDevConfig from "../../anvil/dev/config";
import { SiteConfig } from "../../../app/config/common/entities";
import { workspaceEntity } from "./index/workspaceEntity";

const config: SiteConfig = {
  ...anvilDevConfig,
  disablePagination: true,
  entities: [workspaceEntity],
  entityTitle: "Anvil Dataset Catalog",
  redirectRootToPath: "/workspaces",
  summaryConfig: undefined,
};

export default config;
