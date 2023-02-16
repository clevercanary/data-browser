import { LoginNotice } from "@clevercanary/data-explorer-ui/lib/components/Login/components/LoginNotice/loginNotice";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Login } from "./login";

export default {
  argTypes: {
    isGoogle: { control: "boolean" },
    loginNotice: { table: { disable: true } },
    text: { control: "text" },
    title: { control: "text" },
  },
  component: Login,
  title: "Components/Login",
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const ExampleLogin = Template.bind({});
ExampleLogin.args = {
  isGoogle: true,
  loginNotice: (
    <LoginNotice
      privacyUrl="https://example.com/privacy"
      conditionsUrl="https://example.com/conditions"
    />
  ),
  text: "You need to create a terra account in order to view restricted access data",
  title: "Sign in to your account",
};
