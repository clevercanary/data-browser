// Core dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// App dependencies
import { Search } from "./search";

export default {
  component: Search,
  title: "Components/Search",
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const Primary = Template.bind({});
Primary.args = {};
