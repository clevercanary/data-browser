import { Typography } from "@mui/material";
import React from "react";

interface Props {
  conditionsUrl: string;
  privacyUrl: string;
}

export const LoginNotice = ({
  conditionsUrl,
  privacyUrl,
}: Props): JSX.Element => {
  return (
    <Typography color="ink.light" variant="text-body-small-400">
      By loging in, you agree to <a href={privacyUrl}>privacy notice</a> and{" "}
      <a href={conditionsUrl}>condition of use</a>
    </Typography>
  );
};
