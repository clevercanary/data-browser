// Core dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// App dependencies
import { Tabs } from "./tabs";

export default {
  argTypes: {
    onTabChange: { action: "onTabChange" },
  },
  component: Tabs,
  title: "Components/Tabs",
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const IndexTabs = Template.bind({});
IndexTabs.args = {
  tabs: [{ label: "Projects", value: "projects" }],
  value: "projects",
};
