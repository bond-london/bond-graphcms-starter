import { graphql } from "gatsby";

export const LinkFragment = graphql`
  fragment LinkFragment on GraphCMS_Link {
    id
    title
    icon
    internalLink {
      __typename
      ...PageLinkFragment
      ...PersonLinkFragment
    }
    colour
    external
    newPage
    isButton
    asset {
      ...ImageAssetFragment
      ...VideoAssetFragment
      ...LottieAssetFragment
      ...SvgAssetFragment
    }
  }
`;
