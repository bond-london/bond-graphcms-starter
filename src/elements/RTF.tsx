import React from "react";
import { CodeOrActionRenderer } from "./CodeOrActionRenderer";
import classNames from "classnames";
import { TableRenderer } from "./TableRenderer";
import {
  ClassNameOverrides,
  RealRTF,
  NodeRenderer,
  NodeRendererProps,
  RealRTFProps,
  ClassNodeRendererProps,
} from "@bond-london/graphcms-rich-text";
import { ClassRenderer } from "./ClassRenderer";

const projectRenderers: Partial<NodeRenderer> = {
  code_block: (props) => (
    <CodeOrActionRenderer {...(props as unknown as NodeRendererProps)} />
  ),
  table: (props) => (
    <TableRenderer {...(props as unknown as NodeRendererProps)} />
  ),
  class: (props) => (
    <ClassRenderer {...(props as unknown as ClassNodeRendererProps)} />
  ),
};

const projectClassNameOverrides: ClassNameOverrides = {
  h2: "h2 my-s",
  h3: "h3 not-first:my-s",
  h5: "p2sb not-first:mt-xs",
  ol: "list-decimal list-outside space-y-xs my-xs pl-s",
  p: "not-first:mb-xs",
  ul: classNames("space-y-xs my-xs ml-xxs bulleted"),
  b: classNames("font-semibold"),
  a: classNames("underline text-dark-blue"),
};

export const RTF: React.FC<RealRTFProps> = (props) => {
  return (
    <RealRTF
      {...props}
      projectClassNameOverrides={projectClassNameOverrides}
      projectRenderers={projectRenderers}
    />
  );
};
