import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "../styles/globals.css";
const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
import React from "react";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const head_description = `
    ◉ Full-Stack Web Developer.
    ◉ Jordan - Amman.
    ◉ Have a Bachelor's Degree in Software Engineering.
    `;
  return (
    <React.Fragment>
      <NextSeo
        title="Mhmad Wrekat"
        description={head_description}
        twitter={{
          image: "/twitter.png",
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        facebook={{
          image: "/facebook.png",
          url: "https://website.com",
          type: "website",
        }}
      />
      {/* L6uzByobzaeXDxTEp4EKyDXuK0LW8yTa */}
      <Script>
        {`
          !(function () {
            var analytics = (window.analytics = window.analytics || []);
            if (!analytics.initialize)
              if (analytics.invoked)
                window.console &&
                  console.error &&
                  console.error("Segment snippet included twice.");
              else {
                analytics.invoked = !0;
                analytics.methods = [
                  "trackSubmit",
                  "trackClick",
                  "trackLink",
                  "trackForm",
                  "pageview",
                  "identify",
                  "reset",
                  "group",
                  "track",
                  "ready",
                  "alias",
                  "debug",
                  "page",
                  "once",
                  "off",
                  "on",
                  "addSourceMiddleware",
                  "addIntegrationMiddleware",
                  "setAnonymousId",
                  "addDestinationMiddleware",
                ];
                analytics.factory = function (e) {
                  return function () {
                    var t = Array.prototype.slice.call(arguments);
                    t.unshift(e);
                    analytics.push(t);
                    return analytics;
                  };
                };
                for (var e = 0; e < analytics.methods.length; e++) {
                  var key = analytics.methods[e];
                  analytics[key] = analytics.factory(key);
                }
                analytics.load = function (key, e) {
                  var t = document.createElement("script");
                  t.type = "text/javascript";
                  t.async = !0;
                  t.src =
                    "https://cdn.segment.com/analytics.js/v1/" +
                    key +
                    "/analytics.min.js";
                  var n = document.getElementsByTagName("script")[0];
                  n.parentNode.insertBefore(t, n);
                  analytics._loadOptions = e;
                };
                analytics._writeKey = "IqDs0syyZFejyyjZ9ix6G3AZHwpUkKYl";
                analytics.SNIPPET_VERSION = "4.15.3";
                analytics.load("IqDs0syyZFejyyjZ9ix6G3AZHwpUkKYl");
                analytics.page();
              }
          })()
          `}
      </Script>
      <script src="https://www.googleoptimize.com/optimize.js?id=OPT-TGB62G7"></script>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ANALYTICS}');
      `}
      </Script>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
