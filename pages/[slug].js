import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const BASE_URL = 'https://staging.the12thman.in/';
// import { it } from 'node:test';

export default function PostPage({ uri }) {
  const router = useRouter();
  useEffect(() => {
    router.push('/posts/' + uri);
  }, []);
  return <></>;
}

//access the router, get the id, and get the data for that post

export async function getStaticPaths(params) {
  const allPosts = null;
  return {
    paths: allPosts
      ? allPosts.nodes.map(node => {
          // console.log('static path post', '/posts/' + node.slug);
          return `/posts/${node.slug}`;
        }) || []
      : [],
    fallback: 'blocking',
  };
}
export async function getStaticProps({ params }, category) {
  return {
    props: {
      uri: params.slug,
    },
  };
}
