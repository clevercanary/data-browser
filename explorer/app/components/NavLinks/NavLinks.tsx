import Link from "next/link";
import React from "react";

interface NavLinksProps {
  links: {
    label: string;
    url: string;
  }[];
}

export const NavLinks: React.FC<NavLinksProps> = ({ links }: NavLinksProps) => {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.url} href={link.url}>
          <a>{link.label}</a>
        </Link>
      ))}
    </div>
  );
};
