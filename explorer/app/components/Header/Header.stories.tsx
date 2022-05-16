import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    authenticationEnabled: { control: "boolean" },
    searchEnabled: { control: "boolean" },
    logo: { control: "object" },
    navAlignment: { control: "select", options: ["left", "center"] },
    navLinks: { control: "array" },
    slogan: { control: "text" },
    socialLinks: { control: "array" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  authenticationEnabled: true,
  searchEnabled: true,
  logo: {
    url: "https://www.webhostingsecretrevealed.net/wp-content/uploads/logo-nightwatch-300x300.jpg",
    width: 30,
    height: 30,
  },
  slogan: "NHGRI Analysis Visualization and Informatics Lab-space",
  navAlignment: "center",
  navLinks: [
    {
      label: "Google",
      url: "https://google.com",
    },
    {
      label: "Github",
      url: "https://github.com",
    },
  ],
  socialLinks: [
    {
      type: "github",
      url: "https://github.com/BruceRodrigues",
    },
  ],
};
