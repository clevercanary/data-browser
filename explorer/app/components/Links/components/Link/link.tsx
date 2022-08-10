// Core dependencies
import { LinkProps, Link as MLink } from "@mui/material";
import React, { ReactNode } from "react";
import NLink from "next/link";

// App dependencies
import { CopyToClipboard } from "../../../common/CopyToClipboard/copyToClipboard";

export enum ANCHOR_TARGET {
  BLANK = "_blank",
  SELF = "_self",
}

interface Props {
  copyable?: boolean;
  label: ReactNode /* link label may be an element */;
  noWrap?: LinkProps["noWrap"];
  target?: ANCHOR_TARGET;
  url: string;
}

export const Link = ({
  copyable = false,
  label,
  noWrap = false,
  target = ANCHOR_TARGET.SELF,
  url,
}: Props): JSX.Element => {
  return (
    <>
      <NLink href={url} passHref>
        <MLink rel="noopener" noWrap={noWrap} target={target}>
          {label}
        </MLink>
      </NLink>
      {copyable && <CopyToClipboard copyStr={url} />}
    </>
  );
};
