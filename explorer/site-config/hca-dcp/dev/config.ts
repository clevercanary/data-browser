import { SiteConfig } from "../../../app/config/model";
import HcaLogo from "images/hca-logo.png";
import { hcaListToView } from "app/transformers/project";

const config: SiteConfig = {
  redirectRootToPath: "/explore/projects",
  datasources: {
    catalog: "dcp2",
    url: "https://service.dev.singlecell.gi.ucsc.edu/",
  },
  entities: [
    {
      label: "Projects",
      apiPath: "index/projects",
      route: "projects",
      listTransformer: hcaListToView,
      loadStaticallyList: true,
      loadStaticallyDetail: true,
    },
  ],
  layout: {
    header: {
      logo: {
        url: HcaLogo,
        alt: "Human Cell Atlas Data Coordination Platform",
      },
      navLinks: {
        links: [
          {
            label: "Explore",
            url: "https://data.humancellatlas.org/explore/projects",
          },
          {
            label: "Guides",
            url: "https://data.humancellatlas.org/guides",
          },
          {
            label: "Metadata",
            url: "https://data.humancellatlas.org/metadata",
          },
          {
            label: "Pipelines",
            url: "https://data.humancellatlas.org/pipelines",
          },
          {
            label: "Analysis Tools",
            url: "https://data.humancellatlas.org/analyze",
          },
          {
            label: "Contribute",
            url: "https://data.humancellatlas.org/contribute",
          },
          {
            label: "APIs",
            url: "https://data.humancellatlas.org/apis",
          },
          {
            label: "Updates",
            url: "https://data.humancellatlas.org/dcp-updates",
          },
        ],
      },
      socialLinks: {
        links: [
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
        ],
      },
      navAlignment: "left",
      searchEnabled: false,
      authenticationEnabled: false,
    },
  },
};

export default config;
