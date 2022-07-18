// Core dependencies
import { Checkbox, FormControlLabel, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

// App dependencies
import { DropdownButton } from "../common/Button/components/DropdownButton/dropdownButton";

export interface CheckboxMenuItem {
  id: string;
  label: string;
}

interface CheckboxMenuProps {
  options: CheckboxMenuItem[];
  selected: string[];
  readOnly?: string[];
  onItemSelectionChange: (id: string) => void;
  label: string;
}

export const CheckboxMenu = ({
  onItemSelectionChange,
  options,
  selected,
  label,
  readOnly = [],
}: CheckboxMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <DropdownButton onClick={handleClick}>{label}</DropdownButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option.id} disableRipple>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected.includes(option.id)}
                  disabled={readOnly.includes(option.id)}
                  onChange={(): void => onItemSelectionChange(option.id)}
                />
              }
              label={option.label}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
