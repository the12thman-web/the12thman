import Head from 'next/head';
import Home from '../components/Home';
import { getAllPosts } from '../utils/wpGraph';

export default function index({
  posts,
  IPLcategory,
  cricketPosts,
  footBallPosts,
  NBAPosts,
  MotoGPPosts,
  UFCPosts,
}) {
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
      <Home
        posts={posts || []}
        IPLcategory={IPLcategory || []}
        cricketPosts={cricketPosts || []}
        footBallPosts={footBallPosts || []}
        NBAPosts={NBAPosts || []}
        MotoGPPosts={MotoGPPosts || []}
        UFCPosts={UFCPosts || []}
      />
    </>
  );
}
export async function getStaticProps({ params }, category) {
  const posts = await getAllPosts();
  const IPLcategory = await getAllPosts((category = 'IPL'));
  const cricketPosts = await getAllPosts((category = 'Cricket'));
  const footBallPosts = await getAllPosts((category = 'Football'));
  const NBAPosts = await getAllPosts((category = 'NBA'));
  const MotoGPPosts = await getAllPosts((category = 'Formula 1'));
  const UFCPosts = await getAllPosts((category = 'UFC'));

  // console.log(posts)
  return {
    props: {
      posts,
      IPLcategory,
      cricketPosts,
      footBallPosts,
      NBAPosts,
      MotoGPPosts,
      UFCPosts,
    },
    revalidate: 600, // In seconds
  };
}
