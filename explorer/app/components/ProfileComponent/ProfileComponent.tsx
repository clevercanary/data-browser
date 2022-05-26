import React from "react";
import { StyledButton } from "./ProfileComponent.styles";
import LoginIcon from "@mui/icons-material/Login";

export const ProfileComponent: React.FC = () => {
  return <StyledButton startIcon={<LoginIcon />}>Sign in</StyledButton>;
};
