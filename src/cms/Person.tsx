import { graphql } from "gatsby";

export const PersonLinkFragment = graphql`
  fragment PersonLinkFragment on GraphCMS_Person {
    id
    slug
  }
`;

export const PersonFragment = graphql`
  fragment PersonFragment on GraphCMS_Person {
    ...PersonLinkFragment
    position
    asset {
      ...ImageAssetFragment
    }
  }
`;
