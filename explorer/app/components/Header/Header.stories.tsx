import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";
import HcaLogo from "../../../images/hca-logo.png";
import AnvilLogo from "../../../images/anvil-logo.png";
import LungMapLogo from "../../../images/lungmap-logo.png";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    authenticationEnabled: { control: "boolean" },
    searchEnabled: { control: "boolean" },
    logo: { control: "object" },
    navAlignment: { control: "select", options: ["left", "center"] },
    navLinks: { control: "array" },
    socialLinks: { control: "array" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Anvil = Template.bind({});
Anvil.args = {
  authenticationEnabled: false,
  searchEnabled: true,
  logo: {
    slogan: "NHGRI Analysis Visualization and Informatics Lab-space",
    url: AnvilLogo,
    alt: "NHGRI Analysis Visualization and Informatics Lab-space",
  },
  navAlignment: "center",
  navLinks: {
    links: [
      {
        label: "Overview",
        url: "https://google.com/overview",
      },
      {
        label: "Learn",
        url: "https://github.com/learn",
      },
      {
        label: "Datasets",
        url: "https://github.com/datasets",
      },
      {
        label: "News",
        url: "https://github.com/news",
      },
      {
        label: "Events",
        url: "https://github.com/events",
      },
      {
        label: "Team",
        url: "https://github.com/team",
      },
      {
        label: "FAQ",
        url: "https://github.com/faq",
      },
    ],
  },
  socialLinks: {
    links: [
      {
        type: "slack",
        url: "https://github.com/slack",
      },
      {
        type: "discourse",
        url: "https://github.com/discourse",
      },
      {
        type: "youtube",
        url: "https://github.com/youtube",
      },
      {
        type: "twitter",
        url: "https://github.com/twitter",
      },
      {
        type: "github",
        url: "https://github.com/",
      },
    ],
  },
};

export const HCA = Template.bind({});
HCA.args = {
  authenticationEnabled: true,
  searchEnabled: true,
  logo: {
    url: HcaLogo,
    alt: "Anvil",
  },
  navAlignment: "left",
  navLinks: {
    links: [
      {
        label: "Explore",
        url: "https://google.com",
      },
      {
        label: "Guides",
        url: "https://github.com",
      },
      {
        label: "Metadata",
        url: "https://github.com",
      },
      {
        label: "Pipelines",
        url: "https://github.com",
      },
      {
        label: "Analysis Tools",
        url: "https://github.com",
      },
      {
        label: "Contribute",
        url: "https://github.com/contribute",
      },
      {
        label: "APIs",
        url: "https://github.com/apis",
      },
      {
        label: "Updates",
        url: "https://github.com/updates",
      },
    ],
  },
  socialLinks: {
    links: [
      {
        type: "twitter",
        url: "https://github.com/twitter",
      },
      {
        type: "slack",
        url: "https://github.com/slack",
      },
      {
        type: "github",
        url: "https://github.com/",
      },
    ],
  },
};
export const LungMap = Template.bind({});
LungMap.args = {
  authenticationEnabled: false,
  searchEnabled: true,
  logo: {
    url: LungMapLogo,
    alt: "LungMap",
  },
  navAlignment: "left",
  navLinks: {
    links: [
      {
        label: "Explore",
        url: "https://google.com",
      },
      {
        label: "Metadata",
        url: "https://github.com",
      },
      {
        label: "APIs",
        url: "https://github.com",
      },
    ],
  },
  socialLinks: {
    links: [
      {
        type: "twitter",
        url: "https://github.com/BruceRodrigues",
      },
    ],
  },
};
