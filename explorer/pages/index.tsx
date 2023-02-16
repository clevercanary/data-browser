import { useConfig } from "@clevercanary/data-explorer-ui/lib/hooks/useConfig";
import React from "react";
import { Redirect } from "../app/components/Redirect/Redirect";

const HomePage = (): JSX.Element => {
  const { config } = useConfig();
  const { redirectRootToPath } = config;

  if (redirectRootToPath) {
    return <Redirect destination={redirectRootToPath} replace />;
  }

  return <></>;
};

export default HomePage;
