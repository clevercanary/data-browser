import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Citation } from "./citation";

export default {
  argTypes: {
    projectPath: { control: "text" },
  },
  component: Citation,
  title: "Components/SectionContent/Content/Project",
} as ComponentMeta<typeof Citation>;

const Template: ComponentStory<typeof Citation> = (args) => (
  <Citation {...args} />
);

export const ProjectCitation = Template.bind({});
ProjectCitation.args = {
  projectPath: "/60ea42e1-af49-42f5-8164-d641fdb696bc",
};
