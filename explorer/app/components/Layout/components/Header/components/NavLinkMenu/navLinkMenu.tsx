import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import React, { MouseEvent, ReactNode, useState } from "react";
import { NavLinkMenu as Menu } from "./navLinkMenu.styles";

export interface MenuItem {
  icon?: ReactNode;
  label: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
}

export const NavLinkMenu = ({ menuItems }: Props): JSX.Element => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const onOpenMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <button onClick={onOpenMenu}>Menu</button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        onClose={onCloseMenu}
        open={open}
        PaperProps={{ variant: "menu" }}
        transformOrigin={{
          horizontal: "left",
          vertical: "top",
        }}
      >
        {menuItems.map(({ icon, label, url }) => (
          <MenuItem
            key={label}
            onClick={(): void => {
              setAnchorEl(null);
              router.push(url);
            }}
          >
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primaryTypographyProps={{ variant: "text-body-400" }}>
              {label}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
