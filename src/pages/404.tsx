import { graphql } from "gatsby";
import React from "react";
import { GraphCms_Page } from "../generated/graphql-types";
import { PageLayout } from "../layouts";

const Page: React.FC<{ data: { page: GraphCms_Page } }> = ({
  data: { page },
}) => {
  return <PageLayout page={page} />;
};

export default Page;

export const page404Query = graphql`
  query ($language: String!) {
    _locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    page: graphCmsPage(slug: { eq: "404" }) {
      ...PageFragment
    }
  }
`;
