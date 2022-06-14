// Core dependencies
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

// App dependencies
import { StaticImage } from "../../../StaticImage/StaticImage";

export interface LogoProps {
  alt: string;
  height?: number;
  imgSrc: StaticImageData;
  link: string;
  width?: number;
}

export const Logo = ({
  alt,
  height,
  imgSrc,
  link,
  width,
}: LogoProps): JSX.Element => {
  return (
    <>
      <Link href={link} passHref>
        <a href="passHref">
          <StaticImage alt={alt} height={height} src={imgSrc} width={width} />
        </a>
      </Link>
    </>
  );
};
