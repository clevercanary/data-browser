/**
 * Page component will hold page's structure, header, content and footer.
 * Header and Footer will be configurable through props.
 */

import React, { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import { Body } from "../Body";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, Content } from "./Page.styles";

interface PageProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Page = ({ children }: PageProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawerContainer, setDrawerContainer] =
    useState<HTMLDivElement | null>();

  useEffect(() => {
    setDrawerContainer(drawerRef.current);
  }, []);

  return (
    <Container>
      <Header {...config().layout.header} drawerContainer={drawerContainer} />
      <Content ref={drawerRef}>
        <Body>{children}</Body>
        <Footer>Footer</Footer>
      </Content>
    </Container>
  );
};
