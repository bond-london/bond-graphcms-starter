import { SEO } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { ReactNode, useMemo, useState } from "react";
import { Modal } from ".";
import { Footer, FooterInformation, Menu, NavigationBar } from "../components";

export const LayoutContext = React.createContext<{
  setModal: (node?: ReactNode) => void;
  modal?: ReactNode;
}>({
  setModal: () => {
    /* noop */
  },
});

export const DefaultNavigationMenu: Menu = {
  items: [
    { name: "Page 1", internal: "/page-1" },
    {
      name: "Bond",
      external: "https://bond-agency.london",
      isButton: true,
      colour: "Green",
    },
  ],
};

export const DefaultFooterInformation: FooterInformation = {
  columns: [
    [
      { type: "Logo", size: "Large", text: "Home page" },
      {
        type: "Text",
        size: "Medium",
        text: "A basic footer",
      },
      { type: "Text", text: "Follow us", size: "Large" },
      {
        type: "Links",
        size: "Medium",
        links: [
          {
            icon: "Facebook",
            external: "https://www.facebook.com",
            newPage: true,
            name: "Facebook",
          },
          {
            icon: "LinkedIn",
            external: "https://www.linkedin.com",
            newPage: true,
            name: "LinkedIn",
          },
        ],
      },
    ],
  ],
  lastRow: [
    [
      {
        type: "Text",
        size: "Small",
        text: "Copyright © ##BUILD_YEAR## | Bond London",
      },
    ],
  ],
};

export const Layout: React.FC<{
  bodyClassName?: string;
  title: string;
  description?: string;
  keywords?: string;
  image?: IGatsbyImageData;
}> = ({ bodyClassName, title, description, keywords, image, children }) => {
  const { siteBuildMetadata, site } = useStaticQuery<{
    siteBuildMetadata: { buildTime: string; buildYear: string };
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
  }>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          description
          title
          siteUrl
        }
      }
      siteBuildMetadata {
        buildYear: buildTime(formatString: "YYYY")
        buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
      }
    }
  `);

  const siteMetadata = site.siteMetadata;

  const pageTitle = siteMetadata?.title
    ? `${siteMetadata.title} | ${title}`
    : title;

  const [modal, setModal] = useState<ReactNode>();
  const provider = useMemo(
    () => ({
      modal,
      setModal,
    }),
    [modal, setModal]
  );

  return (
    <LayoutContext.Provider value={provider}>
      <SEO
        pageTitle={pageTitle}
        siteBuildMetadata={siteBuildMetadata}
        pageMetadata={{
          title,
          description,
          image,
          keywords,
        }}
        siteMetadata={siteMetadata}
        pageUrl={siteMetadata.siteUrl}
        className={classNames(
          bodyClassName,
          process.env.GATSBY_DEBUG_TAILWIND && "debug-screens"
        )}
      />
      <NavigationBar menu={DefaultNavigationMenu} />

      {children}
      <Footer {...DefaultFooterInformation} />
      <Modal
        containerClassName="bg-black bg-opacity-50"
        contentClassName="bg-white rounded-normal p-s"
      />
    </LayoutContext.Provider>
  );
};
