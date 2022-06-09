import type { CreatePagesArgs } from "gatsby";
import { resolve } from "path";

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<Queries.AllPagesQuery>(`
    query AllPages {
      allGraphCmsPage {
        nodes {
          slug
          id
        }
      }
    }
  `);

  if (!data?.allGraphCmsPage?.nodes) {
    throw new Error("No pages found");
  }

  const pageComponent = resolve(`./src/templates/page.tsx`);
  data.allGraphCmsPage.nodes.forEach((node) => {
    const { slug, id } = node;
    if (slug !== "404") {
      const isHome = slug === "index" || slug === "home";
      const path = isHome ? "/" : `/${slug}/`;
      actions.createPage({
        path,
        component: pageComponent,
        context: { id },
      });
    }
  });
}
