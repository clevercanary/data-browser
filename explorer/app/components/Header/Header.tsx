import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Logo, LogoProps } from "../Logo";
import { NavLinks, NavLinksProps } from "../NavLinks";
import { ProfileComponent } from "../ProfileComponent";
import { Search } from "../Search";
import { SocialLinks, SocialLinksProps } from "../SocialLinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  LinksContainer,
  Header as StyledHeader,
  LinksContent,
  SocialLinksContainer,
  MenuButton,
  MobileContainer,
  DesktopContainer,
  MenuContainer,
} from "./Header.styles";
import { DrawerContent } from "./DrawerContent";

export interface HeaderProps {
  logo: LogoProps;
  navLinks: NavLinksProps;
  socialLinks: SocialLinksProps;
  navAlignment: "left" | "center";
  searchEnabled?: boolean;
  authenticationEnabled?: boolean;
  drawerContainer?: Element | null;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navAlignment,
  navLinks,
  authenticationEnabled,
  searchEnabled,
  socialLinks,
  drawerContainer,
}: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen((s) => !s);
  };

  const renderMenuContent = () => (
    <>
      {searchEnabled && (
        <MenuButton>
          <Search />
        </MenuButton>
      )}
      {authenticationEnabled && (
        <MenuButton>
          <ProfileComponent />
        </MenuButton>
      )}
    </>
  );

  return (
    <Container>
      <StyledHeader>
        <Logo {...logo} />
        <DesktopContainer>
          <LinksContainer center={navAlignment === "center"}>
            <LinksContent>
              <NavLinks {...navLinks} />
            </LinksContent>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLinks {...socialLinks} />
          </SocialLinksContainer>
          <MenuContainer>{renderMenuContent()}</MenuContainer>
        </DesktopContainer>
      </StyledHeader>
      <MobileContainer>
        {renderMenuContent()}
        <MenuButton>
          <IconButton aria-label="open drawer" onClick={handleToggleDrawer}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </MenuButton>

        <Drawer
          variant="temporary"
          container={drawerContainer}
          ModalProps={{ keepMounted: true }}
          open={drawerOpen}
          style={{ position: "absolute" }}
          onClose={handleToggleDrawer}
          hideBackdrop
          PaperProps={{
            style: {
              position: "absolute",
              width: "100%",
            },
          }}
        >
          <DrawerContent
            navLinks={navLinks}
            logo={logo}
            socialLinks={socialLinks}
          />
        </Drawer>
      </MobileContainer>
    </Container>
  );
};
