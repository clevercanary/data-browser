import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from "./logo";
import HcaLogo from "../../../../../images/hca-logo.png";
import AnvilLogo from "../../../../../images/anvil-logo.png";
import LungMapLogo from "../../../../../images/lungmap-logo.png";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    alt: { control: "text" },
    height: { control: "number" },
    imgSrc: { control: "text" },
    link: { control: "text" },
    width: { control: "number" },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Anvil = Template.bind({});
Anvil.args = {
  alt: "NHGRI Analysis Visualization and Informatics Lab-space",
  height: 40,
  imgSrc: AnvilLogo,
  link: "/",
};

export const HCA = Template.bind({});
HCA.args = {
  ...Anvil.args,
  alt: "HCA",
  height: 40,
  imgSrc: HcaLogo,
  link: "/explore/projects",
};

export const LungMap = Template.bind({});
LungMap.args = {
  ...Anvil.args,
  alt: "LungMap",
  height: 40,
  imgSrc: LungMapLogo,
  link: "/explore/projects",
};
