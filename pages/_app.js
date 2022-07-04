import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "../styles/globals.css";
const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
import React, { useEffect, useRef, useCallback } from "react";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const head_description = `
    ◉ Full-Stack Web Developer.
    ◉ Jordan - Amman.
    ◉ Have a Bachelor's Degree in Software Engineering.
    `;
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../public/OneSignalSDKWorker.js", import.meta.url)
    );
    workerRef.current.onmessage = (evt) =>
      alert(`WebWorker Response => ${evt.data}`);
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleWork = useCallback(async () => {
    workerRef.current.postMessage(100000);
  }, []);

  useEffect(() => {
    navigator.serviceWorker.getRegistrations();
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "77731724-8ce0-4b47-aad9-8add0056e47e",
        safari_web_id:
          "web.onesignal.auto.67813ec5-45a5-4c64-95fb-a167cd7c4d3a",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
        subdomainName: "mhmadwrekat",
      });
    });
    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount
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
