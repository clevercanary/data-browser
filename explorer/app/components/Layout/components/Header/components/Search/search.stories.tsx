import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Search } from "./search";

export default {
  component: Search,
  title: "Components/Common/Button",
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const SearchButton = Template.bind({});
SearchButton.args = {};
