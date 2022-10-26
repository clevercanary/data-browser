import { useAuthenticationConfig } from "app/hooks/useAuthenticationConfig";
import React from "react";
import { LoginNotice } from "../../components/Login/components/LoginNotice/loginNotice";
import { Login } from "../../components/Login/login";

export const LoginView = (): JSX.Element => {
  const { googleGISAuthConfig, loginNotice } = useAuthenticationConfig();

  return (
    <Login
      isGoogle={!!googleGISAuthConfig}
      loginNotice={
        loginNotice ? (
          <LoginNotice
            privacyUrl={loginNotice.privacyUrl}
            conditionsUrl={loginNotice.conditionsUrl}
          />
        ) : undefined
      }
      text="You need to create a terra account in order to view restricted access data"
      title="Sign in to your account"
    />
  );
};
