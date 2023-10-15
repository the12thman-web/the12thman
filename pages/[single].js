import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getAllPosts, getPost, getAllPostsWithContent } from "@lib/graphql";
import { NextSeo } from 'next-seo';
import { useEffect } from "react";
const SITE_URL = config.site.base_url;
import ReactGA from 'react-ga';

// post single layout
const Article = ({ post, slug, relatedPosts, trendingPosts, yoastSEO }) => {
	const { content, tags, title, categories, author, date, featuredImage, metaKeywords } = post || {};

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const frontmatter = {
		tags,
		title,
		categories,
		author,
		date,
		featuredImage: featuredImage?.node?.sourceUrl,
		metaKeywords
	};
	return (
		<>
		<NextSeo
		title={post?.title}
		description={yoastSEO?.opengraphDescription}
		canonical={yoastSEO?.canonical} // Replace with the canonical URL for this page
        openGraph={{
		url: yoastSEO?.opengraphUrl , // Replace with the URL for this page
		title: yoastSEO?.opengraphTitle,
		description: yoastSEO?.opengraphDescription,
          images: [
            {
			  url: yoastSEO?.opengraphImage?.url, // Replace with the Open Graph image URL for this page
              width: 800,
              height: 600,
			  alt: yoastSEO?.opengraphImage?.altText,
            },
          ],
        }}
      />
	  {post? 
		<PostSingle
		frontmatter={frontmatter}
		content={content}
		slug={slug}
		trendingPosts={trendingPosts}
		/>: <></>
	}
		 </>
	);
};

// get post single slug
export const getStaticPaths = async () => {
	const posts = await getAllPosts();
	const paths = posts.nodes.map((post) => ({
		params: { single: post.slug },
	}));
	return {
		paths,
		fallback: false,
	};
};

// get post single content
export const getStaticProps = async ({ params }) => {
	const { single } = params;
	const post = await getPost(single);
	const trendingPosts = await getAllPosts();
	// const relatedPosts = await getAllPostsWithContent(post?.categories.nodes[0].name);
	return {
		props: {
			post: post,
			slug: single,
			relatedPosts: [],
			trendingPosts: trendingPosts?.nodes || [],
			yoastSEO: post?.seo || null
		},
	};
};

export default Article;
