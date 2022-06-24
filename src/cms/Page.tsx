import { graphql } from "gatsby";

// eslint-disable-next-line import/no-unused-modules
export const PageLinkFragment = graphql`
  fragment PageLink on GraphCMS_Page {
    id
    slug
  }
`;

// eslint-disable-next-line import/no-unused-modules
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
