import Head from 'next/head';
import Home from '../components/Home';
import { getAllMenus, getAllPosts } from '../utils/wpGraph';

export default function index({
  posts,
  menus,
  IPLcategory,
  cricketPosts,
  footBallPosts,
  motoGPPosts,
}) {
  // console.log("pos", posts);
  return (
    <>
      <Head>
        <title>The 12th man times</title>
        <meta name="description" content="The 12th man times " />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="The 12th man times" key="title" />
        <meta
          name="description"
          content="Author: A.N. Author,
          Illustrator: P. Picture, Category: Sport Fun Websites,
          The 12th man times">
        </meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hreflang="en" href="https://example.com" />
      </Head>
      <Home
        posts={posts || []}
        menus={menus || []}
        IPLcategory={IPLcategory || []}
        cricketPosts={cricketPosts || []}
        footBallPosts={footBallPosts || []}
        motoGPPosts={motoGPPosts || []}
      />
    </>
  );
}

export async function getStaticProps({ params }, category) {
  const menus = await getAllMenus();
  const posts = await getAllPosts();
  const IPLcategory = await getAllPosts((category = 'IPL'));
  const cricketPosts = await getAllPosts((category = 'Cricket'));
  const footBallPosts = await getAllPosts((category = 'Football'));
  const motoGPPosts = await getAllPosts((category = 'MotoGP'));
  // console.log(posts)
  return {
    props: {
      posts,
      menus,
      IPLcategory,
      cricketPosts,
      footBallPosts,
      motoGPPosts,
    },
    revalidate: 600, // In seconds
  };
}
