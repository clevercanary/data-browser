import React from "react";
import { LoginNotice } from "../../components/Login/components/LoginNotice/loginNotice";
import { Login } from "../../components/Login/login";

export const LoginView = (): JSX.Element => {
  return (
    <Login
      isGoogle={true}
      loginNotice={
        <LoginNotice
          privacyUrl="https://example.com/privacy"
          conditionsUrl="https://example.com/conditions"
        />
      }
      text="You need to create a terra account in order to view restricted access data"
      title="Sign in to your account"
    />
  );
};
