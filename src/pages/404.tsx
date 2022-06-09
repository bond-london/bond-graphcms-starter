import { graphql, PageProps } from "gatsby";
import React from "react";
import { PageLayout } from "../layouts";

const Page: React.FC<PageProps<Queries.Page404Query>> = ({
  data: { page },
}) => {
  return <PageLayout page={page} />;
};

export default Page;

export const page404Query = graphql`
  query Page404 {
    page: graphCmsPage(slug: { eq: "404" }) {
      ...Page
    }
  }
`;
