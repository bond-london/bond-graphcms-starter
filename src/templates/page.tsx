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

export const pageQuery = graphql`
  query ($id: String!) {
    page: graphCmsPage(id: { eq: $id }) {
      ...PageFragment
    }
  }
`;
