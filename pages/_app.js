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
      {/* <script src="https://www.googleoptimize.com/optimize.js?id=OPT-TGB62G7"></script> */}
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
