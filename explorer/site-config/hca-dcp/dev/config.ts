import { ELEMENT_ALIGNMENT } from "@clevercanary/data-explorer-ui/lib/common/entities";
import { ANCHOR_TARGET } from "@clevercanary/data-explorer-ui/lib/components/Links/common/entities";
import { SiteConfig } from "@clevercanary/data-explorer-ui/lib/config/entities";
import { tabletUp } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import {
  TEXT_BODY_LARGE_500,
  TEXT_HEADING,
  TEXT_HEADING_LARGE,
  TEXT_HEADING_SMALL,
  TEXT_HEADING_XLARGE,
} from "@clevercanary/data-explorer-ui/lib/theme/common/typography";
import * as C from "../../../app/components/index";
import { HCA_DCP_CATEGORY_KEY, HCA_DCP_CATEGORY_LABEL } from "../category";
import { exportConfig } from "./export/export";
import { filesEntityConfig } from "./index/filesEntityConfig";
import { projectsEntityConfig } from "./index/projectsEntityConfig";
import { samplesEntityConfig } from "./index/samplesEntityConfig";
import { summary } from "./index/summary";
import { supportConfig } from "./support/support";

// Template constants
const APP_TITLE = "HCA Data Explorer";
const BROWSER_URL = "https://data.humancellatlas.dev.clevercanary.com";
const ORG_URL = "https://www.humancellatlas.org";
const PORTAL_URL = "https://data.humancellatlas.dev.clevercanary.com";
const FONT_FAMILY_DIN = "'din-2014', sans-serif";
const PAGINATION_PAGE_SIZE = "25";
export const PROJECTS_URL = "/projects";

const config: SiteConfig = {
  analytics: {
    gtmAuth: "eQWri5eLUCDkm5SvLIv8eQ", // GTM environment-specific
    gtmId: "GTM-M2J5NTJ",
    gtmPreview: "env-186",
  },
  appTitle: APP_TITLE,
  browserURL: BROWSER_URL,
  categoryGroupConfigs: [
    {
      categoryConfigs: [
        {
          key: HCA_DCP_CATEGORY_KEY.PROJECT_TITLE,
          label: HCA_DCP_CATEGORY_LABEL.PROJECT_TITLE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.CONTACT_NAME,
          label: HCA_DCP_CATEGORY_LABEL.CONTACT_NAME,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.INSTITUTION,
          label: HCA_DCP_CATEGORY_LABEL.INSTITUTION,
        },
      ],
    },
    {
      categoryConfigs: [
        {
          key: HCA_DCP_CATEGORY_KEY.ANALYSIS_PROTOCOL, // workflow
          label: HCA_DCP_CATEGORY_LABEL.ANALYSIS_PROTOCOL,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.ANATOMICAL_ENTITY, // specimenOrgan
          label: HCA_DCP_CATEGORY_LABEL.ANATOMICAL_ENTITY,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.BIOLOGICAL_SEX,
          label: HCA_DCP_CATEGORY_LABEL.BIOLOGICAL_SEX,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.CONTENT_DESCRIPTION,
          label: HCA_DCP_CATEGORY_LABEL.CONTENT_DESCRIPTION,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.DEVELOPMENT_STAGE,
          label: HCA_DCP_CATEGORY_LABEL.DEVELOPMENT_STAGE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.DONOR_DISEASE,
          label: HCA_DCP_CATEGORY_LABEL.DONOR_DISEASE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.FILE_FORMAT,
          label: HCA_DCP_CATEGORY_LABEL.FILE_FORMAT,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.FILE_SOURCE,
          label: HCA_DCP_CATEGORY_LABEL.FILE_SOURCE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.GENUS_SPECIES,
          label: HCA_DCP_CATEGORY_LABEL.GENUS_SPECIES,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.INSTRUMENT_MANUFACTURER_MODEL,
          label: HCA_DCP_CATEGORY_LABEL.INSTRUMENT_MANUFACTURER_MODEL,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.LIBRARY_CONSTRUCTION_METHOD,
          label: HCA_DCP_CATEGORY_LABEL.LIBRARY_CONSTRUCTION_METHOD,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.MODEL_ORGAN,
          label: HCA_DCP_CATEGORY_LABEL.MODEL_ORGAN,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.NUCLEIC_ACID_SOURCE,
          label: HCA_DCP_CATEGORY_LABEL.NUCLEIC_ACID_SOURCE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.ORGAN_PART,
          label: HCA_DCP_CATEGORY_LABEL.ORGAN_PART,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.PAIRED_END,
          label: HCA_DCP_CATEGORY_LABEL.PAIRED_END,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.PRESERVATION_METHOD,
          label: HCA_DCP_CATEGORY_LABEL.PRESERVATION_METHOD,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.SAMPLE_ENTITY_TYPE,
          label: HCA_DCP_CATEGORY_LABEL.SAMPLE_ENTITY_TYPE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.SELECTED_CELL_TYPE,
          label: HCA_DCP_CATEGORY_LABEL.SELECTED_CELL_TYPE,
        },
        {
          key: HCA_DCP_CATEGORY_KEY.SPECIMEN_DISEASE,
          label: HCA_DCP_CATEGORY_LABEL.SPECIMEN_DISEASE,
        },
      ],
    },
  ],
  dataSource: {
    defaultListParams: {
      size: PAGINATION_PAGE_SIZE,
    },
    defaultParams: {
      catalog: "dcp32",
    },
    url: "https://service.azul.data.humancellatlas.org/",
  },
  entities: [projectsEntityConfig, samplesEntityConfig, filesEntityConfig],
  explorerTitle: "Explore Data",
  export: exportConfig,
  exportToTerraUrl: "https://app.terra.bio",
  layout: {
    footer: {
      Branding: C.HCABranding({
        orgURL: ORG_URL,
        portalURL: PORTAL_URL,
      }),
      navLinks: [
        {
          label: "About",
          target: ANCHOR_TARGET.BLANK,
          url: `${PORTAL_URL}/about`,
        },
        {
          label: "Help",
          target: ANCHOR_TARGET.BLANK,
          url: `${PORTAL_URL}/help`,
        },
        {
          label: "Privacy",
          target: ANCHOR_TARGET.BLANK,
          url: `${PORTAL_URL}/privacy`,
        },
        {
          label: "Contact",
          target: ANCHOR_TARGET.BLANK,
          url: `${PORTAL_URL}/contact`,
        },
      ],
    },
    header: {
      Logo: C.Logo({
        alt: APP_TITLE,
        height: 32.5,
        link: "/projects",
        src: "/images/hcaExplorer.png",
      }),
      authenticationEnabled: false,
      navAlignment: ELEMENT_ALIGNMENT.RIGHT,
      navLinks: [
        {
          flatten: true,
          label: "Help & Documentation",
          menuItems: [
            {
              label: C.LabelIconMenuItem({ label: "Guides" }),
              target: ANCHOR_TARGET.BLANK,
              url: `${PORTAL_URL}/guides`,
            },
            {
              label: C.LabelIconMenuItem({ label: "Privacy" }),
              target: ANCHOR_TARGET.BLANK,
              url: `${PORTAL_URL}/privacy`,
            },
          ],
          url: "",
        },
      ],
      searchEnabled: false,
      searchURL: `${PORTAL_URL}/search`,
    },
    support: supportConfig,
  },
  redirectRootToPath: PROJECTS_URL,
  summaryConfig: {
    apiPath: "index/summary",
    components: summary,
  },
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
