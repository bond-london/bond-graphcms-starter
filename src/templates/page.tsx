import { graphql, PageProps } from "gatsby";
import React from "react";
import { PageLayout } from "../layouts/PageLayout";

const Page: React.FC<PageProps<Queries.SinglePageQuery>> = ({
  data: { page },
  location: { pathname },
}) => {
  if (!page) throw new Error("No page");
  return <PageLayout page={page} pagePath={pathname} />;
};

// eslint-disable-next-line import/no-unused-modules
export default Page;

// eslint-disable-next-line import/no-unused-modules
export const pageQuery = graphql`
  query SinglePage($id: String!) {
    page: graphCmsPage(id: { eq: $id }) {
      ...Page
    }
  }
`;
