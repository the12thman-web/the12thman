import config from '@config/config.json';
import theme from '@config/theme.json';
import { JsonContext } from 'context/state';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import 'styles/style.scss';
import 'styles/slider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactGA from 'react-ga';
import Script from 'next/script';
import Hydration from '../layouts/components/Hydration';
const GA_TRACKING_ID = config.site.ga_id;

ReactGA.initialize(GA_TRACKING_ID);

const App = ({ Component, pageProps }) => {
  // ReactGA.debugOptions({ debug: true });
  // default theme setup
  const { default_theme } = config.settings;

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? '&family=' + sf : ''
      }&display=swap`
    ).then(res => res.text().then(css => setFontcss(css)));
  }, [pf, sf]);

  // google tag manager (gtm)
  // const tagManagerArgs = {
  //   gtmId: config.params.tag_manager_id,
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     process.env.NODE_ENV === 'production' &&
  //       config.params.tag_manager_id &&
  //       TagManager.initialize(tagManagerArgs);
  //   }, 5000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Hydration>
      <JsonContext>
        <Head>
          {/* google font css */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `${fontcss}`,
            }}
          />
          {/* {process.env.NODE_ENV === 'production' && (
          <div className="ga-container">
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-Q6CJDCHK19"
            ></Script>

            <Script id="google-analytics">
              {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q6CJDCHK19')`}
              ;
            </Script>
          </div>
        )} */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9891586352099803"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
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
  );
};

export default App;
