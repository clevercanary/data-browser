// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

// App dependencies
import { Search } from "./search";

export default {
  component: Search,
  title: "Components/Search",
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const Primary = Template.bind({});
Primary.args = {};
