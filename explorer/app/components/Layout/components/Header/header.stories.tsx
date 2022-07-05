// Core dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// App dependencies
import { ELEMENT_ALIGNMENT } from "../../../../common/entities";
import { Header } from "./header";

// Images
import logoAnvil from "images/logoAnvil.png";
import logoHca from "images/logoHca.png";
import logoLungmap from "images/logoLungmap.png";

export default {
  argTypes: {
    header: {
      authenticationEnabled: { control: "boolean" },
      logo: { control: "object" },
      navAlignment: {
        control: "select",
        options: [ELEMENT_ALIGNMENT.LEFT, ELEMENT_ALIGNMENT.CENTER],
      },
      navLinks: { control: "array" },
      searchEnabled: { control: "boolean" },
      slogan: { control: "text" },
      socials: { control: "array" },
    },
  },
  component: Header,
  title: "Layout/Header",
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Anvil = Template.bind({});
Anvil.args = {
  header: {
    authenticationEnabled: false,
    logo: {
      alt: "NHGRI Analysis Visualization and Informatics Lab-space",
      height: 40,
      link: "/",
      src: logoAnvil,
    },
    navAlignment: ELEMENT_ALIGNMENT.CENTER,
    navLinks: [
      {
        label: "Overview",
        url: "https://anvilproject.org/overview",
      },
      {
        label: "Learn",
        url: "https://anvilproject.org/learn",
      },
      {
        label: "Datasets",
        url: "https://anvilproject.org/data",
      },
      {
        label: "News",
        url: "https://anvilproject.org/news",
      },
      {
        label: "Events",
        url: "https://anvilproject.org/events",
      },
      {
        label: "Team",
        url: "https://anvilproject.org/team",
      },
      {
        label: "FAQ",
        url: "https://anvilproject.org/faq",
      },
      {
        label: "Help",
        url: "https://anvilproject.org/help",
      },
    ],
    searchEnabled: true,
    slogan: "NHGRI Analysis Visualization and Informatics Lab-space",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/useAnVIL",
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/channel/UCBbHCj7kUogAMFyBAzzzfUw",
      },
      {
        type: "discourse",
        url: "https://help.anvilproject.org/",
      },
      {
        type: "github",
        url: "https://github.com/anvilproject",
      },
    ],
  },
};

export const HCA = Template.bind({});
HCA.args = {
  header: {
    authenticationEnabled: true,
    logo: {
      alt: "Anvil",
      height: 40,
      link: "/explore/projects",
      src: logoHca,
    },
    navAlignment: ELEMENT_ALIGNMENT.LEFT,
    navLinks: [
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
    searchEnabled: true,
    slogan: undefined,
    socials: [
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
};
export const LungMap = Template.bind({});
LungMap.args = {
  header: {
    authenticationEnabled: false,
    logo: {
      alt: "LungMap",
      height: 40,
      link: "/",
      src: logoLungmap,
    },
    navAlignment: ELEMENT_ALIGNMENT.LEFT,
    navLinks: [
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
    searchEnabled: true,
    slogan: undefined,
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/lungmapnet",
      },
    ],
  },
};