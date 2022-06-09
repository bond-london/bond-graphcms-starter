import React from "react";
import { Block, Collection, CMSTeam } from ".";

const SingleBlock: React.FC<{ block: Queries.PageFragment["blocks"][0] }> = ({
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
  blocks: Queries.PageFragment["blocks"];
}> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <SingleBlock key={block.id} block={block} />
      ))}
    </>
  );
};
