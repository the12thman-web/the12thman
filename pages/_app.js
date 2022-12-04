import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>

      <Header />
      <Script type="text/javascript" src="scripts/script.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
