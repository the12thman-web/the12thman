import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="geeky-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <Script
          src="scripts/twitter-widgets.js"
        />
        <Script
          src="scripts/googleatmanager.js"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q6CJDCHK19', { 'send_page_view': true });
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
