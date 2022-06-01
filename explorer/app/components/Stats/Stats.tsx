import React from "react";
import { Item, ItemProps } from "./Item";
import { Container } from "./Stats.styles";

interface StatsProps {
  items: ItemProps[];
}

export const Stats = ({ items }: StatsProps): JSX.Element => {
  return (
    <Container>
      {items.map((item) => (
        <Item key={item.label} {...item} />
      ))}
    </Container>
  );
};
