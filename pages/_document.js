import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/imgs/GvineImgs/Logos/svg/gcd-website-favicon-color.png"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2NYTEMEQVH"
      ></Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-2NYTEMEQVH');
      `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
