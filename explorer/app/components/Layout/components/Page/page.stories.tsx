// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import {
  PermanentSidebar,
  TemporarySidebarClosed,
  TemporarySidebarOpen,
} from "../Sidebar/sidebar.stories";
import { datasetsEntityConfig } from "../../../../../site-config/anvil/dev/index/datasetsEntityConfig";
import { Page } from "./page";

export default {
  argTypes: {
    children: { control: { disable: true } },
    entity: { control: { disable: true } },
  },
  component: Page,
  title: "Layout/Page",
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>{args.children}</Page>
);

export const BasicDesktopPage = Template.bind({});
BasicDesktopPage.args = {
  children: (
    <>
      <PermanentSidebar {...PermanentSidebar.args}>{""}</PermanentSidebar>
      <div />
    </>
  ),
  entity: datasetsEntityConfig,
};

export const BasicTabletPage = Template.bind({});
BasicTabletPage.args = {
  children: (
    <>
      <TemporarySidebarClosed {...TemporarySidebarClosed.args}>
        {""}
      </TemporarySidebarClosed>
      <div />
    </>
  ),
  entity: datasetsEntityConfig,
};

export const BasicTabletPageSidebarOpen = Template.bind({});
BasicTabletPageSidebarOpen.args = {
  children: (
    <>
      <TemporarySidebarOpen {...TemporarySidebarOpen.args}>
        {""}
      </TemporarySidebarOpen>
      <div />
    </>
  ),
  entity: datasetsEntityConfig,
};
