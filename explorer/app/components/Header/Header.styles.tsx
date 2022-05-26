import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1, 2, 2)};
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.07);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

interface LinksContainerProps {
  center: boolean;
}

export const LinksContainer = styled.div<LinksContainerProps>`
  flex-grow: 1;
  display: flex;
  margin-left: ${({ theme, center }) => theme.spacing(center ? 0 : 5)};
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
`;

export const LinksContent = styled.div``;

export const SocialLinksContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

export const SearchContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;
