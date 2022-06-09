/**
 * Page component will hold page's structure, header, content and footer.
 * Header and Footer will be configurable through props.
 */

import { useConfig } from "app/hooks/useConfig";
import React from "react";
import { Body } from "../Body/Body";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, Content } from "./Page.styles";

interface PageProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Page = ({ children }: PageProps): JSX.Element => {
  const config = useConfig();

  return (
    <Container>
      <Header {...config.layout.header} />
      <Content>
        <Body>{children}</Body>
        <Footer>Footer</Footer>
      </Content>
    </Container>
  );
};
