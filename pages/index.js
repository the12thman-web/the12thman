import Head from "next/head";
// import Script from "next/script";

import { getPosts } from "../utils/wordpress";

import Post from "../components/Post";
import Home from "../components/Home";

export default function index({ posts }) {
  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,300;1,500&family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        /> */}
        {/* <Script
          src="../public/scripts/script.js"
          onLoad={() => console.log("hey")}
        /> */}
      </Head>

      <Home posts={posts} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
