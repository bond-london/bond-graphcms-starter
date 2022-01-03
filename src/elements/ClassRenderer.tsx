import {
  ClassNodeRendererProps,
  RenderElements,
} from "@bond-london/graphcms-rich-text";
import classNames from "classnames";
import React from "react";

function calculateClassName(className?: string) {
  switch (className) {
    case "central":
      return classNames("laptop:mx-desktop-2-gap-cols my-xs");
  }
}

export interface RTFContext {
  type: string;
}

export const ClassRenderer: React.FC<ClassNodeRendererProps> = (props) => {
  const { className, children } = props;
  if (!className) {
    return <>{children}</>;
  }
  const realClassName = calculateClassName(className);
  if (realClassName) {
    return <div className={realClassName}>{children}</div>;
  }
  const context: RTFContext = { type: className };
  return (
    <RenderElements
      classNameOverrides={props.classNameOverrides}
      index={0}
      renderers={props.renderers}
      context={context}
      removeEmptyElements={props.removeEmptyElements}
      contents={props.contents}
    />
  );
};
