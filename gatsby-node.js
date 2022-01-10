exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allGraphCmsPage {
        nodes {
          slug
          id
          locale
        }
      }
    }
  `);

  const pageComponent = require.resolve(`./src/templates/page.tsx`);
  data.allGraphCmsPage.nodes.forEach((node) => {
    const { slug, locale, id } = node;
    if (slug !== "404") {
      const isHome = slug === "index" || slug === "home";
      const path = `/${locale}/${!slug || isHome ? "" : slug}`;
      actions.createPage({
        path,
        component: pageComponent,
        context: { id, language: locale },
      });
    }
  });
};
