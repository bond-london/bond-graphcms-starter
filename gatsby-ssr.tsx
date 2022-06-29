import React from "react";
import { PreRenderHTMLArgs } from "gatsby";
import { oneLine } from "common-tags";

import { COOKIE_NAME } from "./gatsby-env";

// eslint-disable-next-line import/no-unused-modules
export function onPreRenderHTML(args: PreRenderHTMLArgs) {
  const headComponents = args.getHeadComponents();

  const script = (
    <script
      key="configure-gtag-storage"
      dangerouslySetInnerHTML={{
        __html: oneLine`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    const hasCookie = window.localStorage.getItem("${COOKIE_NAME}");
    const status = hasCookie ? "granted": "denied";
    if (hasCookie) {
      window.bondHadCookie = true;
    }
 
    gtag('consent', 'default', {
      'ad_storage': status,
      'analytics_storage': status
    });
    `,
      }}
    />
  );

  const newHeadComponents = [script, ...headComponents];
  args.replaceHeadComponents(newHeadComponents);
}
