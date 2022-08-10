// Core dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

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
