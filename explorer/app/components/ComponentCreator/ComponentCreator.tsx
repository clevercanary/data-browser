import { ComponentObject } from "app/config/model";
import { DetailResponseType } from "app/models/responses";
import React from "react";

interface ComponentCreatorProps {
  components: ComponentObject[];
  detail: DetailResponseType;
}

export const ComponentCreator = ({
  components,
  detail,
}: ComponentCreatorProps): JSX.Element => {
  return (
    <>
      {components.map((c) => {
        const children = c.children ? (
          <ComponentCreator components={c.children} detail={detail} />
        ) : null;
        const props = c.transformer ? c.transformer(detail) : c.props;
        return React.createElement(c.component, { ...props }, children);
      })}
    </>
  );
};
