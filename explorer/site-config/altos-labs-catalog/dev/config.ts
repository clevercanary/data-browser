import logoAltosLabs from "images/logoAltosLabs.png";
import { CATALOG_DEFAULT } from "../../../app/apis/azul/anvil/common/constants";
import { ELEMENT_ALIGNMENT } from "../../../app/common/entities";
import { SiteConfig } from "../../../app/config/common/entities";
import { ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS } from "../filter-category-keys";
import { experimentEntity } from "./index/experimentEntityConfig";
import { fileEntity } from "./index/fileEntityConfig";

// Template constants
const BROWSER_URL = "https://altoslabs.com/";

const config: SiteConfig = {
  browserURL: BROWSER_URL,
  categoryConfigs: [
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.ASSAY,
      label: "Assay",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.DOI,
      label: "DOI",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.EXPERIMENT_TYPE,
      label: "Experiment Type",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.INITIATIVE,
      label: "Initiative",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.SHORTHAND,
      label: "Shorthand",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.SPECIES,
      label: "Species",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.TISSUE,
      label: "Tissue",
    },
    {
      key: ALTOS_LABS_CATALOG_FILTER_CATEGORY_KEYS.TITLE,
      label: "Title",
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
