import { graphql, PageProps } from "gatsby";
import React from "react";
import { PageLayout } from "../layouts/PageLayout";

const Page: React.FC<PageProps<Queries.Page404Query>> = ({
  data: { page },
  location: { pathname },
}) => {
  if (!page) throw new Error("No 404");
  return <PageLayout page={page} pagePath={pathname} />;
};

// eslint-disable-next-line import/no-unused-modules
export default Page;

// eslint-disable-next-line import/no-unused-modules
export const page404Query = graphql`
  query Page404 {
    page: graphCmsPage(slug: { eq: "404" }) {
      ...Page
    }
  }
`;
