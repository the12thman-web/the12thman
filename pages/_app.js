import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, menus }) {
  return (
    <>
      <Head></Head>

      {/* <Header /> */}
      <Script type="text/javascript" src="scripts/script.js" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
