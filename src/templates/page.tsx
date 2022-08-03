import { graphql, HeadProps, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import { LayoutHead } from "../layouts/Layout";
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

// eslint-disable-next-line import/no-unused-modules
export const Head: React.FC<HeadProps<Queries.SinglePageQuery>> = (props) => {
  const {
    data: { page },
  } = props;
  if (!page) throw new Error("No page");

  return (
    <LayoutHead
      headProps={props}
      title={page.title}
      description={page.description}
      keywords={page.keywords}
      image={getImage(page.image)}
    />
  );
};
