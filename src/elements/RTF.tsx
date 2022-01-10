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
  EmbedNodeRendererProps,
} from "@bond-london/graphcms-rich-text";
import { ClassRenderer } from "./ClassRenderer";
import {
  ImageAssetRenderer,
  ImageAssetRendererProps,
} from "./ImageAssetRenderer";
import { CMSPerson } from "../cms";
import { GraphCms_Person } from "../generated/graphql-types";

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
  embed_asset: {
    image: (props) => (
      <ImageAssetRenderer {...(props as unknown as ImageAssetRendererProps)} />
    ),
  },
  embed_node: {
    Person: (props: EmbedNodeRendererProps) => {
      const { isInline } = props;
      const person = props as unknown as GraphCms_Person;
      return (
        <CMSPerson
          person={person}
          className={classNames(
            isInline ? "w-mobile-2-cols" : "w-mobile-4-cols"
          )}
        />
      );
    },
  },
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
