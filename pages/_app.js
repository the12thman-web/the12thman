// pages/_app.js

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';
import 'styles/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactGA from 'react-ga';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider

import config from '@config/config.json';
import theme from '@config/theme.json';
import { JsonContext } from 'context/state';
import Script from 'next/script';
import Hydration from '../layouts/components/Hydration';

const GA_TRACKING_ID = config.site.ga_id;

ReactGA.initialize(GA_TRACKING_ID);

const App = ({ Component, pageProps }) => {
  // Default theme setup
  const { default_theme } = config.settings;

  // Import Google Font CSS
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  // const [fontcss, setFontcss] = useState('');

  // useEffect(() => {
  //   fetch(
  //     `https://fonts.googleapis.com/css2?family=${pf}${sf ? '&family=' + sf : ''}&display=swap`
  //   )
  //     .then((res) => res.text())
  //     .then((css) => setFontcss(css))
  //     .catch((error) => {
  //       console.error('Failed to fetch font CSS:', error);
  //       // Handle the error as needed.
  //     });
  // }, [pf, sf]);

  // Google Tag Manager (GTM)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };

  useEffect(() => {
    setTimeout(() => {
      if (
        process.env.NODE_ENV === 'production' &&
        config.params.tag_manager_id
      ) {
        TagManager.initialize(tagManagerArgs);
      }
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Create an instance of the Apollo Client
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://backendrsw.the12thman.in/graphql', // Replace with your GraphQL API URL
    }),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Hydration>
        <JsonContext>
          <Head>
            {/* Google Font CSS */}
            {/* <link  rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> 
            <style dangerouslySetInnerHTML={{ __html: fontcss }} /> */}

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link rel="preload" as="font" href={`https://fonts.googleapis.com/css2?family=${pf}${sf ? '&family=' + sf : ''}&display=swap`}  />

            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9891586352099803"
              crossOrigin="anonymous"
              strategy="lazyOnload"
            />
            <script
              async
              src="https://cdn.unibotscdn.com/ubplayer/player.js"
              strategy="defer"
            ></script>

            {/* responsive meta */}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=5"
            />
          </Head>
          <ThemeProvider attribute="class" defaultTheme={default_theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </JsonContext>
      </Hydration>
    </ApolloProvider>
  );
};

export default App;
