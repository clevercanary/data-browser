import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AzulFileDownload } from "./azulFileDownload";

export default {
  component: AzulFileDownload,
  title: "Components/AzulFileDownload",
} as ComponentMeta<typeof AzulFileDownload>;

const Template: ComponentStory<typeof AzulFileDownload> = (args) => (
  <AzulFileDownload {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  url: "https://google.com",
};
