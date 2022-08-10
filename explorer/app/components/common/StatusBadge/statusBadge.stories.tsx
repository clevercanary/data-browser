// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import { STATUS, StatusBadge } from "./statusBadge";

export default {
  argTypes: {
    status: { control: "select", options: Array.from(Object.keys(STATUS)) },
  },
  component: StatusBadge,
  title: "Components/Status",
} as ComponentMeta<typeof StatusBadge>;

const Template: ComponentStory<typeof StatusBadge> = (args) => (
  <StatusBadge {...args} />
);

export const ProjectStatus = Template.bind({});
ProjectStatus.args = {
  status: STATUS.NEW,
};
