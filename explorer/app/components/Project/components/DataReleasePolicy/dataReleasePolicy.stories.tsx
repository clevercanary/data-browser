// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import { DataReleasePolicy } from "./dataReleasePolicy";

export default {
  component: DataReleasePolicy,
  title: "Project/Detail",
} as ComponentMeta<typeof DataReleasePolicy>;

const Template: ComponentStory<typeof DataReleasePolicy> = () => (
  <DataReleasePolicy />
);

export const ProjectDataReleasePolicy = Template.bind({});
