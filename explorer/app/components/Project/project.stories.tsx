// Core dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// App dependencies
import { Project } from "./project";

export default {
  argTypes: {
    mainColumn: { control: "object" },
    sideColumn: { control: "object" },
    top: { control: "object" },
  },
  component: Project,
  title: "ProjectOverview",
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => (
  <Project {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mainColumn: (
    <div
      key={1}
      style={{ width: 500, height: 500, backgroundColor: "red" }}
    ></div>
  ),
  sideColumn: (
    <div
      key={2}
      style={{ width: 500, height: 500, backgroundColor: "blue" }}
    ></div>
  ),
  top: (
    <div
      key={3}
      style={{ width: 500, height: 500, backgroundColor: "yellow" }}
    ></div>
  ),
};
