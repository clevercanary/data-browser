// Core dependencies
import React from "react";
import NextHead from "next/head";
import { useConfig } from "app/hooks/useConfig";
import { useRouter } from "next/router";

export const Head = (): JSX.Element => {
  const config = useConfig();
  const router = useRouter();
  const layout = config.layout;
  const icons = layout.favIcons;

  const renderIcons = (): JSX.Element => {
    return (
      <>
        {icons?.default && (
          <link
            rel="icon"
            type="image/x-icon"
            href={`${router.basePath}${icons.default}`}
          />
        )}
        {icons?.["16x16"] && (
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${router.basePath}${icons["16x16"]}`}
          />
        )}
        {icons?.["32x32"] && (
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${router.basePath}${icons["32x32"]}`}
          />
        )}
        {icons?.["180x180"] && (
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href={`${router.basePath}${icons["180x180"]}`}
          />
        )}
        {icons?.maskIcon && (
          <link rel="mask-icon" href={`${router.basePath}${icons.maskIcon}`} />
        )}
        {icons?.siteWebManifest && (
          <link
            rel="manifest"
            href={`${router.basePath}${icons.siteWebManifest}`}
          />
        )}
      </>
    );
  };

  return (
    <NextHead key="page-head">
      <title>{layout.header.logo.alt}</title>
      {renderIcons()}
    </NextHead>
  );
};
