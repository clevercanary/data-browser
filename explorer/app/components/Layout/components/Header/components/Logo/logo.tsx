import { StaticImage } from "@clevercanary/data-explorer-ui/lib/components/common/StaticImage/staticImage";
import Link from "next/link";
import React from "react";
import { Logo as LogoProps } from "../../../../common/entities";

interface Props {
  logo: LogoProps;
}

export const Logo = ({ logo }: Props): JSX.Element => {
  const { alt, height, link, src, width } = logo;
  return (
    <Link href={link} passHref>
      <a href="passHref">
        <StaticImage alt={alt} height={height} src={src} width={width} />
      </a>
    </Link>
  );
};
