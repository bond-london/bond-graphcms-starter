import { exec } from "child_process";
import type { BuildArgs, CreatePagesArgs } from "gatsby";
import { resolve } from "path";
import { BUILD_DESIGN } from "./gatsby-env";

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

export async function onPostBuild(args: BuildArgs) {
  const { reporter } = args;
  if (BUILD_DESIGN) {
    reporter.info("About to build design system");
    await new Promise<void>((resolve, reject) => {
      exec(
        "yarn run build-storybook -o public/design-system",
        (err, stdout, stderr) => {
          if (err) {
            reporter.info(stdout);
            reporter.warn(stderr);
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
}
