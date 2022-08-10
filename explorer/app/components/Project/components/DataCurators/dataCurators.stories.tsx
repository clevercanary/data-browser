// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import { DataCurators } from "./dataCurators";

export default {
  argTypes: {
    dataCurators: { control: "array" },
  },
  component: DataCurators,
  title: "Project/Detail",
} as ComponentMeta<typeof DataCurators>;

const Template: ComponentStory<typeof DataCurators> = (args) => (
  <DataCurators {...args} />
);

export const ProjectDataCurators = Template.bind({});
ProjectDataCurators.args = {
  dataCurators: ["Schwartz Rachel", "William Sullivan", "Parisa Nejad"],
};
