import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Container } from "./NavLinks.styles";

export interface NavLinkItem {
  label: string;
  url: string;
}

export interface NavLinksProps {
  links: NavLinkItem[];
}

export const NavLinks: React.FC<NavLinksProps> = ({ links }: NavLinksProps) => {
  return (
    <Container>
      {links.map((link) => (
        <Link key={link.url} href={link.url}>
          <Typography component="a" variant="textBody500">
            {link.label}
          </Typography>
        </Link>
      ))}
    </Container>
  );
};
