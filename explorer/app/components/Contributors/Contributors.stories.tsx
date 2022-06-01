import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Contributors } from "./Contributors";

export default {
  title: "Components/Contributors",
  component: Contributors,
  argTypes: {
    contributors: { control: "array" },
  },
} as ComponentMeta<typeof Contributors>;

const Template: ComponentStory<typeof Contributors> = (args) => (
  <Contributors {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  contributors: [
    {
      name: "Allon M Klein",
      citation: "3",
    },
    {
      name: "Amedeo Vetere",
    },
    {
      name: "Bridget K Wagner",
    },
    {
      name: "Gervaise H Henry",
      citation: "1",
      role: "Computational Scientist",
    },
  ],
};
