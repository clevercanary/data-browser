import {
  PrimaryButtonStory,
  SecondaryButtonStory,
} from "@clevercanary/data-explorer-ui/lib/components/common/Button/button.stories";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { NoResults } from "./noResults";

export default {
  argTypes: {
    actions: { control: { disabled: true } },
    description: { control: "text" },
    title: { control: "text" },
  },
  component: NoResults,
  title: "Components/Communication/NoResults",
} as ComponentMeta<typeof NoResults>;

const Template: ComponentStory<typeof NoResults> = (args) => (
  <NoResults {...args} />
);

export const Default = Template.bind({});
Default.args = {
  actions: (
    <>
      <PrimaryButtonStory>Remove last filter</PrimaryButtonStory>
      <SecondaryButtonStory>Clear all filters</SecondaryButtonStory>
    </>
  ),
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  title: "No Results found",
};
