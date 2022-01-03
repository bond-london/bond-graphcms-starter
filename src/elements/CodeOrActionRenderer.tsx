import { ElementsRendererProps } from "@bond-london/graphcms-rich-text";
import { isText } from "@graphcms/rich-text-types";
import React from "react";
import { Actions } from "../actions";

export const CodeOrActionRenderer: React.FC<ElementsRendererProps> = (
  props
) => {
  const { contents } = props;
  if (contents?.length === 1 && isText(contents[0])) {
    const childrenString = contents[0].text;
    if (
      childrenString.length > 4 &&
      childrenString.startsWith("##") &&
      childrenString.endsWith("##")
    ) {
      const actionName = childrenString.substring(2, childrenString.length - 2);
      return <Actions name={actionName} />;
    }
  }
  return <code>{props.children}</code>;
};
