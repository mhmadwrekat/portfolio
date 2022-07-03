import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "../styles/globals.css";
const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
import React, { useEffect } from "react";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const head_description = `
    ◉ Full-Stack Web Developer.
    ◉ Jordan - Amman.
    ◉ Have a Bachelor's Degree in Software Engineering.
    `;

  useEffect(() => {
    try {
      const PRECACHE = "precache-v2";
      const RUNTIME = "runtime";

      // A list of local resources we always want to be cached.
      const PRECACHE_URLS = [
        `any url`, // Alias for index.html
      ];

      // The install handler takes care of precaching the resources we always need.
      self.addEventListener("install", (event) => {
        console.log("installing sw");
        event.waitUntil(
          caches
            .open(PRECACHE)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
        );
      });
      // The activate handler takes care of cleaning up old caches.
      self.addEventListener("activate", (event) => {
        const currentCaches = [PRECACHE, RUNTIME];
        console.log("activate cache");
        event.waitUntil(
          caches
            .keys()
            .then((cacheNames) => {
              return cacheNames.filter(
                (cacheName) => !currentCaches.includes(cacheName)
              );
            })
            .then((cachesToDelete) => {
              console.log("cache is deleting");
              return Promise.all(
                cachesToDelete.map((cacheToDelete) => {
                  return caches.delete(cacheToDelete);
                })
              );
            })
            .then(() => self.clients.claim())
        );
      });

      // The fetch handler serves responses for same-      	origin resources from a cache.
      // If no response is found, it populates the runtime cache with the response
      // from the network before returning it to the page.
      self.addEventListener("fetch", (event) => {
        // Skip cross-origin requests, like those for Google Analytics.
        if (event.request.url.startsWith(self.location.origin)) {
          event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }

              return caches.open(RUNTIME).then((cache) => {
                return fetch(event.request, {}).then((response) => {
                  // Put a copy of the response in the runtime cache.
                  return cache.put(event.request, response.clone()).then(() => {
                    return response;
                  });
                });
              });
            })
          );
        }
      });
    } catch (e) {
      console.log(e);
    }
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "994262cd-5c6e-4de8-ad3f-90cf3fd04369",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
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
