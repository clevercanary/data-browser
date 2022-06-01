import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Organizations } from "./Organizations";

export default {
  title: "Components/Organizations",
  component: Organizations,
  argTypes: {
    organizations: { control: "array" },
  },
} as ComponentMeta<typeof Organizations>;

const Template: ComponentStory<typeof Organizations> = (args) => (
  <Organizations {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  organizations: [
    {
      name: "Institute of Genetic Medicine",
      citation: "3",
    },
    {
      name: "Institute of Cellular Medicine",
    },
    {
      name: "Newcastle University",
    },
    {
      name: "Wellcome Sanger Institute",
    },
  ],
};
