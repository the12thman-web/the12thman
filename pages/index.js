import Head from "next/head";
import Home from "../components/Home";
import { getAllMenus, getAllPosts } from "../utils/wpGraph";
import Category from "./category/[catslug]";

export default function index({ posts, menus, IPLcategory, cricketPosts }) {
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
      <Home posts={posts} menus={menus} IPLcategory={IPLcategory} cricketPosts={cricketPosts}/>
      
    </>
  );
}

export async function getStaticProps({ params },category) {
  const posts = await getAllPosts();
  const menus = await getAllMenus();
  const IPLcategory = await getAllPosts(category='IPL')
  const cricketPosts = await getAllPosts(category="cricket")
  // console.log(posts)
  return {
    props: {
      posts,
      menus,
      IPLcategory,
      cricketPosts
    },
    revalidate: 60, // In seconds
  };
}
