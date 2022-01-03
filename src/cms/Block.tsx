import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { cleanupRTF, getRTF, tryGetRTF } from "@bond-london/graphcms-rich-text";
import { graphql } from "gatsby";
import React from "react";
import { BasicRTF, Hero, NamedLinkInformation } from "../components";
import {
  GraphCms_Block,
  GraphCms_Link,
  GraphCms_Union_InternalLink_RelatedLink,
} from "../generated/graphql-types";
import { arrayOrUndefined } from "../utils";

const RichTextBlock: React.FC<{ block: GraphCms_Block }> = ({
  block: { content, asset, loop, preview, left },
}) => {
  const rtf = getRTF(content);
  if (!rtf) {
    return null;
  }
  const clean = cleanupRTF(rtf);
  if (!clean) {
    return null;
  }
  const visual = getVisual(asset, loop, preview);
  return <BasicRTF content={clean} visual={visual} right={!left} />;
};

const HeroBlock: React.FC<{ block: GraphCms_Block }> = ({
  block: { content, asset, title, showTitle, loop, preview, links, textColour },
}) => {
  const rtf = tryGetRTF(content, true);
  if (!rtf) {
    return null;
  }
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

// const MessageBlock: React.FC<{ block: GraphCms_Block }> = ({
//   block: { title, showTitle, content, asset, loop, backgroundColour },
// }) => {
//   const realTitle = showTitle ? title : content?.text;
//   if (!realTitle) {
//     return null;
//   }
//   const visual = getVisual(asset, loop);
//   const rtf = tryGetRTF(content, true);
//   return (
//     <Message
//       title={realTitle}
//       visual={visual}
//       content={rtf}
//       backgroundColour={backgroundColour}
//     />
//   );
// };

function tryGetInternalLink(link?: GraphCms_Union_InternalLink_RelatedLink) {
  switch (link?.__typename) {
    case "GraphCMS_Page":
      return `/${link.slug}`;
    case "GraphCMS_Person":
      return `/person/${link.slug}`;
  }
}
export function buildNamedLink(link: GraphCms_Link): NamedLinkInformation {
  const { colour, internalLink, title, asset, ...rest } = link;
  const visual = getVisual(asset);
  const internal = tryGetInternalLink(internalLink);

  return {
    ...rest,
    name: title,
    colour,
    internal,
    visual,
  };
}

// const CtaBlock: React.FC<{ block: GraphCms_Block }> = ({
//   block: { title, content, asset, links },
// }) => {
//   if (!links) {
//     return null;
//   }
//   const visual = getVisual(asset);
//   if (!visual) {
//     return null;
//   }
//   const rtf = tryGetRTF(content, true);

//   return (
//     <CTA
//       title={title}
//       content={rtf}
//       visual={visual}
//       links={arrayOrUndefined(links?.map(buildNamedLink))}
//     />
//   );
// };

// const InformationBlock: React.FC<{ block: GraphCms_Block }> = ({
//   block: { title, content, asset, links, left },
// }) => {
//   const visual = getVisual(asset);
//   const rtf = tryGetRTF(content, true);
//   if (!rtf || !visual) {
//     return null;
//   }
//   return (
//     <Information
//       visual={visual}
//       content={rtf}
//       title={title}
//       links={arrayOrUndefined(links?.map(buildNamedLink))}
//       right={!left}
//     />
//   );
// };

export const Block: React.FC<{ block: GraphCms_Block }> = ({ block }) => {
  switch (block.type) {
    case "richtext":
      return <RichTextBlock block={block} />;
    case "hero":
      return <HeroBlock block={block} />;
    // case "message":
    //   return <MessageBlock block={block} />;
    // case "information":
    //   return <InformationBlock block={block} />;
    // case "cta":
    //   return <CtaBlock block={block} />;
    // case "product":
    //   return <ProductBlock block={block} />;
  }
  return <pre>Block {block.type} not yet implemented</pre>;
};

export const BlockFragment = graphql`
  fragment BlockFragment on GraphCMS_Block {
    id
    title
    showTitle
    type
    content {
      raw
    }
    links {
      ...LinkFragment
    }
    asset {
      ...ImageAssetFragment
      ...VideoAssetFragment
      ...LottieAssetFragment
      ...SvgAssetFragment
    }
    preview {
      ...ImageAssetFragment
    }
    loop
    left
    backgroundColour
    textColour
  }
`;
