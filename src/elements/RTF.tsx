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
  DefaultRenderer,
} from "@bond-london/graphcms-rich-text";
import { ClassRenderer } from "./ClassRenderer";
import {
  ImageAssetRenderer,
  ImageAssetRendererProps,
} from "./ImageAssetRenderer";
import { CMSPerson } from "../cms";

const projectRenderers: Partial<NodeRenderer> = {
  p: (props) => (
    <DefaultRenderer
      {...props}
      element="div"
      className="rtfp not-first:mb-xs"
    />
  ),
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
      const person = props as unknown as Queries.PersonFragment;
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
