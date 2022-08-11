import anvilConfig from "../../anvil/dev/config";
import { Social } from "app/components/common/Socials/socials";
import { Logo } from "../../../app/components/Layout/common/entities";
import { ELEMENT_ALIGNMENT } from "../../../app/common/entities";

import { studiesEntityConfig } from "./index/studiesEntityConfig";

import logoNcpi from "images/logoNcpi.svg";
import { SiteConfig } from "../../../app/config/common/entities";

// Template constants
const BROWSER_URL = "https://anvilproject.org";
const SLOGAN = "NIH Cloud Platform Interoperability Effort";
const LOGO: Logo = {
  alt: SLOGAN,
  height: 40,
  link: "/",
  src: logoNcpi,
};

const SOCIALS: Social[] = [
  {
    type: "youtube",
    url: "https://www.youtube.com/channel/UCJvPdDZOxJvOwObfnZ8X3gA",
  },
  {
    type: "github",
    url: "https://github.com/NIH-NCPI/",
  },
  {
    type: "slack",
    url: "https://nihcloudplatforms.slack.com/",
  },
];

// Remove the summary from the AnVIL config.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- using rest syntax to remove summary from config.
const { summaryConfig, ...basicConfig } = anvilConfig;
const config: SiteConfig = {
  ...basicConfig,
  disablePagination: true,
  entities: [studiesEntityConfig],
  entityTitle: "NCPI Dataset Catalog",
  layout: {
    footer: anvilConfig.layout.footer,
    header: {
      authenticationEnabled: false,
      logo: LOGO,
      navAlignment: ELEMENT_ALIGNMENT.CENTER,
      navLinks: [
        {
          label: "Overview",
          url: `${BROWSER_URL}/ncpi`,
        },
        {
          label: "Platforms",
          url: `${BROWSER_URL}/ncpi/platforms`,
        },
        {
          label: "Technologies",
          url: `${BROWSER_URL}/ncpi/technologies`,
        },
        {
          label: "Datasets",
          url: `${BROWSER_URL}/ncpi/data`,
        },
        {
          label: "Demonstration Projects",
          url: `${BROWSER_URL}/ncpi/demonstration-projects`,
        },
        {
          label: "Training",
          url: `${BROWSER_URL}/ncpi/training`,
        },
        {
          label: "Updates",
          url: `${BROWSER_URL}/ncpi/progress-updates`,
        },
      ],
      searchEnabled: true,
      slogan: SLOGAN,
      socials: SOCIALS,
    },
  },
  redirectRootToPath: "/studies",
};

export default config;
