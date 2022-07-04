// Cleaned
import React from "react";
import Head from "next/head";
import Script from "next/script";
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
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="./assest/icon.png" />
        <link rel="apple-touch-icon" href="./assest/icon.png" />
        <link rel="canonical" href="https://www.wrekat.com" />
        <meta name="keywords" content={head_keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="HDEEQ5-e6iIohsSP76gB4dymhNOG6VmNHESihFQL4Dc"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
        {/* <script>
          {`window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "77731724-8ce0-4b47-aad9-8add0056e47e",
      safari_web_id: "web.onesignal.auto.67813ec5-45a5-4c64-95fb-a167cd7c4d3a",
      notifyButton: {
        enable: true,
      },
    });
  });`}
        </script> */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer',${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER});`,
          }}
        ></Script>
      </Head>
    </React.Fragment>
  );
};

export default Head_comp;
/*
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXZSBVW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
*/
