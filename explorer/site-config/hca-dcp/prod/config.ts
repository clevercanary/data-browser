import { SiteConfig } from "../../../app/config/type";

const config: SiteConfig = {
  datasources: {
    catalog: "dcp2",
    url: "https://service.dev.singlecell.gi.ucsc.edu/",
  },
  layout: {
    header: {
      logo: {
        slogan: "HCA DPC",
        url: "https://www.webhostingsecretrevealed.net/wp-content/uploads/logo-nightwatch-300x300.jpg",
        height: 30,
        width: 30,
      },
      navLinks: {
        links: [
          {
            label: "Google",
            url: "https://google.com",
          },
        ],
      },
      socialLinks: {
        links: [
          {
            type: "github",
            url: "https://github.com/BruceRodrigues",
          },
        ],
      },
      navAlignment: "left",
      searchEnabled: true,
      authenticationEnabled: true,
    },
  },
};

export default config;
