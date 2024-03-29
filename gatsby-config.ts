import type { GatsbyConfig } from "gatsby";
import { join, resolve } from "path";
import {
  allowIndex,
  isProduction,
  showDevPages,
  siteUrl,
  GOOGLE_TAG,
  COOKIE_NAME,
  BUILD_DESIGN,
} from "./gatsby-env";

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const gatsbyConfig: GatsbyConfig = {
  trailingSlash: "always",
  graphqlTypegen: {
    typesOutputPath: "gatsby-types.d.ts",
  },
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG}`,
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  siteMetadata: {
    siteName: "Bond London GraphCMS Starter",
    description: "Starter project for Bond London and GraphCMS with Gatsby",
    siteUrl,
    logo: `${siteUrl}/icons/icon-512x512.png`,
    cookieName: COOKIE_NAME,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        openAnalyzer: false,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        // Any additional eslint-webpack-plugin options below
        // ...
        overrideConfigFile: ".custom.eslintrc.json",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => {
          const robotsEnv = allowIndex ? "production" : "development";
          return robotsEnv;
        },
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/", disallow: ["/dev/"] }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: resolve("src/pages"),
        ignore: showDevPages
          ? undefined
          : {
              patterns: [`dev/**`],
              options: { nocase: true },
            },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
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
          formats: isProduction ? ["auto", "webp", "avif"] : ["auto"],
          breakpoints: isProduction
            ? [320, 400, 750, 1080, 1366, 1920]
            : [1920],
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
    "@bond-london/gatsby-transformer-extracted-svg",
    "@bond-london/gatsby-transformer-extracted-lottie",
    {
      resolve: "@bond-london/gatsby-transformer-video",
      options: {
        useRemoteCache: true,
        remoteContainer: "bondgraphcms",
        remoteConnectionString: process.env.VIDEO_CACHE_CONNECTION_STRING,
      },
    },
    {
      resolve: "@bond-london/simple-gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        stages: [process.env.GRAPHCMS_STAGE],
        token: process.env.GRAPHCMS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
  ],
};

if (BUILD_DESIGN) {
  gatsbyConfig.plugins?.push({
    resolve: "gatsby-plugin-gatsby-cloud",
    options: {
      headers: {
        "/design-system/*": ["X-Frame-Options: SAMEORIGIN"],
      },
    },
  });
}
// if (GOOGLE_TAG && COOKIE_NAME) {
//   gatsbyConfig.plugins?.push({
//     resolve: "gatsby-plugin-google-tagmanager",
//     options: {
//       id: GOOGLE_TAG,
//       includeInDevelopment: true,
//       defaultDataLayer: { platform: "gatsby" },
//       gtmAuth: process.env.GTM_AUTH,
//       gtmPreview: process.env.GTM_PREVIEW,
//       enableWebVitalsTracking: true,
//     },
//   });
// }

export default gatsbyConfig;
