import { ComponentConfig } from "app/config/model";
import React from "react";
import { v4 as uuid4 } from "uuid";

interface ComponentCreatorProps<T> {
  components: ComponentConfig[];
  response: T;
}

/**
 * ComponentCreator uses React API to create components based on the component configs, instead of using JSX.
 * That way we can continue to create UI components without having to worry about if they should be able to transform model data into props.
 * This component is also responsible to call any necessary transformers to generate the component's props based on the model T.
 * @returns A set of react components
 */
export const ComponentCreator = <T,>({
  components,
  response,
}: ComponentCreatorProps<T>): JSX.Element => {
  return (
    <>
      {components.map((c) => {
        const children = c.children ? (
          <ComponentCreator
            key={uuid4()}
            components={c.children}
            response={response}
          />
        ) : null;
        const props = c.transformer ? c.transformer(response) : {};
        return React.createElement(
          c.component,
          { ...c.props, ...props, key: uuid4() },
          [children ?? props.children]
        );
      })}
    </>
  );
};