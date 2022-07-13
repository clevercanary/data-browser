// App dependencies
import { ELEMENT_ALIGNMENT } from "../../../app/common/entities";
import { Social } from "../../../app/components/common/Socials/socials";
import { Logo } from "../../../app/components/Layout/common/entities";
import { SiteConfig } from "../../../app/config/model";

// Entities config
import { filesEntity } from "./filesEntity";
import { projectEntity } from "./projectsEntity";
import { samplesEntity } from "./samplesEntity";
import { summary } from "./summary";

// Images
import logoHca from "images/logoHca.png";
import logoHumanCellAtlas from "images/logoHumanCellAtlas.png";

// Template constants
const BROWSER_URL = "https://dev.singlecell.gi.ucsc.edu";
const CATALOG_DCP2 = "dcp2";
const PAGINATION_PAGE_SIZE = "25";
const PROJECTS_URL = "/projects";
const LOGO: Logo = {
  alt: "Human Cell Atlas Data Coordination Platform",
  height: 40,
  link: BROWSER_URL,
  src: logoHca,
};
const SOCIALS: Social[] = [
  {
    type: "twitter",
    url: "https://twitter.com/humancellatlas",
  },
  {
    type: "github",
    url: "https://github.com/HumanCellAtlas",
  },
  {
    type: "slack",
    url: "https://humancellatlas.slack.com/archives/C02TM2SDVM2",
  },
];

const config: SiteConfig = {
  browserURL: BROWSER_URL,
  datasources: {
    defaultDetailParams: {
      catalog: CATALOG_DCP2,
    },
    defaultListParams: {
      catalog: CATALOG_DCP2,
      size: PAGINATION_PAGE_SIZE,
    },
    url: "https://service.dev.singlecell.gi.ucsc.edu/",
  },
  entities: [projectEntity, filesEntity, samplesEntity],
  layout: {
    footer: {
      feedbackForm: false, // TODO feedback form
      logos: [{ ...LOGO, height: 38, src: logoHumanCellAtlas }],
      navLinks: [
        {
          label: "About",
          url: `${BROWSER_URL}/about`,
        },
        {
          label: "Help",
          url: `${BROWSER_URL}/help`,
        },
        {
          label: "Privacy",
          url: `${BROWSER_URL}/privacy`,
        },
        {
          label: "Contact",
          url: `${BROWSER_URL}/contact`,
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
          label: "Guides",
          url: `${BROWSER_URL}/guides`,
        },
        {
          label: "Metadata",
          url: `${BROWSER_URL}/metadata`,
        },
        {
          label: "Pipelines",
          url: `${BROWSER_URL}/pipelines`,
        },
        {
          label: "Analysis Tools",
          url: `${BROWSER_URL}/analyze`,
        },
        {
          label: "Contribute",
          url: `${BROWSER_URL}/contribute`,
        },
        {
          label: "APIs",
          url: `${BROWSER_URL}/apis`,
        },
        {
          label: "Updates",
          url: `${BROWSER_URL}/dcp-updates`,
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
