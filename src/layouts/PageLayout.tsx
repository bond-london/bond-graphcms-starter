import React from "react";
import { Blocks } from "../cms/Blocks";
import { PageHeader } from "../components/PageHeader";
import { Layout } from "./Layout";

export const PageLayout: React.FC<{
  page: Queries.PageFragment;
  pagePath: string;
}> = ({ page }) => {
  return (
    <Layout>
      {page.header && <PageHeader title={page.header} />}
      <Blocks blocks={page.blocks} />
    </Layout>
  );
};
