import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { getCleanedRTF } from "@bond-london/graphcms-rich-text";
import { graphql } from "gatsby";
import React, { lazy, Suspense } from "react";
import { LinkInformation } from "../components";
import { arrayOrUndefined } from "../utils";
const BasicRTF = lazy(() =>
  import("../components/Text/BasicRTF").then((m) => ({ default: m.BasicRTF }))
);
const Hero = lazy(() =>
  import("../components/Hero/Hero").then((m) => ({ default: m.Hero }))
);

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
    <Suspense fallback={<div>Loading...</div>}>
      <BasicRTF
        content={rtf}
        visual={visual}
        right={!left}
        references={content.references}
      />
    </Suspense>
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
    <Suspense fallback={<div>Loading ...</div>}>
      <Hero
        content={rtf}
        title={showTitle ? title : undefined}
        visual={visual}
        links={arrayOrUndefined(links?.map(buildNamedLink))}
        textColour={textColour || undefined}
      />
    </Suspense>
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
export function buildNamedLink(link: Queries.LinkFragment): LinkInformation {
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
    icon: icon || undefined,
    external: external || undefined,
    newPage: newPage || undefined,
    name: title,
    colour: colour || undefined,
    internal,
    visual,
    isButton: isButton || undefined,
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
  }
  return <pre>Block {block.type} not yet implemented</pre>;
};

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
