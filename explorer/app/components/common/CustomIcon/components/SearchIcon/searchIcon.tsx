/**
 * Custom search icon.
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

interface Props extends SvgIconProps {
  fontSize?: SvgIconProps["fontSize"];
  viewBox?: string;
}

export const SearchIcon = ({
  fontSize = "xsmall",
  viewBox = "0 0 20 20",
  ...props /* Spread props to allow for svg icon specific props SvgIconProps e.g. "htmlColor". */
}: Props): JSX.Element => {
  return (
    <SvgIcon fontSize={fontSize} viewBox={viewBox} {...props}>
      <path
        d="M15.8599 17.0728L11.2969 12.5098C10.8389 12.8571 10.3422 13.1178 9.80688 13.2918C9.27221 13.4651 8.71321 13.5518 8.12988 13.5518C6.61654 13.5518 5.32854 13.0274 4.26587 11.9788C3.20321 10.9301 2.67188 9.64876 2.67188 8.13476C2.67188 6.62142 3.20321 5.33342 4.26587 4.27076C5.32854 3.20809 6.61654 2.67676 8.12988 2.67676C9.64388 2.67676 10.9252 3.20809 11.9739 4.27076C13.0225 5.33342 13.5469 6.62142 13.5469 8.13476C13.5469 8.71809 13.4635 9.27709 13.2969 9.81176C13.1302 10.3471 12.8662 10.8368 12.5049 11.2808L17.0889 15.8848C17.2555 16.0514 17.3352 16.2494 17.3279 16.4788C17.3212 16.7081 17.2345 16.9061 17.0679 17.0728C16.9012 17.2394 16.6999 17.3228 16.4639 17.3228C16.2279 17.3228 16.0265 17.2394 15.8599 17.0728ZM8.12988 11.8018C9.14388 11.8018 10.0085 11.4441 10.7239 10.7288C11.4392 10.0134 11.7969 9.14876 11.7969 8.13476C11.7969 7.10742 11.4425 6.23242 10.7339 5.50976C10.0259 4.78776 9.15788 4.42676 8.12988 4.42676C7.10254 4.42676 6.22754 4.78776 5.50488 5.50976C4.78288 6.23242 4.42188 7.10742 4.42188 8.13476C4.42188 9.16276 4.78288 10.0308 5.50488 10.7388C6.22754 11.4474 7.10254 11.8018 8.12988 11.8018Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
