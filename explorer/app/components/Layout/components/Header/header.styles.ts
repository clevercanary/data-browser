import { AppBar } from "@mui/material";
import styled from "@emotion/styled";

export const Header = styled(AppBar)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.smoke.main};
`;
