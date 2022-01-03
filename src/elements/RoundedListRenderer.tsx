import {
  ElementsRendererProps,
  RenderElements,
} from "@bond-london/graphcms-rich-text";
import classNames from "classnames";
import React from "react";

export const RoundedListRenderer: React.FC<ElementsRendererProps> = (props) => {
  return (
    <ol
      className={classNames(
        "col-start-1 col-span-4 mt-s",
        "tablet:col-start-5 tablet:col-span-3 tablet:mt-0",
        "laptop:col-start-8 laptop:col-span-5",
        "space-y-xs",
        "flex flex-col justify-between"
      )}
    >
      <RenderElements {...props} />
    </ol>
  );
};

export const RoundedListElementRenderer: React.FC<ElementsRendererProps> = (
  props
) => {
  const index = props.index;
  return (
    <li className={classNames("px-s py-xs bg-white rounded-normal flex")}>
      <div className="mt-icon flex-shrink-0 h-xs w-xs rounded-button bg-green flex justify-center items-center">
        <p className="p3 tabular-nums">{index + 1}</p>
      </div>
      <div className="ml-xs h3">
        <RenderElements {...props} />
      </div>
    </li>
  );
};
