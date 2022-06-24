import React from "react";
import { getImage } from "@bond-london/gatsby-graphcms-components";
import { Blocks } from "../cms/Blocks";
import { PageHeader } from "../components/PageHeader";
import { Layout } from "./Layout";

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
