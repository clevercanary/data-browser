import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ValueInline } from "./valueInline";

export default {
  component: ValueInline,
  title: "Components/ValueInline",
} as ComponentMeta<typeof ValueInline>;

const Template: ComponentStory<typeof ValueInline> = (args) => (
  <ValueInline {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Samples",
  value: "610,561",
};
