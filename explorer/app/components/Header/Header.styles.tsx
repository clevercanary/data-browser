import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const hideOnMobile = ({ theme }: { theme: Theme }) => css`
  ${theme.breakpoints.down("lg")} {
    ${css`
      display: none;
    `.styles}
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: ${({ theme }) => theme.spacing(3, 0, 3, 4)};
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface LinksContainerProps {
  center: boolean;
}

export const LinksContainer = styled.div<LinksContainerProps>`
  flex-grow: 1;
  display: flex;
  margin-left: ${({ theme, center }) => theme.spacing(center ? 0 : 9)};
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  ${hideOnMobile}
`;

export const LinksContent = styled.div``;

export const SocialLinksContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing(8)};
  ${hideOnMobile}
`;

export const MenuButton = styled.div`
  margin-right: ${({ theme }) => theme.spacing(4)};
  white-space: nowrap;
`;

export const MenuContainer = styled.div`
  display: flex;
  ${hideOnMobile}
`;

export const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MobileContainer = styled.div`
  display: none;

  ${({ theme }) => `
    ${theme.breakpoints.down("lg")} {
      ${
        css`
          display: flex;
        `.styles
      }
    }
  `}
`;

export const DrawerContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6, 2)};
`;

export const SocialDrawerContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(8)};
`;

export const SloganDrawerContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(0, 4, 3, 4)};
`;
