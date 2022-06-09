import React from "react";
import { Layout } from "../layouts";
import { PageHeader } from "../components";
import { Blocks } from "../cms";
import { getImage } from "@bond-london/gatsby-graphcms-components";

export const PageLayout: React.FC<{
  page: Queries.PageFragment;
  pagePath: string;
}> = ({ page, pagePath }) => {
  return (
    <Layout
      title={page.title}
      description={page.description || undefined}
      keywords={page.keywords || undefined}
      image={getImage(page.image)}
      pagePath={pagePath}
    >
      {page.header && <PageHeader title={page.header} />}
      <Blocks blocks={page.blocks} />
    </Layout>
  );
};
