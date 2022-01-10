require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const GOOGLE_TAG = process.env.GOOGLE_TAG;

const languages = ["en", "fr_CH"];
const siteUrl = process.env.GATSBY_SITE_URL || "http://localhost:8000";
const showDevPages = !!process.env.SHOW_DEV_PAGES;

const isProduction =
  process.env.GRAPHCMS_STAGE === "PUBLISHED" || !!process.env.PRODUCTION;
const allowIndex = !!process.env.ALLOW_INDEX;

const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: "Bond London GraphCMS Starter",
    description: "Starter project for Bond London and GraphCMS with Gatsby",
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      resolveEnv: () => (allowIndex ? "production" : "development"),
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",

      options: {
        defaults: {
          formats: isProduction ? ["auto", "webp"] : ["auto"],
          breakpoints: isProduction ? [400, 750, 1080, 1366, 1920] : [1920],
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: "@bond-london/gatsby-plugin-cms-i18next",
      options: {
        localeJsonSourceName: `locale`,
        languages,
        defaultLanguage: languages[0],
        siteUrl,
        i18nextOptions: {
          lowerCaseLng: true,
        },
      },
    },
    "@bond-london/gatsby-transformer-extracted-svg",
    "@bond-london/gatsby-transformer-extracted-lottie",
    {
      resolve: "@bond-london/simple-gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        stages: [process.env.GRAPHCMS_STAGE],
        token: process.env.GRAPHCMS_TOKEN,
        locales: languages,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locale",
        path: "./locales",
      },
      __key: "locale",
    },
    {
      resolve: "@bond-london/gatsby-plugin-generate-typings",
      options: {
        dest: "./src/generated/graphql-types.d.ts",
      },
    },
    {
      resolve: "@bond-london/gatsby-plugin-cookie-scripts",
      options: {
        scripts: [
          GOOGLE_TAG
            ? {
                name: "Google Analytics",
                serverHeadScripts: [
                  `<script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG}"></script>`,
                  `<script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', '${GOOGLE_TAG}');
                  </script>`,
                ],
              }
            : undefined,
        ].filter((x) => x),
      },
    },
  ].filter((x) => x),
};
