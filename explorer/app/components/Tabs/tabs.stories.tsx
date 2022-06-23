import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      label: "First tab",
      component: <div>First tab content</div>,
    },
    {
      label: "Second tab",
      component: <div>Second tab content</div>,
    },
    {
      label: "Third tab",
      component: <div>Third tab content</div>,
    },
  ],
};

export const WithDefaultSelectedTab = Template.bind({});
WithDefaultSelectedTab.args = {
  tabs: [
    {
      label: "First tab",
      component: <div>First tab content</div>,
    },
    {
      label: "Second tab",
      component: <div>Second tab content</div>,
      selected: true,
    },
    {
      label: "Third tab",
      component: <div>Third tab content</div>,
    },
  ],
};
