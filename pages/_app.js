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
import { Analytics } from '@vercel/analytics/react';
import { ProSidebarProvider } from 'react-pro-sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <ProSidebarProvider>
      <Component {...pageProps} />

      <Analytics />
      <Footer />
    </ProSidebarProvider>
  );
}

export default MyApp;
