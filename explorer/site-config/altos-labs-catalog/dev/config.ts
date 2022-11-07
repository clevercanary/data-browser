import logoAltosLabs from "images/logoAltosLabs.png";
import { CATALOG_DEFAULT } from "../../../app/apis/azul/anvil/common/constants";
import { ELEMENT_ALIGNMENT } from "../../../app/common/entities";
import { SiteConfig } from "../../../app/config/common/entities";
import anvilConfig from "../../anvil/dev/config";
import { consortiaEntity } from "./index/consortiaEntity";
import { studiesEntity } from "./index/studiesEntity";
import { workspaceEntity } from "./index/workspaceEntity";

// Template constants
const BROWSER_URL = "https://altoslabs.com/";

// Remove the summary from the AnVIL config.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- using rest syntax to remove summary from config.
const { summaryConfig, ...basicConfig } = anvilConfig;

const config: SiteConfig = {
  ...basicConfig,
  browserURL: BROWSER_URL,
  categoryConfigs: [
    {
      key: "consentCode",
      label: "Consent Code",
    },
    {
      key: "consortium",
      label: "Consortium",
    },
    {
      key: "dataTypes",
      label: "Data Type",
    },
    {
      key: "dbGapId",
      label: "dbGap Id",
    },
    {
      key: "diseases",
      label: "Disease (indication)",
    },
    {
      key: "studyDesigns",
      label: "Study Design",
    },
    {
      key: "workspaceName",
      label: "Terra Workspace Name",
    },
  ],
  dataSource: {
    // TODO review dataSource
    defaultDetailParams: {
      // TODO review defaultDetailParams
      catalog: CATALOG_DEFAULT,
    },
    defaultListParams: {
      // TODO review defaultListParams
      catalog: CATALOG_DEFAULT,
      size: "25",
      sort: "entryId",
    },
    url: "https://service.nadove2.dev.singlecell.gi.ucsc.edu/", // TODO review dataSource url
  },
  disablePagination: true,
  entities: [workspaceEntity, studiesEntity, consortiaEntity],
  explorerTitle: "Altos Labs Catalog",
  layout: {
    footer: {
      logos: [
        {
          alt: "altoslabs",
          height: 32,
          link: `${BROWSER_URL}`,
          src: logoAltosLabs,
        },
      ],
      navLinks: [
        {
          label: "Altos Labs",
          url: `${BROWSER_URL}`,
        },
      ],
      socials: [
        {
          type: "twitter",
          url: "https://www.twitter.com/altos_labs",
        },
      ],
    },
    header: {
      logo: {
        alt: "altoslabs",
        height: 32,
        link: `${BROWSER_URL}`,
        src: logoAltosLabs,
      },
      navAlignment: ELEMENT_ALIGNMENT.LEFT,
      navLinks: [
        {
          label: "Datasets",
          url: "/workspaces",
        },
      ],
      socials: [
        {
          type: "twitter",
          url: "https://www.twitter.com/altos_labs",
        },
      ],
    },
  },
  redirectRootToPath: "/workspaces",
  summaryConfig: undefined,
  theme: {
    palette: {
      primary: {
        dark: "#018781",
        main: "#02B9B1",
      },
    },
  },
};

export default config;
