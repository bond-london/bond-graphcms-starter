import { graphql } from "gatsby";

export const PageLinkFragment = graphql`
  fragment PageLinkFragment on GraphCMS_Page {
    id
    slug
  }
`;

export const PageFragment = graphql`
  fragment PageFragment on GraphCMS_Page {
    id
    title
    header
    slug
    description
    keywords
    image {
      ...SeoImageAssetFragment
    }
    blocks {
      __typename
      ...BlockFragment
      ...CollectionFragment
      ...TeamFragment
    }
  }
`;
