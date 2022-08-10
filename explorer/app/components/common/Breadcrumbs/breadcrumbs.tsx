// Core dependencies
import {
  Link as BreadcrumbLink,
  Breadcrumbs as MBreadcrumbs,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "next/link";

export interface Breadcrumb {
  path: string;
  text: string;
}

interface Props {
  breadcrumbs: Breadcrumb[];
  Separator?: ReactNode;
}

export const Breadcrumbs = ({
  breadcrumbs,
  Separator = <ChevronRightRoundedIcon fontSize="xxsmall" />,
}: Props): JSX.Element => {
  return (
    <>
      {breadcrumbs.length > 0 ? (
        <MBreadcrumbs separator={Separator}>
          {breadcrumbs.map(({ path, text }, b) =>
            path ? (
              <Link key={`${path}${b}`} href={path} passHref>
                <BreadcrumbLink>{text}</BreadcrumbLink>
              </Link>
            ) : (
              <Typography key={`${path}${b}`} maxWidth={180} noWrap>
                {text}
              </Typography>
            )
          )}
        </MBreadcrumbs>
      ) : null}
    </>
  );
};
