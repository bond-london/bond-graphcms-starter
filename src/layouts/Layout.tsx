import { SEO } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, Script, ScriptStrategy, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { FooterInformation, Footer } from "../components/Footer/Footer";
import { Menu, NavigationBar } from "../components/Navigation/NavigationBar";
import { Modal } from "./Modal";

export const LayoutContext = createContext<{
  setModal: (node?: ReactNode) => void;
  modal?: ReactNode;
}>({
  setModal: () => {
    /* noop */
  },
});

const DefaultNavigationMenu: Menu = {
  items: [
    { name: "Page 1", internal: "/home-with-no-lottie/" },
    {
      name: "Bond",
      external: "https://bond-agency.london",
      isButton: true,
      colour: "Green",
    },
  ],
};

const DefaultFooterInformation: FooterInformation = {
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

export const Layout: React.FC<
  PropsWithChildren<{
    bodyClassName?: string;
    title: string;
    description?: string;
    keywords?: string;
    image?: IGatsbyImageData;
    pagePath: string;
  }>
> = ({
  bodyClassName,
  title,
  description,
  keywords,
  image,
  pagePath,
  children,
}) => {
  const { siteBuildMetadata, site } =
    useStaticQuery<Queries.LayoutQuery>(graphql`
      query Layout {
        site {
          siteMetadata {
            description
            siteName
            siteUrl
            cookieName
            logo
            googleTag
          }
        }
        siteBuildMetadata {
          buildYear: buildTime(formatString: "YYYY")
          buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
        }
      }
    `);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const siteMetadata = site!.siteMetadata!;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cookieName = siteMetadata.cookieName!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const GTM = siteMetadata.googleTag!;
  const gtag = `https://www.googletagmanager.com/gtm.js?id=${GTM}`;

  const pageTitle = `${title} | ${siteMetadata.siteName || ""}`;

  const [modal, setModal] = useState<ReactNode>();
  const provider = useMemo(
    () => ({
      modal,
      setModal,
    }),
    [modal, setModal]
  );

  const onAccept = useCallback(() => {
    window.gtag?.("consent", "update", { ad_storage: "granted" });
  }, []);

  useEffect(() => {
    const cookieValue = getCookieConsentValue(cookieName);
    if (cookieValue) {
      onAccept();
    }
  }, [cookieName, onAccept]);

  return (
    <LayoutContext.Provider value={provider}>
      <CookieConsent
        cookieName={cookieName}
        declineCookieValue="declined"
        containerClasses="bg-error container-grid w-full z-cookies items-center py-xxxs"
        disableStyles={true}
        disableButtonStyles={true}
        location={"top"}
        buttonWrapperClasses="flex col-start-2 col-span-1 justify-self-end row-start-1 gap-x-xs"
        buttonClasses="bg-blue text-white px-xxxs"
        buttonText="Accept"
        enableDeclineButton={true}
        declineButtonText="Decline"
        declineButtonClasses="border border-blue text-blue px-xxs "
        contentClasses="col-start-2 col-span-1 row-start-1"
        onAccept={onAccept}
        customContainerAttributes={{}}
        customContentAttributes={{}}
      >
        We use cookies to make this site awesome
      </CookieConsent>

      <Script
        strategy={ScriptStrategy.idle}
        src={gtag}
        forward={["datalayer.push"]}
      />
      <Script id="gtag-config" strategy={ScriptStrategy.idle}>
        {`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() { window.dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "${GTM}", { send_page_view: false});
        gtag("consent", "default", {
          "ad_storage": "denied"
        });
    
        `}
      </Script>
      <SEO
        pageTitle={pageTitle}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        siteBuildMetadata={siteBuildMetadata!}
        pageMetadata={{
          title,
          description,
          image,
          keywords,
        }}
        siteMetadata={siteMetadata}
        pagePath={pagePath}
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
