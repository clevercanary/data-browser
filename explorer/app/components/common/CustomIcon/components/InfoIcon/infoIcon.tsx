/**
 * Custom info icon.
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

interface Props {
  fontSize?: SvgIconProps["fontSize"];
  viewBox?: string;
}

export const InfoIcon = ({
  fontSize = "xsmall",
  viewBox = "0 0 18 18",
  ...props /* Spread props to allow for svg icon specific props SvgIconProps e.g. "htmlColor". */
}: Props): JSX.Element => {
  return (
    <SvgIcon fontSize={fontSize} viewBox={viewBox} {...props}>
      <path
        d="M8.9997 12.75C9.2121 12.75 9.3966 12.6717 9.5532 12.5151C9.7092 12.3591 9.7872 12.1749 9.7872 11.9625V9.0186C9.7872 8.8062 9.7092 8.625 9.5532 8.475C9.3966 8.325 9.2121 8.25 8.9997 8.25C8.7873 8.25 8.6028 8.328 8.4462 8.484C8.2902 8.6406 8.2122 8.8251 8.2122 9.0375V11.9805C8.2122 12.1935 8.2902 12.375 8.4462 12.525C8.6028 12.675 8.7873 12.75 8.9997 12.75ZM8.9997 6.7308C9.2121 6.7308 9.3966 6.6528 9.5532 6.4968C9.7092 6.3402 9.7872 6.1557 9.7872 5.9433C9.7872 5.7309 9.7092 5.5467 9.5532 5.3907C9.3966 5.2341 9.2121 5.1558 8.9997 5.1558C8.7873 5.1558 8.6028 5.2341 8.4462 5.3907C8.2902 5.5467 8.2122 5.7309 8.2122 5.9433C8.2122 6.1557 8.2902 6.3402 8.4462 6.4968C8.6028 6.6528 8.7873 6.7308 8.9997 6.7308ZM8.9997 16.4994C7.9623 16.4994 6.9873 16.3026 6.0747 15.909C5.1621 15.5154 4.3683 14.9811 3.6933 14.3061C3.0183 13.6311 2.484 12.8373 2.0904 11.9247C1.6968 11.0121 1.5 10.0371 1.5 8.9997C1.5 7.9623 1.6968 6.9873 2.0904 6.0747C2.484 5.1621 3.0183 4.3683 3.6933 3.6933C4.3683 3.0183 5.1621 2.484 6.0747 2.0904C6.9873 1.6968 7.9623 1.5 8.9997 1.5C10.0371 1.5 11.0121 1.6968 11.9247 2.0904C12.8373 2.484 13.6311 3.0183 14.3061 3.6933C14.9811 4.3683 15.5154 5.1621 15.909 6.0747C16.3026 6.9873 16.4994 7.9623 16.4994 8.9997C16.4994 10.0371 16.3026 11.0121 15.909 11.9247C15.5154 12.8373 14.9811 13.6311 14.3061 14.3061C13.6311 14.9811 12.8373 15.5154 11.9247 15.909C11.0121 16.3026 10.0371 16.4994 8.9997 16.4994Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
