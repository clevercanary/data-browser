// TODO replace Item component with Link from explorer/app/components/Links/components/Link/link.tsx
import { Box } from "@mui/material";
import { Item } from "./Item";
import React from "react";

interface LinksProps {
  enumerate?: boolean;
  links: { label: string; url: string }[];
  showCopyButton?: boolean;
}

export const Links = ({
  enumerate,
  links,
  showCopyButton,
}: LinksProps): JSX.Element => {
  return (
    <Box>
      {links.map((link, index) => {
        return (
          <Item
            key={link.url}
            link={link}
            number={enumerate ? index + 1 : undefined}
            showCopyButton={showCopyButton}
          />
        );
      })}
    </Box>
  );
};
