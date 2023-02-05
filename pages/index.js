import Head from "next/head";
import Home from "../components/Home";
import { getAllMenus, getAllPosts } from "../utils/wpGraph";

export default function index({ posts, menus }) {
  // console.log("pos", posts);
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
      <Home posts={posts} menus={menus} />
      
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  const menus = await getAllMenus();
  // console.log(posts)
  return {
    props: {
      posts,
      menus
    },
    revalidate: 10, // In seconds
  };
}
