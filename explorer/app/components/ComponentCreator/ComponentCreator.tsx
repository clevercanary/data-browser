import { config } from "app/config/config";
import { DetailResponseType } from "app/models/responses";
import React from "react";

interface ComponentCreatorProps {
  detail: DetailResponseType;
}

export const ComponentCreator = ({ detail }: ComponentCreatorProps) => {
  const components = config().detail?.components;

  if (!components) {
    return <></>;
  }

  return components.map((c) => {
    const props = c.transformer ? c.transformer(detail) : c.props;
    return React.createElement(c.component as any, { ...props });
  });
};
