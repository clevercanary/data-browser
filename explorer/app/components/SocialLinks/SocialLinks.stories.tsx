import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SocialLinks } from "./SocialLinks";

export default {
  title: "Components/SocialLinks",
  component: SocialLinks,
  argTypes: {
    links: { control: "object" },
  },
} as ComponentMeta<typeof SocialLinks>;

const Template: ComponentStory<typeof SocialLinks> = (args) => (
  <SocialLinks {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      type: "github",
      url: "https://github.com/BruceRodrigues",
    },
  ],
};