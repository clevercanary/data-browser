import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StaticImage } from "./StaticImage";

export default {
  title: "Components/StaticImage",
  component: StaticImage,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
} as ComponentMeta<typeof StaticImage>;

const Template: ComponentStory<typeof StaticImage> = (args) => (
  <StaticImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  src: "hca-logo.png",
  width: 30,
  height: 30,
  alt: "NHGRI Analysis Visualization and Informatics Lab-space",
};
