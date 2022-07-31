// App dependencies
import { ELEMENT_ALIGNMENT } from "../../../app/common/entities";
import { Social } from "app/components/common/Socials/socials";
import { Logo } from "../../../app/components/Layout/common/entities";

// Images
import logoLungmap from "images/logoLungmap.png";

// Summary config
import { summary } from "./index/summary";

// Config
import hcaConfig from "site-config/hca-dcp/dev/config";
import { FavIconConfig, SiteConfig } from "../../../app/config/common/entities";

// Template constants
const BROWSER_URL = "https://data-browser.dev.lungmap.net";
const CATALOG_LM2 = "lm2";
const PROJECTS_URL = "/projects";
const LOGO: Logo = {
  alt: "LungMAP Data Browser",
  height: 32,
  link: PROJECTS_URL,
  src: logoLungmap,
};
const SOCIALS: Social[] = [
  {
    type: "twitter",
    url: "https://twitter.com/lungmapnet",
  },
];

const FAV_ICONS: FavIconConfig = {
  "16x16": "/favicons/favicon-16x16.png",
  "180x180": "/favicons/apple-touch-icon.png",
  "32x32": "/favicons/favicon-32x32.png",
  default: "/favicons/favicon.ico",
  maskIcon: "/favicons/safari-pinned-tab.svg",
  siteWebManifest: "/favicons/site.webmanifest",
};

const config: SiteConfig = {
  browserURL: BROWSER_URL,
  categoryConfigs: hcaConfig.categoryConfigs,
  datasources: {
    defaultDetailParams: {
      catalog: CATALOG_LM2,
    },
    defaultListParams: {
      catalog: CATALOG_LM2,
    },
    // url: "https://service.dev.singlecell.gi.ucsc.edu/",
    url: "https://service.azul.data.humancellatlas.org/",
  },
  entities: hcaConfig.entities,
  entityTitle: "Explore Data",
  layout: {
    favIcons: FAV_ICONS,
    footer: {
      logos: [LOGO],
      navLinks: [
        {
          label: "Privacy",
          url: `${BROWSER_URL}/lungmap-privacy`,
        },
      ],
      socials: SOCIALS,
    },
    header: {
      authenticationEnabled: false,
      logo: LOGO,
      navAlignment: ELEMENT_ALIGNMENT.LEFT,
      navLinks: [
        {
          label: "Explore",
          url: PROJECTS_URL,
        },
        {
          label: "Metadata",
          url: `${BROWSER_URL}/metadata`,
        },
        {
          label: "APIs",
          url: `${BROWSER_URL}/apis`,
        },
      ],
      searchEnabled: false,
      slogan: undefined,
      socials: SOCIALS,
    },
  },
  redirectRootToPath: PROJECTS_URL,
  summary: {
    apiPath: "index/summary",
    components: summary,
  },
};

export default config;
