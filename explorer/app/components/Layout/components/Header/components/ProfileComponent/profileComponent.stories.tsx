// Core dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Ap dependencies
import { ProfileComponent } from "./profileComponent";

export default {
  component: ProfileComponent,
  title: "Components/ProfileComponent",
} as ComponentMeta<typeof ProfileComponent>;

const Template: ComponentStory<typeof ProfileComponent> = () => (
  <ProfileComponent />
);

export const Primary = Template.bind({});
Primary.args = {};