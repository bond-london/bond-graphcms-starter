import React from "react";
import { Block, Collection, CMSTeam } from ".";
import { GraphCms_Union_Blocks_RelatedPage } from "../generated/graphql-types";

const SingleBlock: React.FC<{ block: GraphCms_Union_Blocks_RelatedPage }> = ({
  block,
}) => {
  switch (block.__typename) {
    case "GraphCMS_Block":
      return <Block block={block} />;
    case "GraphCMS_Collection":
      return <Collection collection={block} />;
    case "GraphCMS_Team":
      return <CMSTeam team={block} />;
  }
  return <pre>{block.__typename} not known</pre>;
};

export const Blocks: React.FC<{
  blocks: ReadonlyArray<GraphCms_Union_Blocks_RelatedPage>;
}> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <SingleBlock key={block.id} block={block} />
      ))}
    </>
  );
};
