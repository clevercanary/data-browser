import Link from "next/link";
import React from "react";
import { Discourse, GitHub, Slack, Twitter, YouTube } from "./icons";
import { Container } from "./SocialLinks.styles";

export type SocialType =
  | "twitter"
  | "github"
  | "youtube"
  | "slack"
  | "discourse";

interface SocialLinkItem {
  type: SocialType;
  url: string;
}

export interface SocialLinksProps {
  links: SocialLinkItem[];
}

const ICONS: { [K in SocialType]: React.ReactNode } = {
  github: <GitHub />,
  slack: <Slack />,
  twitter: <Twitter />,
  youtube: <YouTube />,
  discourse: <Discourse />,
};

export const SocialLinks = ({ links }: SocialLinksProps): JSX.Element => {
  return (
    <Container>
      {links.map((link) => (
        <Link key={link.type} href={link.url}>
          <a>{ICONS[link.type]}</a>
        </Link>
      ))}
    </Container>
  );
};
