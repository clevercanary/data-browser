// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import { SidebarLabel } from "./sidebarLabel";

export default {
  argTypes: {
    label: { control: "text" },
  },
  component: SidebarLabel,
  title: "Layout/Sidebar",
} as ComponentMeta<typeof SidebarLabel>;

const Template: ComponentStory<typeof SidebarLabel> = (args) => (
  <SidebarLabel {...args} />
);

export const Label = Template.bind({});
Label.args = {
  label: "Filter",
};
