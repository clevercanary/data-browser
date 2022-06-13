/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

/**
 * This component should be used only for images from the /images folder. And the url should be
 * a relative path from /images
 * These images will be optimized at the build time by next-optimized-images
 */
// Core dependencies
import { StaticImageData } from "next/image";
import React from "react";

export interface StaticImageProps {
  alt: string;
  height?: number;
  src: StaticImageData;
  width?: number;
}

export const StaticImage = ({
  alt,
  height,
  src,
  width,
}: StaticImageProps): JSX.Element => {
  return <img alt={alt} height={height} src={src as any} width={width} />;
};
