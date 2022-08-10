import { Item, ItemProps } from "./Item";
import { Container } from "./ValueBlock.styles";
import React from "react";

interface ValueBlockProps {
  items: ItemProps[];
}

export const ValueBlock = ({ items }: ValueBlockProps): JSX.Element => {
  return (
    <Container>
      {items.map((item) => (
        <Item key={item.label} {...item} />
      ))}
    </Container>
  );
};
