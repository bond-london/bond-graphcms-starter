import { graphql, PageProps } from "gatsby";
import React from "react";
import { PageLayout } from "../layouts";

const Page: React.FC<PageProps<Queries.SinglePageQuery>> = ({
  data: { page },
}) => {
  return <PageLayout page={page} />;
};

export default Page;

export const pageQuery = graphql`
  query SinglePage($id: String!) {
    page: graphCmsPage(id: { eq: $id }) {
      ...Page
    }
  }
`;
