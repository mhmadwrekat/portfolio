import "../styles/globals.css";
import React from "react";
import HeadComp from "../component/Page/HeadComp";
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <HeadComp />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
