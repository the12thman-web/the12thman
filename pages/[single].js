import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getAllPosts, getPost, getAllPostsWithContent } from "@lib/graphql";
import { NextSeo } from 'next-seo';
const SITE_URL = config.site.base_url;
// post single layout
const Article = ({ post, slug, relatedPosts, posts, yoastSEO }) => {
	const { content, tags, title, categories, author, date, featuredImage } = post || {};

	const frontmatter = {
		tags,
		title,
		categories,
		author,
		date,
		featuredImage: featuredImage?.node?.sourceUrl,
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
		relatedPosts={relatedPosts}
		posts={posts}
		/>: <></>
	}
		 </>
	);
};

// get post single slug
export const getStaticPaths = () => {
	// const allSlug = getSinglePage(`content/${blog_folder}`);
	// const allSlug = [];
	// //consoel.log("hi");
	// const paths = allSlug.map((item) => ({
	// 	params: {
	// 		single: item.slug,
	// 	},
	// }));

	return {
		paths: [],
		fallback: "blocking",
	};
};

// get post single content
export const getStaticProps = async ({ params }) => {
	const { single } = params;
	const post = await getPost(single);
	const posts = await getAllPosts(post?.categories.nodes[0].name);
	const relatedPosts = await getAllPostsWithContent(post?.categories.nodes[0].name);
	return {
		props: {
			post: post,
			slug: single,
			relatedPosts: relatedPosts?.nodes,
			posts: posts?.nodes,
			yoastSEO: post?.seo || null
		},
	};
};

export default Article;
