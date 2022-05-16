import React from "react";
import { Logo } from "../Logo";
import { NavLinks } from "../NavLinks";
import { ProfileComponent } from "../ProfileComponent";
import { Search } from "../Search";
import { SocialLinks, SocialType } from "../SocialLinks";

interface HeaderProps {
  logo: {
    url: string;
    height: number;
    width: number;
  };
  slogan?: string;
  navLinks: {
    label: string;
    url: string;
  }[];
  socialLinks: {
    type: SocialType;
    url: string;
  }[];
  navAlignment: "left" | "center";
  searchEnabled?: boolean;
  authenticationEnabled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navAlignment,
  navLinks,
  authenticationEnabled,
  searchEnabled,
  slogan,
  socialLinks,
}: HeaderProps) => {
  return (
    //FIXME: these styles will change after we start using @Emotion
    <header style={{ display: "flex", alignItems: "center" }}>
      <Logo {...logo} slogan={slogan} />
      <NavLinks links={navLinks} />
      <SocialLinks links={socialLinks} />
      {searchEnabled && <Search />}
      {authenticationEnabled && <ProfileComponent />}
    </header>
  );
};
