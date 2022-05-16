import Link from "next/link";
import React from "react";

export type SocialType = "twitter" | "github" | "youtube" | "slack";

interface SocialLinksProps {
  links: {
    type: SocialType;
    url: string;
  }[];
}

const ICONS: { [K in SocialType]: string } = {
  github: "G",
  slack: "S",
  twitter: "T",
  youtube: "Y",
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
}: SocialLinksProps) => {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.type} href={link.url}>
          <a>{ICONS[link.type]}</a>
        </Link>
      ))}
    </div>
  );
};
