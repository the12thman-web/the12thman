import Head from "next/head";
// import Script from "next/script";

import { getPosts } from "../utils/wordpress";

import Post from "../components/Post";
// import Home from "../components/Home";
import Blog from "../components/Blog";
// import Category from "./category";

export default function index({ posts }) {
  const jsxPosts = posts.map((post) => {
    // console.log(post);
    let featuredMedia = "";
    if (post["_embedded"] && post["_embedded"]["wp:featuredmedia"]) {
      featuredMedia = post["_embedded"]["wp:featuredmedia"][0];
    } else {
      featuredMedia = "";
    }
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,300;1,500&family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        {/* <Script
          src="../public/scripts/script.js"
          onLoad={() => console.log("hey")}
        /> */}
      </Head>

      {/* <Home /> */}
      <Blog />
      {/* <Category /> */}
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
