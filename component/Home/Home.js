import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Aside from "../Aside/Aside";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Comment from "./Comment";
import Footer from "../Page/Footer";
import AsideMobile from "../Aside/AsideMobile";
// import Head from "next/head";
const Home = () => {
  let [mode, setMode] = useState({
    button: "🌙",
    status: "dark",
    firstBG: "bg-slate950",
    secondBG: "bg-gray-900",
    mainTextColor: "text-gray-100",
    otherTextColor: "text-gray-400",
  });
  let [color, setColor] = useState({
    svg: "#ff1e52",
    bg: "bg-pink",
    txt: "text-pink",
    border: "border-pink",
  });
  // Function to handle theme between Dark mode & Light mode
  const handle_mode = () => {
    mode.status === "dark"
      ? setMode({
          button: "☀️",
          status: "light",
          firstBG: "bg-gray-100",
          secondBG: "bg-gray-400",
          mainTextColor: "text-gray-800",
          otherTextColor: "text-gray-600",
        })
      : setMode({
          button: "🌙",
          status: "dark",
          firstBG: "bg-slate950",
          secondBG: "bg-gray-900",
          mainTextColor: "text-gray-100",
          otherTextColor: "text-gray-400",
        });
  };
  // Function to oben links in new tab
  const new_tab = (url) => {
    window.open(url, "_blank");
  };
  //  @refresh reset
  return (
    <React.Fragment>
      {/* <Head>
        <title>Mhmad</title>
      </Head> */}

        <section className={`lg:flex ${mode.firstBG}`}>
          <div className="mr-auto 2xl:flex lg:flex hidden">
            <Aside
              theme={{ mode: mode, color: color }}
              handle_mode={handle_mode}
              new_tab={new_tab}
            />
          </div>
          <div className="grid lg:hidden">
            <AsideMobile
              theme={{ mode: mode, color: color }}
              handle_mode={handle_mode}
              new_tab={new_tab}
            />
          </div>
          <div className="2xl:flex lg:flex hidden 2xl:px-44 lg:px-32" />

          <div className="lg:py-4 py-0 md:w-11/12 lg:w-10/12 2xl:w-11/12 md:m-auto lg:ml-auto 2xl:ml-auto">
            <AboutMe theme={{ mode: mode, color: color }} />
            <Skills theme={{ mode: mode, color: color }} />
            <Projects theme={{ mode: mode, color: color }} new_tab={new_tab} />
            <Experience theme={{ mode: mode, color: color }} />
            <Comment theme={{ mode: mode, color: color }} />
            <Footer theme={{ mode: mode, color: color }} />
          </div>
        </section>
    </React.Fragment>
  );
};

export default Home;
