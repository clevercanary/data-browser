// Core dependencies
import { Box, IconButtonProps, SxProps, Theme } from "@mui/material";
import React, { ElementType } from "react";
import Link from "next/link";

// App dependencies
import { ANCHOR_TARGET } from "../../Links/components/Link/link";
import { CustomIcon } from "../CustomIcon/customIcon";
import { IconName } from "../CustomIcon/common/iconSvgPathShapes";

// Styles
import { IconButtonSocials } from "../IconButton/iconButton.styles";

export interface Social {
  type: IconName;
  url: string;
}

interface Props {
  buttonSize?: IconButtonProps["size"];
  IconButtonElType?: ElementType;
  socials: Social[];
  sx?: SxProps<Theme>;
}

export const Socials = ({
  buttonSize = "medium",
  IconButtonElType = IconButtonSocials,
  socials,
  sx,
}: Props): JSX.Element => {
  return (
    <Box display="flex" sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      {socials.map(({ type, url }) => (
        <Link key={type} href={url} passHref>
          <IconButtonElType
            href="passHref"
            rel="noopener"
            size={buttonSize}
            target={ANCHOR_TARGET.BLANK}
          >
            <CustomIcon fontSize="small" iconName={type} />
          </IconButtonElType>
        </Link>
      ))}
    </Box>
  );
};
