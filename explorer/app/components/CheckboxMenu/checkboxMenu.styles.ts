import { Menu } from "@mui/material";
import styled from "@emotion/styled";

export const CheckboxMenu = styled(Menu)`
  .MuiPaper-menu {
    margin: 8px 0;
  }

  .MuiMenuItem-root.Mui-disabled {
    opacity: 1;
  }
`;
