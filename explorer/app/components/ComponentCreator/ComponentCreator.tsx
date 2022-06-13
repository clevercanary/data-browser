import { ComponentObject } from "app/config/model";
import { DetailResponseType } from "app/models/responses";
import React from "react";

interface ComponentCreatorProps {
  components: ComponentObject[];
  detail: DetailResponseType;
  deep?: number;
}

export const ComponentCreator = ({
  components,
  detail,
  deep = 0,
}: ComponentCreatorProps): JSX.Element => {
  return (
    <>
      {components.map((c, index) => {
        const children = c.children ? (
          <ComponentCreator
            key={`${deep}${index}`}
            deep={deep + 1}
            components={c.children}
            detail={detail}
          />
        ) : null;
        const props = c.transformer ? c.transformer(detail) : {};
        return React.createElement(
          c.component,
          { ...c.props, ...props, key: index },
          [children ?? props.children]
        );
      })}
    </>
  );
};
