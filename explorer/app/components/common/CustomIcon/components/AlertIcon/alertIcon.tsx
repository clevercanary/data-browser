/**
 * Custom alert icon.
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

interface Props {
  fontSize?: SvgIconProps["fontSize"];
  viewBox?: string;
}

export const AlertIcon = ({
  fontSize = "xsmall",
  viewBox = "0 0 18 18",
  ...props /* Spread props to allow for svg icon specific props SvgIconProps e.g. "htmlColor". */
}: Props): JSX.Element => {
  return (
    <SvgIcon fontSize={fontSize} viewBox={viewBox} {...props}>
      <path
        d="M9.01899 9.8439C9.20649 9.8439 9.35949 9.7845 9.47799 9.6657C9.59679 9.5469 9.65619 9.40005 9.65619 9.22515V6.65655C9.65619 6.48135 9.59379 6.3345 9.46899 6.216C9.34389 6.0972 9.19389 6.0378 9.01899 6.0378C8.84379 6.0378 8.69679 6.0972 8.57799 6.216C8.45949 6.3345 8.40024 6.48135 8.40024 6.65655V9.22515C8.40024 9.40005 8.45949 9.5469 8.57799 9.6657C8.69679 9.7845 8.84379 9.8439 9.01899 9.8439ZM9.00009 12.6375C9.18759 12.6375 9.35004 12.5688 9.48744 12.4314C9.62514 12.294 9.69399 12.1316 9.69399 11.9441C9.69399 11.7566 9.62514 11.5971 9.48744 11.4657C9.35004 11.3346 9.18759 11.2691 9.00009 11.2691C8.81259 11.2691 8.65014 11.3346 8.51274 11.4657C8.37504 11.5971 8.30619 11.7566 8.30619 11.9441C8.30619 12.1316 8.37504 12.294 8.51274 12.4314C8.65014 12.5688 8.81259 12.6375 9.00009 12.6375ZM4.25619 16.5003C3.91869 16.5003 3.62499 16.3752 3.37509 16.125C3.12519 15.8751 3.00024 15.5814 3.00024 15.2439V6.50625C3.00024 6.33135 3.03459 6.1689 3.10329 6.0189C3.17199 5.8689 3.26259 5.73765 3.37509 5.62515L7.12494 1.8753C7.23744 1.7628 7.36869 1.6722 7.51869 1.6035C7.66869 1.5345 7.83129 1.5 8.00649 1.5H13.744C14.0815 1.5 14.3752 1.6251 14.6251 1.8753C14.875 2.1252 14.9999 2.4189 14.9999 2.7564V15.2439C14.9999 15.5814 14.875 15.8751 14.6251 16.125C14.3752 16.3752 14.0815 16.5003 13.744 16.5003H4.25619ZM4.25619 15.2439H13.744V2.7564H8.04384L4.25619 6.54405V15.2439Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};