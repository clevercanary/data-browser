import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Button, IconButton } from "@mui/material";
import { NextRouter, useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../../../../../common/context/authState";
import {
  BREAKPOINT,
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "../../../../../../hooks/useBreakpointHelper";
import { ProfileImage } from "./profile.styles";

/**
 * Navigates to login page.
 * @param router - Next router.
 */
function navigateToLogin(router: NextRouter): void {
  router.push("/login");
}

export const ProfileComponent = (): JSX.Element => {
  const { isAuthorized, userProfile } = useContext(AuthContext);
  const profileImageURL = userProfile?.picture;
  const router = useRouter();
  const desktop = useBreakpointHelper(
    BREAKPOINT_FN_NAME.UP,
    BREAKPOINT.DESKTOP
  );
  return (
    <>
      {isAuthorized ? (
        <ProfileImage profileImageURL={profileImageURL} />
      ) : desktop ? (
        <Button
          startIcon={<LoginRoundedIcon />}
          variant="nav"
          onClick={(): void => navigateToLogin(router)}
        >
          Sign in
        </Button>
      ) : (
        <IconButton color="ink" onClick={(): void => navigateToLogin(router)}>
          <LoginRoundedIcon />
        </IconButton>
      )}
    </>
  );
};
