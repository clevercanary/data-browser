import logoAltosLabs from "images/logoAltosLabs.png";
import { CATALOG_DEFAULT } from "../../../app/apis/azul/anvil/common/constants";
import { ELEMENT_ALIGNMENT } from "../../../app/common/entities";
import { SiteConfig } from "../../../app/config/common/entities";
import {
  ALTOS_LABS_CATALOG_CATEGORY_KEY,
  ALTOS_LABS_CATALOG_CATEGORY_LABEL,
} from "../category";
import { experimentEntity } from "./index/experimentEntityConfig";
import { fileEntity } from "./index/fileEntityConfig";

// Template constants
const BROWSER_URL = "https://altoslabs.com/";

const config: SiteConfig = {
  browserURL: BROWSER_URL,
  categoryConfigs: [
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.ASSAY,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.ASSAY,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.DOI,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.DOI,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.EXPERIMENT,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.EXPERIMENT,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.EXPERIMENT_TYPE,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.EXPERIMENT_TYPE,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.INITIATIVE,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.INITIATIVE,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.SHORTHAND,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.SHORTHAND,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.SPECIES,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.SPECIES,
    },
    {
      key: ALTOS_LABS_CATALOG_CATEGORY_KEY.TISSUE,
      label: ALTOS_LABS_CATALOG_CATEGORY_LABEL.TISSUE,
    },
  ],
  dataSource: {
    // TODO review dataSource config
    defaultListParams: {
      catalog: CATALOG_DEFAULT,
      size: "25",
      sort: "entryId",
    },
    url: "", // TODO review dataSource url
  },
  entities: [experimentEntity, fileEntity],
  explorerTitle: "Altos Labs Data Browser",
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
          label: "Data Browser",
          url: "/experiments",
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
  redirectRootToPath: "/experiments",
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
