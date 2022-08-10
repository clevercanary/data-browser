// Core dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// App dependencies
import { AzulFileDownload } from "./azulFileDownload";

export default {
  component: AzulFileDownload,
  parameters: {
    layout: "centered",
  },
  title: "Components/Index",
} as ComponentMeta<typeof AzulFileDownload>;

const Template: ComponentStory<typeof AzulFileDownload> = (args) => (
  <AzulFileDownload {...args} />
);

export const HCAAzulFileDownload = Template.bind({});
HCAAzulFileDownload.args = {
  url: "https://service.dev.singlecell.gi.ucsc.edu/repository/files/d496b624-eb67-5e47-999a-848e856c5bcc?catalog=dcp2&version=2021-09-10T16%3A09%3A44.000000Z",
};
