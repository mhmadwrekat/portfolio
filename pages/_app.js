import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "../styles/globals.css";
import { v4 as uuidv4 } from "uuid";
const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
import React, { useState, useEffect, useRef, useCallback } from "react";
import { NextSeo } from "next-seo";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const head_description = `
    ◉ Full-Stack Web Developer.
    ◉ Jordan - Amman.
    ◉ Have a Bachelor's Degree in Software Engineering.
    `;
  const [country_code, setCountryCode] = useState();
  const [deviceId, setDeviceIs] = useState();
  const [userToken, setUserToken] = useState();

  // // Function Get User Info From LocalStorage else From API
  // const register_user = async () => {
  //   try {
  //     let device_id = null;
  //     if ("device_id" in localStorage) {
  //       device_id = localStorage.getItem("device_id");
  //       setDeviceIs(localStorage.getItem("device_id"));
  //     } else {
  //       device_id = uuidv4();
  //       localStorage.setItem("device_id", device_id);
  //       localStorage.setItem("user_token", response.data.data.user_token);
  //       localStorage.setItem("user_id", response.data.data._id);
  //     }
  //   } catch (err) {}
  // };
  // // Function Get Country Code From LocalStorage else From API
  // const get_country = async () => {
  //   localStorage.getItem("country_code")
  //     ? setCountryCode(localStorage.getItem("country_code"))
  //     : axios.get("https://geolocation-db.com/json/").then((res) => {
  //         localStorage.setItem("country_code", res.data.country_code);
  //         setCountryCode(res.data.country_code);
  //       });
  // };

  // useEffect(() => {
  //   register_user();
  //   get_country();
  //   typeof window !== "undefined"
  //     ? setDeviceIs(localStorage.getItem("device_id"))
  //     : "";
  //   typeof window !== "undefined"
  //     ? setUserToken(localStorage.getItem("user_token"))
  //     : "";
  // }, []);
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
  }, []);
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
// deviceId={deviceId}
export default MyApp;
