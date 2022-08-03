import { SEO } from "@bond-london/gatsby-graphcms-components";
import {
  graphql,
  HeadProps,
  Script,
  ScriptStrategy,
  useStaticQuery,
} from "gatsby";
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
// eslint-disable-next-line import/no-named-as-default
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { FooterInformation, Footer } from "../components/Footer/Footer";
import { Menu, NavigationBar } from "../components/Navigation/NavigationBar";
import { Modal } from "./Modal";

declare global {
  interface Window {
    bondHadCookie?: boolean;
  }
}

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

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const gtm = process.env.GOOGLE_TAG;
  const cookieName = process.env.COOKIE_NAME;

  const [modal, setModal] = useState<ReactNode>();
  const provider = useMemo(
    () => ({
      modal,
      setModal,
    }),
    [modal, setModal]
  );

  const onAccept = useCallback(() => {
    if (!window.bondHadCookie && cookieName) {
      window.localStorage.setItem(cookieName, "true");
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  }, [cookieName]);

  useEffect(() => {
    const cookieValue = getCookieConsentValue(cookieName);
    if (cookieValue) {
      onAccept();
    }
  }, [cookieName, onAccept]);

  return (
    <LayoutContext.Provider value={provider}>
      {gtm && cookieName && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtm.js?id=${gtm}`}
            strategy={ScriptStrategy.idle}
          />
          <Script id="gtm-init" strategy={ScriptStrategy.idle}>{`
          window.dataLayer = window.dataLayer || [];
          const hasCookie = window.localStorage.getItem("${cookieName}");
          const status = hasCookie ? "granted": "denied";
          if (hasCookie) {
            window.bondHadCookie = true;
          }
       
          window.dataLayer.push('consent', 'default', {
            'ad_storage': status,
            'analytics_storage': status
          });
                
          `}</Script>
        </>
      )}
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

export const LayoutHead: React.FC<{
  headProps: HeadProps;
  title: string;
  description: string | null;
  image: IGatsbyImageData | undefined;
  keywords: string | null;
}> = ({
  headProps: {
    location: { pathname },
  },
  title,
  description,
  image,
  keywords,
}) => {
  const { siteBuildMetadata, site } =
    useStaticQuery<Queries.LayoutHeadQuery>(graphql`
      query LayoutHead {
        site {
          siteMetadata {
            description
            siteName
            siteUrl
            cookieName
            logo
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

  const pageTitle = `${title} | ${siteMetadata.siteName || ""}`;

  return (
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
      pagePath={pathname}
    />
  );
};
