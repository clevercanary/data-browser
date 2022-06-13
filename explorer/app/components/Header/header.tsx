// Core dependencies
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";

// App dependencies
import { ELEMENT_ALIGNMENT } from "../../common/entities";
import { DrawerContent } from "./drawerContent";
import { Logo, LogoProps } from "../Logo/logo";
import { NavAlignment, NavLinks, NavLinksProps } from "../NavLinks/navLinks";
import { ProfileComponent } from "../ProfileComponent/ProfileComponent";
import { Search } from "../Search/Search";
import { SocialLinks, SocialLinksProps } from "../SocialLinks/socialLinks";

// Template variables
export const HEADER_HEIGHT = 56;

export interface HeaderProps {
  authenticationEnabled?: boolean;
  logo: LogoProps;
  navAlignment: NavAlignment;
  navLinks: NavLinksProps;
  searchEnabled?: boolean;
  slogan?: string;
  socialLinks: SocialLinksProps;
}

export const Header = ({
  authenticationEnabled,
  logo,
  navAlignment,
  navLinks,
  searchEnabled,
  slogan,
  socialLinks,
}: HeaderProps): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const desktopOnly = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  // Set drawer open state to false on change of media breakpoint from mobile to desktop.
  useEffect(() => {
    if (desktopOnly) {
      setDrawerOpen(false);
    }
  }, [desktopOnly]);

  return (
    <AppBar sx={{ borderBottom: 1, borderColor: "smoke" }}>
      <Toolbar sx={{ gap: 4, height: HEADER_HEIGHT }} variant="dense">
        {/* TODO(cc) review props and corresponding interface */}
        <Logo {...logo} />
        {slogan && desktopOnly && (
          <>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "smoke", maxHeight: 32 }}
            />
            <Typography
              component="span"
              color="ink"
              fontSize={12}
              letterSpacing="normal"
              lineHeight="18px"
              sx={{ maxWidth: 180 }}
            >
              {slogan}
            </Typography>
          </>
        )}
        {desktopOnly && (
          <>
            <NavLinks
              center={navAlignment === ELEMENT_ALIGNMENT.CENTER}
              links={navLinks.links}
            />
            <SocialLinks
              buttonColor="inkLight"
              buttonSize="small"
              sx={{ gap: 2 }}
              {...socialLinks}
            />
          </>
        )}
        {(searchEnabled || authenticationEnabled || !desktopOnly) && (
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flex: { xs: 1, lg: "none" },
              gap: { xs: 3, lg: 2 },
              justifyContent: "flex-end",
            }}
          >
            {searchEnabled && <Search />}
            {authenticationEnabled && <ProfileComponent />}
            {!desktopOnly && (
              <IconButton
                aria-label="drawer"
                color="ink"
                onClick={() => setDrawerOpen((open) => !open)}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Box>
        )}
      </Toolbar>
      <Drawer
        hideBackdrop
        ModalProps={{ sx: { top: `${HEADER_HEIGHT}px` } }}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        PaperProps={{
          elevation: 0,
          sx: { marginTop: HEADER_HEIGHT / 4, width: "100%" },
        }}
        variant="temporary"
      >
        <DrawerContent
          navLinks={navLinks}
          slogan={slogan}
          socialLinks={socialLinks}
        />
      </Drawer>
    </AppBar>
  );
};
