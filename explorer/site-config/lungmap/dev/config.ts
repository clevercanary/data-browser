import { SiteConfig } from "../../../app/config/model";

const config: SiteConfig = {
  datasources: {
    catalog: "lm2",
    url: "https://service.dev.singlecell.gi.ucsc.edu/",
  },
  layout: {
    header: {
      logo: {
        url: "lungmap-logo.png",
        alt: "LungMAP Data Browser",
      },
      navLinks: {
        links: [
          {
            label: "Explore",
            url: "https://data-browser.lungmap.net/explore/projects",
          },
          {
            label: "Metadata",
            url: "https://data-browser.lungmap.net/metadata",
          },
          {
            label: "APIs",
            url: "https://data-browser.lungmap.net/apis",
          },
        ],
      },
      socialLinks: {
        links: [
          {
            type: "twitter",
            url: "https://twitter.com/lungmapnet",
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
