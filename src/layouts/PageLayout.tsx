import React from "react";
import { Layout } from "../layouts";
import { PageHeader } from "../components";
import { GraphCms_Page } from "../generated/graphql-types";
import { Blocks } from "../cms";
import { getImage } from "@bond-london/gatsby-graphcms-components";

export const PageLayout: React.FC<{ page: GraphCms_Page }> = ({ page }) => {
  return (
    <Layout
      title={page.title}
      description={page.description}
      keywords={page.keywords}
      image={getImage(page.image)}
    >
      {page.header && <PageHeader title={page.header} />}
      <Blocks blocks={page.blocks} />
    </Layout>
  );
};
