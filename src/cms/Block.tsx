import { getVisual } from "@bond-london/gatsby-graphcms-components";
import {
  getGatsbyVideo,
  GatsbyVideo,
} from "@bond-london/gatsby-transformer-video";
import { getCleanedRTF } from "@bond-london/graphcms-rich-text";
import { graphql } from "gatsby";
import React from "react";
import { Hero } from "../components/Hero/Hero";
import { LinkInformation } from "../components/Navigation/NavigationBar";
import { BasicRTF } from "../components/Text/BasicRTF";
import { arrayOrUndefined } from "../utils";

const InformationBlock: React.FC<{ block: Queries.BlockFragment }> = ({
  block,
}) => {
  const transformed = getGatsbyVideo(
    block.asset?.localFile?.childGatsbyVideo?.transformed
  );
  return (
    <div>
      {transformed && (
        <GatsbyVideo
          className="w-full"
          videoData={transformed}
          autoPlay={true}
          loop={true}
          onPlay={() => console.log("playing")}
          onPause={() => console.log("paused")}
        />
      )}
      <pre>{JSON.stringify(block, undefined, 2)}</pre>
    </div>
  );
};
const RichTextBlock: React.FC<{ block: Queries.BlockFragment }> = ({
  block: { content, asset, loop, preview, left },
}) => {
  if (!content) {
    return null;
  }
  const rtf = getCleanedRTF(content);
  if (!rtf) {
    return null;
  }
  const visual = getVisual(asset, loop, preview);
  return (
    <BasicRTF
      content={rtf}
      visual={visual}
      right={!left}
      references={content.references}
    />
  );
};

const HeroBlock: React.FC<{ block: Queries.BlockFragment }> = ({
  block: { content, asset, title, showTitle, loop, preview, links, textColour },
}) => {
  const rtf = getCleanedRTF(content);
  const visual = getVisual(asset, loop, preview);
  if (!visual) {
    return null;
  }
  return (
    <Hero
      content={rtf}
      title={showTitle ? title : undefined}
      visual={visual}
      links={arrayOrUndefined(links?.map(buildNamedLink))}
      textColour={textColour}
    />
  );
};

function tryGetInternalLink(link?: Queries.LinkFragment["internalLink"]) {
  switch (link?.__typename) {
    case "GraphCMS_Page":
      return `/${link.slug}`;
    case "GraphCMS_Person":
      return `/person/${link.slug}`;
  }
}
function buildNamedLink(link: Queries.LinkFragment): LinkInformation {
  const {
    colour,
    internalLink,
    title,
    asset,
    icon,
    external,
    newPage,
    isButton,
  } = link;
  const visual = getVisual(asset);
  const internal = tryGetInternalLink(internalLink);

  return {
    icon: icon,
    external: external,
    newPage: newPage,
    name: title,
    colour: colour,
    internal,
    visual,
    isButton: isButton,
  };
}

export const Block: React.FC<{ block: Queries.BlockFragment }> = ({
  block,
}) => {
  switch (block.type) {
    case "richtext":
      return <RichTextBlock block={block} />;
    case "hero":
      return <HeroBlock block={block} />;
    case "information":
      return <InformationBlock block={block} />;
  }
  return <pre>Block {block.type} not yet implemented</pre>;
};

// eslint-disable-next-line import/no-unused-modules
export const BlockFragment = graphql`
  fragment Block on GraphCMS_Block {
    id
    title
    showTitle
    type
    content {
      cleaned
      references {
        ... on GraphCMS_Asset {
          remoteId
          mimeType
          url
          ...ImageAsset
          ...VideoAsset
        }
        ... on GraphCMS_Person {
          remoteId
          ...Person
        }
      }
    }
    links {
      ...Link
    }
    asset {
      ...ImageAsset
      ...VideoAsset
      ...LottieAsset
      ...SvgAsset
      ...GatsbyVideoAsset
    }
    preview {
      ...ImageAsset
    }
    loop
    left
    backgroundColour
    textColour
  }
`;
