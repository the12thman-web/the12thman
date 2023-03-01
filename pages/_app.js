import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Script from 'next/script';
//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps, menus }) {
  return (
    <>
      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9891586352099803"
        crossOrigin="anonymous"
      ></script> */}
      <Script type="text/javascript" src="scripts/script.js" />
      <Component {...pageProps} />
      <Footer />
      {/* <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script> */}
    </>
  );
}

export default MyApp;
