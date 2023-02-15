import { SummariesStory } from "@clevercanary/data-explorer-ui/lib/components/Index/components/Hero/components/Summaries/summaries.stories";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Index } from "./index";

export default {
  argTypes: {
    Summaries: { table: { disable: true } },
    Tabs: { table: { disable: true } },
    entities: { table: { disable: true } },
    title: { table: { disable: true } },
  },
  component: Index,
  parameters: {
    layout: "fullscreen",
  },
  title: "Views/ExploreView",
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const AnvilIndex = Template.bind({});
AnvilIndex.args = {
  Summaries: <SummariesStory {...SummariesStory.args} />,
  Tabs: undefined,
  entities: undefined,
  title: "Explore Data",
};

export const HCAIndex = Template.bind({});
HCAIndex.args = {
  Summaries: <SummariesStory {...SummariesStory.args} />,
  Tabs: undefined,
  entities: undefined,
  title: "Explore Data: DCP 2.0 Data View",
};

export const LungmapIndex = Template.bind({});
LungmapIndex.args = {
  Summaries: <SummariesStory {...SummariesStory.args} />,
  Tabs: undefined,
  entities: undefined,
  title: "Explore Data",
};
