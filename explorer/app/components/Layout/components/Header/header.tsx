import { ELEMENT_ALIGNMENT } from "@clevercanary/data-explorer-ui/lib/common/entities";
import { Socials } from "@clevercanary/data-explorer-ui/lib/components/common/Socials/socials";
import { getHeaderNavigationLinks } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/common/utils";
import { Content } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/components/Content/content";
import { Logo } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/components/Logo/logo";
import { NavLinks } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/components/NavLinks/navLinks";
import { Search } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/components/Search/search";
import { HeaderProps } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/header";
import {
  Header as AppBar,
  HEADER_HEIGHT,
} from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Header/header.styles";
import {
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "@clevercanary/data-explorer-ui/lib/hooks/useBreakpointHelper";
import { DESKTOP_SM } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProfileComponent } from "./components/ProfileComponent/profileComponent";

export const Header = ({
  authenticationEnabled,
  logo,
  navAlignment = ELEMENT_ALIGNMENT.LEFT,
  navLinks,
  searchEnabled,
  slogan,
  socials,
}: HeaderProps): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const smDesktop = useBreakpointHelper(BREAKPOINT_FN_NAME.UP, DESKTOP_SM);
  const onlySmDesktop = useBreakpointHelper(
    BREAKPOINT_FN_NAME.ONLY,
    DESKTOP_SM
  );

  // Set drawer open state to false on change of media breakpoint from mobile to "small desktop".
  useEffect(() => {
    if (smDesktop) {
      setDrawerOpen(false);
    }
  }, [smDesktop]);

  return (
    <AppBar elevation={1} position="fixed">
      <Toolbar sx={{ gap: 4, height: HEADER_HEIGHT }} variant="dense">
        {/* Logo */}
        <Logo {...logo} />
        <Content
          desktopSm={smDesktop}
          drawerOpen={drawerOpen}
          onDrawerClose={(): void => setDrawerOpen(false)}
        >
          {/* Slogan divider */}
          {slogan && smDesktop && (
            <Divider orientation="vertical" sx={{ maxHeight: 32 }} />
          )}
          {/* Slogan */}
          {slogan && (
            <Typography
              component="div"
              sx={
                smDesktop
                  ? { fontSize: 12, lineHeight: "18px", maxWidth: 180 }
                  : { px: 6, py: 2 }
              }
              variant={smDesktop ? undefined : "text-body-400"}
            >
              {slogan}
            </Typography>
          )}
          {/* Nav links */}
          <NavLinks
            center={navAlignment === ELEMENT_ALIGNMENT.CENTER}
            links={getHeaderNavigationLinks(navLinks, socials, onlySmDesktop)}
          />
          {/* Socials */}
          {!onlySmDesktop && (
            <Socials
              buttonSize={smDesktop ? "small" : "xlarge"}
              socials={socials}
              sx={{
                gap: smDesktop ? 2 : 4,
                px: smDesktop ? undefined : 4,
                py: smDesktop ? undefined : 2,
              }}
            />
          )}
        </Content>
        {/* Actions */}
        {(searchEnabled || authenticationEnabled || !smDesktop) && (
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flex: { desktopSm: "none", mobile: 1 },
              gap: { desktopSm: 2, mobile: 3 },
              justifyContent: "flex-end",
            }}
          >
            {/* Search */}
            {searchEnabled && <Search />}
            {/* LoginView */}
            {authenticationEnabled && <ProfileComponent />}
            {/* Menu */}
            {!smDesktop && (
              <IconButton
                aria-label="drawer"
                color="ink"
                onClick={(): void => setDrawerOpen((open) => !open)}
              >
                {drawerOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
              </IconButton>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
