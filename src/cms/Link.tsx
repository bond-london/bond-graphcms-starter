import { graphql } from "gatsby";

// eslint-disable-next-line import/no-unused-modules
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
