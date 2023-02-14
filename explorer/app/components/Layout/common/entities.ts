import { Social } from "@clevercanary/data-explorer-ui/lib/components/common/Socials/socials";
import { ImageSrc } from "@clevercanary/data-explorer-ui/lib/components/common/StaticImage/staticImage";
import { MenuItem } from "../components/Header/components/NavLinkMenu/navLinkMenu";
import { NavAlignment } from "../components/Header/components/NavLinks/navLinks";

/**
 * Model of footer to be used as props for the Footer component.
 */
export interface Footer {
  feedbackForm?: boolean;
  logos: Logo[];
  navLinks: NavLinkItem[];
  socials: Social[];
}

/**
 * Model of header to be used as props for the Header component.
 */
export interface Header {
  authenticationEnabled?: boolean;
  logo: Logo;
  navAlignment: NavAlignment;
  navLinks: NavLinkItem[];
  searchEnabled?: boolean;
  slogan?: string;
  socials: Social[];
}

/**
 * Model of logo to be used as props for the Header and Footer component.
 */
export interface Logo {
  alt: string;
  height?: number;
  link: string;
  src: ImageSrc;
  width?: number;
}

/**
 * Model of nav link item to be use as props for the Header and Footer component.
 */
export interface NavLinkItem {
  label: string;
  menuItems?: MenuItem[];
  url: string;
}
