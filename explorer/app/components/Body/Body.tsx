import React from "react";

interface BodyProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Body = ({ children }: BodyProps): JSX.Element => {
  return <div>{children}</div>;
};
