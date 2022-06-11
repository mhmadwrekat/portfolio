// Cleaned
import React from "react";
import Head from "next/head";

const Head_comp = () => {
  const head_keywords = `
    mohammad
    mhmad
    Mhmad
    Mohammad
    alwrekat
    aladwan
    adwan
    jordanian
    jordan
    amman
    Amman
    amman arab uni
    software developer
    software
    software engineer
    developer
    front end
    frontEnd
    front-end
    backEnd
    backEnd developer
    back-end
    back end
    full stack developer
    full stack
    full stack web developer
    web developer web development
    ui
    ux
    ui ux
    ui-ux
    CEO
    ceo
    performance
    nextjs
    next
    react
    js
    django
    design
    tailwind
    tailwind css

      `;
  const head_description = `
      ◉ Full-Stack Web Developer.
      ◉ Jordan - Amman.
      ◉ Have a Bachelor's Degree in Software Engineering.
      `;
  return (
    <React.Fragment>
      <Head>
        <title>Mhmad Wrekat</title>
        <link rel="icon" href="./assest/icon.png" />
        <meta name="keywords" content={head_keywords} />
        <meta name="description" content={head_description} />
        <meta
          name="google-site-verification"
          content="HDEEQ5-e6iIohsSP76gB4dymhNOG6VmNHESihFQL4Dc"
        />
        <meta name="description" content="Web Developer - Jordan - Amman" />
      </Head>
    </React.Fragment>
  );
};

export default Head_comp;
