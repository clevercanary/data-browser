// Core dependencies
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

// App dependencies
import { StaticImage } from "../StaticImage/StaticImage";

export interface LogoProps {
  alt: string;
  height?: number;
  url: StaticImageData;
  width?: number;
}

export const Logo = ({ alt, height, url, width }: LogoProps): JSX.Element => {
  return (
    <>
      {/* TODO(cc) configure logo href */}
      <Link href="/" passHref>
        <a href="passHref">
          <StaticImage alt={alt} height={height} src={url} width={width} />
        </a>
      </Link>
    </>
  );
};
