import { Typography } from "@mui/material";
import React from "react";
import { LogoProps } from "../Logo/Logo";
import { NavLinksProps, NavLinks } from "../NavLinks/NavLinks";
import { SocialLinksProps, SocialLinks } from "../SocialLinks/SocialLinks";
import {
  DrawerContainer,
  SloganDrawerContainer,
  SocialDrawerContainer,
} from "./Header.styles";

interface DrawerContentProps {
  logo: LogoProps;
  navLinks: NavLinksProps;
  socialLinks: SocialLinksProps;
}

export const DrawerContent = ({
  logo,
  navLinks,
  socialLinks,
}: DrawerContentProps) => {
  return (
    <DrawerContainer>
      {logo.slogan && (
        <SloganDrawerContainer>
          <Typography variant="textBody400" component="span">
            {logo.slogan}
          </Typography>
        </SloganDrawerContainer>
      )}
      <NavLinks {...navLinks} />
      <SocialDrawerContainer>
        <SocialLinks {...socialLinks} />
      </SocialDrawerContainer>
    </DrawerContainer>
  );
};
