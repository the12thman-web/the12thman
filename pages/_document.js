import TwSizeIndicator from '@components/TwSizeIndicator';
import config from '@config/config.json';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  const org_schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://the12thman.in/',
    name: 'The 12th Man',
    logo: 'https://the12thman.in/_next/image?url=%2Fimages%2Flogo%202.png&w=640&q=75',
    description: 'The 12th Man is a leading online sports news portal that covers all the latest news, analysis, and opinions from the world of sports.',
    sameAs: [
      'https://www.facebook.com/Twelfthmantimes?mibextid=ZbWKwL',
      'https://x.com/Twelfthmantimes?t=rW3eKGFkRnO6QXlO50TQ_w&s=09',
      'https://instagram.com/twelfthmantimes_?igshid=NGVhN2U2NjQ0Yg==',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9643498291',
      contactType: 'customer service',
    },
  };

  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="geeky-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        
        {/* <Script src="scripts/twitter-widgets.js"/> */}
        <Script src="scripts/googleatmanager.js" />

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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org_schema) }} />
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
