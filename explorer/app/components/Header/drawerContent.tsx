// Core dependencies
import { Box, Typography } from "@mui/material";
import React from "react";

// App dependencies
import { NavLinksProps, NavLinks } from "../NavLinks/navLinks";
import { SocialLinksProps, SocialLinks } from "../SocialLinks/socialLinks";

interface Props {
  navLinks: NavLinksProps;
  slogan?: string;
  socialLinks: SocialLinksProps;
}

export const DrawerContent = ({
  navLinks,
  slogan,
  socialLinks,
}: Props): JSX.Element => {
  return (
    <Box display="grid" gap={2} py={4}>
      {slogan && (
        <Typography
          component="div"
          color="ink"
          px={6}
          py={2}
          variant="text-body-400"
        >
          {slogan}
        </Typography>
      )}
      <NavLinks {...navLinks} />
      <SocialLinks
        buttonColor="inkLight"
        buttonSize="xlarge"
        sx={{ gap: 4, px: 4, py: 2 }}
        {...socialLinks}
      />
    </Box>
  );
};
