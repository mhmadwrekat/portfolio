import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

const HeadComp = () => {
  const headKeywords = `
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
    nextjs
    Vercel
    cercel
    deploy
    Deploy
    NextJs
    NEXTJS
    nextJS
    next framework
    React
    react
    js
    javascript
    Html5
    HTML5
    html5
    html
    Html
    HTML
    django
    Design
    design
    designer
    Tailwind
    tailwind
    tailwindCSS
    tailwind CSS
    tailwind-Css
    tailwind css
    tailwind Css
    NextJs with TailwindCss
    NextJs with tailwindCss
    NextJs with Tailwind Css
    NextJs with tailwind Css
    NextJs with Tailwind css
    NextJs with tailwind css
    NextJs with Tailwind
    NextJs with tailwind
    Next with TailwindCss
    NextJS with TailwindCss
    NextJS with TailwindCss
    nextJs with TailwindCss
    Nextjs with TailwindCss
    Mhmad Fozan
    mhmad fozan
    mohammad fozan
    mohammad fozan aladwan
    mohammad fozan alwrekat
    mohammad fozan al-wrekat
    mohammad fozan wrekat
    alwrekat
    wrekat
    Wrekat
    ALADWAN
    adwan
    Adwan
    Adwani
    Aladwani
    responsive
    design
    SEO
    seo
    Seo
    SEO performance
    SEO web
    SEO web development
    performance
    Performance
    محمد
    محمد فوزان
    محمد فوزان عبدربه
    محمد فوزان عبدربه الوريكات
    فل ستاك
    هندسه برمجيات
    مهندس برمجيات
    هندسة برمجيات
    تطوير مواقع الكترونيه
    تطوير مواقع الكترونية
    برمجه
    برمجة
    ريسبوسنف
    سرعه المواقع
    سرعة
    السرعة
      `;
  const headDescription = `
      ◉ Full-Stack Web Developer.
      ◉ Jordan - Amman.
      ◉ Have a Bachelor's Degree in Software Engineering.
      `;
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="./assest/img/icon.png" />
        <link rel="apple-touch-icon" href="./assest/img/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={headKeywords} />
      </Head>
      <NextSeo
        canonical="https://wrekat.vercel.app"
        title="Mhmad Wrekat"
        description={headDescription}
        openGraph={{
          url: "https://wrekat.vercel.app",
          title: "Mhmad portfolio",
          type: 'website',
          description: headDescription,
          images: [
            { url: "./assest/img/mohammadWrekat.webp" },
            { url: "./assest/img/mhmadwrekat.webp" },
          ],
          siteName: "Mhmad Wrekat",
        }}
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
    </React.Fragment>
  );
};

export default HeadComp;
