import { ELEMENT_ALIGNMENT } from "@clevercanary/data-explorer-ui/lib/common/entities";
import { LogoProps } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/components/Logo/logo";
import { SiteConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import { tabletUp } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import {
  TEXT_BODY_LARGE_500,
  TEXT_HEADING,
  TEXT_HEADING_LARGE,
  TEXT_HEADING_SMALL,
  TEXT_HEADING_XLARGE,
} from "@clevercanary/data-explorer-ui/lib/theme/common/typography";
import logoHca from "images/logoHca.png";
import logoHumanCellAtlas from "images/logoHumanCellAtlas.png";
import { exportConfig } from "../../hca-dcp/dev/export/export"; // TODO: how should this be properly handled? (currently importing this from hca-dcp so it can be used to avoid a build error)
import {
  HCA_CATALOG_CATEGORY_KEY,
  HCA_CATALOG_CATEGORY_LABEL,
} from "../category";
import { socials } from "./constants";
import { projectEntityConfig } from "./index/projectEntityConfig";

const BROWSER_URL = "https://dev.singlecell.gi.ucsc.edu";
const FONT_FAMILY_DIN = "'din-2014', sans-serif";
const PROJECTS_URL = "/projects";
const LOGO: LogoProps = {
  alt: "Human Cell Atlas - Project Catalog",
  height: 32,
  link: BROWSER_URL,
  src: logoHca,
};

const config: SiteConfig = {
  browserURL: "", // TODO
  categoryConfigs: [
    {
      key: HCA_CATALOG_CATEGORY_KEY.CONTRIBUTOR,
      label: HCA_CATALOG_CATEGORY_LABEL.CONTRIBUTOR,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.FUNDER,
      label: HCA_CATALOG_CATEGORY_LABEL.FUNDER,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.INSTITUTION,
      label: HCA_CATALOG_CATEGORY_LABEL.INSTITUTION,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.LABORATORY,
      label: HCA_CATALOG_CATEGORY_LABEL.LABORATORY,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.ORGAN,
      label: HCA_CATALOG_CATEGORY_LABEL.ORGAN,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.PROJECT_TITLE,
      label: HCA_CATALOG_CATEGORY_LABEL.PROJECT_TITLE,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.SPECIES,
      label: HCA_CATALOG_CATEGORY_LABEL.SPECIES,
    },
    {
      key: HCA_CATALOG_CATEGORY_KEY.TECHNOLOGY,
      label: HCA_CATALOG_CATEGORY_LABEL.TECHNOLOGY,
    },
  ],
  dataSource: {
    url: "",
  },
  entities: [projectEntityConfig],
  explorerTitle: "HCA Project Catalog",
  export: exportConfig,
  exportToTerraUrl: "https://app.terra.bio/",
  layout: {
    footer: {
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
      socials,
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
      socials,
    },
  },
  redirectRootToPath: PROJECTS_URL,
  themeOptions: {
    palette: {
      primary: {
        dark: "#005EA9",
        main: "#1C7CC7",
      },
    },
    typography: {
      [TEXT_BODY_LARGE_500]: {
        fontFamily: FONT_FAMILY_DIN,
        fontSize: 18,
        fontWeight: 400,
      },
      [TEXT_HEADING]: {
        fontFamily: FONT_FAMILY_DIN,
        fontSize: 22,
        fontWeight: 400,
        letterSpacing: "normal",
        [tabletUp]: {
          fontSize: 26,
          letterSpacing: "normal",
        },
      },
      [TEXT_HEADING_LARGE]: {
        fontFamily: FONT_FAMILY_DIN,
        fontSize: 26,
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "34px",
        [tabletUp]: {
          fontSize: 32,
          letterSpacing: "normal",
        },
      },
      [TEXT_HEADING_SMALL]: {
        fontFamily: FONT_FAMILY_DIN,
        fontSize: 20,
        fontWeight: 400,
        letterSpacing: "normal",
        [tabletUp]: {
          fontSize: 22,
          letterSpacing: "normal",
        },
      },
      [TEXT_HEADING_XLARGE]: {
        fontFamily: FONT_FAMILY_DIN,
        fontSize: 32,
        fontWeight: 400,
        letterSpacing: "normal",
        [tabletUp]: {
          fontSize: 42,
          letterSpacing: "-0.4px",
        },
      },
    },
  },
};

export default config;
