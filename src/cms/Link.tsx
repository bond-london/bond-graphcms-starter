import { graphql } from "gatsby";

export const LinkFragment = graphql`
  fragment Link on GraphCMS_Link {
    id
    title
    icon
    internalLink {
      __typename
      ...PageLink
      ...PersonLink
    }
    colour
    external
    newPage
    isButton
    asset {
      ...ImageAsset
      ...VideoAsset
      ...LottieAsset
      ...SvgAsset
    }
  }
`;
