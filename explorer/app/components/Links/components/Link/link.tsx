// Core dependencies
import { Link as MLink } from "@mui/material";
import NLink from "next/link";
import React, { ReactNode } from "react";

// App dependencies
import { CopyToClipboard } from "../../../common/CopyToClipboard/copyToClipboard";

export enum ANCHOR_TARGET {
  BLANK = "_blank",
  SELF = "_self",
}

interface Props {
  copyable?: boolean;
  label: ReactNode /* link label may be an element */;
  target?: ANCHOR_TARGET;
  url: string;
}

export const Link = ({
  copyable = false,
  label,
  target = ANCHOR_TARGET.SELF,
  url,
}: Props): JSX.Element => {
  return (
    <>
      <NLink href={url} passHref>
        <MLink rel="noopener" target={target}>
          {label}
        </MLink>
      </NLink>
      {copyable && <CopyToClipboard copyStr={url} />}
    </>
  );
};