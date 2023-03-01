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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
       	(adsbygoogle = window.adsbygoogle || []).push({
         	google_ad_client: "ca-pub-9891586352099803",
         	enable_page_level_ads: true
         	});
        	`,
          }}
        />
      </Head>{' '}
      <body>
        {' '}
        <Main /> <NextScript />{' '}
      </body>{' '}
    </Html>
  );
}
