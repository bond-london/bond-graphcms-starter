exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allGraphCmsPage {
        nodes {
          slug
          id
        }
      }
    }
  `);

  const pageComponent = require.resolve(`./src/templates/page.tsx`);
  data.allGraphCmsPage.nodes.forEach((node) => {
    const { slug, id } = node;
    if (slug !== "404") {
      const isHome = slug === "index" || slug === "home";
      const path = `/${!slug || isHome ? "" : slug}`;
      actions.createPage({ path, component: pageComponent, context: { id } });
    }
  });
};
