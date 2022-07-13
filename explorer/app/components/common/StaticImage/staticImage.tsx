/* eslint-disable @next/next/no-img-element -- allow static images for logos etc. */
/**
 * This component should be used only for images from the /images folder, and the URL should be
 * a relative path from /images.
 * These images will be optimized at the build time by next-optimized-images
 */
// Core dependencies
import React from "react";

export type ImageSrc = string | undefined;

export interface StaticImageProps {
  alt: string;
  height?: number;
  src: ImageSrc;
  width?: number;
}

export const StaticImage = ({
  alt,
  height,
  src,
  width,
}: StaticImageProps): JSX.Element => {
  return <img alt={alt} height={height} src={src} width={width} />;
};
/* eslint-enable @next/next/no-img-element -- allow static images for logos etc. */
