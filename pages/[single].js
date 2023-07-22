import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getAllPosts, getPost, getRelatedPosts } from "@lib/graphql";

// post single layout
const Article = ({ post, slug, relatedPosts, posts }) => {
	const { content, tags, title, categories, author, date, featuredImage } = post;

	const frontmatter = {
		tags,
		title,
		categories,
		author,
		date,
		featuredImage: featuredImage?.node?.sourceUrl,
	};
	return (
		<PostSingle
			frontmatter={frontmatter}
			content={content}
			slug={slug}
			relatedPosts={relatedPosts}
			posts={posts}
		/>
	);
};

// get post single slug
export const getStaticPaths = () => {
	// const allSlug = getSinglePage(`content/${blog_folder}`);
	// const allSlug = [];
	// console.log("hi");
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
	const posts = await getAllPosts(post.categories.nodes[0].name);
	const relatedPosts = await getRelatedPosts(post.categories.nodes[0].name);
	return {
		props: {
			post: post,
			slug: single,
			relatedPosts: relatedPosts?.nodes,
			posts: posts?.nodes,
		},
	};
};

export default Article;
