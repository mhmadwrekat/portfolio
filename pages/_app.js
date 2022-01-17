import Script from 'next/script';
import '../styles/globals.css';
const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-CC35HDRGKD`} />
      <Script
        strategy='lazyOnload'>
        {
          `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CC35HDRGKD');
      `
        }
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
