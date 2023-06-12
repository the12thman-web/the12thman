import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      {' '}
      <Head>
        {' '}
        <link rel="manifest" href="/manifest.json" />{' '}
        <link rel="apple-touch-icon" href="/icon.png"></link>{' '}
        <meta name="theme-color" content="#fff" />{' '}
        <script type="text/javascript" src="scripts/script.js" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9891586352099803"
        />
        <script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Q6CJDCHK19`}
        />
        <script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config','G-Q6CJDCHK19', {
                    page_path: window.location.pathname,
                    });
                `}
        </script>
      </Head>{' '}
      <body>
      <div id = "v-the12thman-in"></div>
        <script
          data-cfasync="false"
          type="text/javascript"
          id="clever-core"
          src="../scripts/wanderAdd.js"
        ></script>{' '}
        <script
          src="https://jsc.mgid.com/t/h/the12thman.in.1280029.js"
          async
        ></script>
        <Main /> <NextScript />{' '}
      </body>{' '}
    </Html>
  );
}
