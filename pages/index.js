import Head from "next/head";
import Home from "../components/Home";
import { getAllPostsForHome } from "../utils/wpGraph";

export default function index({ posts }) {
  // console.log("posts", posts);
  return (
    <>
      <Head>
        <title>The 12th man times</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home posts={posts} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getAllPostsForHome();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
