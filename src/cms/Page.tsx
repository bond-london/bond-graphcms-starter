import { graphql } from "gatsby";

export const PageLinkFragment = graphql`
  fragment PageLink on GraphCMS_Page {
    id
    slug
  }
`;

export const PageFragment = graphql`
  fragment Page on GraphCMS_Page {
    id
    title
    header
    slug
    description
    keywords
    image {
      ...SeoImageAsset
    }
    blocks {
      __typename
      ...Block
      ...Collection
      ...Team
      ...Person
    }
  }
`;
