// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import { Pagination } from "./pagination";

export default {
  argTypes: {
    canNextPage: { control: "boolean" },
    canPreviousPage: { control: "boolean" },
    currentPage: { control: "number" },
    onNextPage: { action: "nextPage" },
    onPreviousPage: { action: "previousPage" },
    totalPage: { control: "number" },
  },
  component: Pagination,
  title: "Components/Pagination",
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1,
  totalPage: 25,
};
