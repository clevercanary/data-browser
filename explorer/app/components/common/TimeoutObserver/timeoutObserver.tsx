import { useAuthentication } from "@clevercanary/data-explorer-ui/lib/hooks/useAuthentication";
import { useConfig } from "@clevercanary/data-explorer-ui/lib/hooks/useConfig";
import { SESSION_TIME_OUT } from "app/shared/constants";
import React from "react";
import { useIdleTimer } from "react-idle-timer";

export const TimeoutObserver = (): JSX.Element => {
  const {
    config: { redirectRootToPath },
  } = useConfig();
  const { isAuthorized } = useAuthentication();

  useIdleTimer({
    onIdle: () => isAuthorized && (window.location.href = redirectRootToPath),
    timeout: SESSION_TIME_OUT,
  });

  return <></>;
};
