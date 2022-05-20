/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @next/next/no-img-element */

/**
 * This component should be used only for images from the /images folder. And the url should be
 * a relative path from /images
 * These images will be optimized at the build time by next-optimized-images
 */
import React from "react";

export interface StaticImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}

export const StaticImage: React.FC<StaticImageProps> = ({
  src,
  width,
  height,
  alt,
}) => {
  return (
    <img
      src={require(`../../../images/${src}`).default}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
