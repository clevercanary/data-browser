import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stats } from "./Stats";

export default {
  title: "Components/Stats",
  component: Stats,
  argTypes: {
    items: { control: "array" },
  },
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: "Cohorts",
      value: "2",
    },
    {
      label: "Samples",
      value: "5,445",
    },
    {
      label: "Participants",
      value: "5,445",
    },
    {
      label: "Size",
      value: "107.54 TB",
    },
  ],
};
