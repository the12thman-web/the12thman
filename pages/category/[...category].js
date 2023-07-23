import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Sidebar from "@layouts/partials/Sidebar";
import { getAllPosts, getCategory, getAllPostsWithContent } from "@lib/graphql";
import Post from "@partials/Post";
import { NextSeo } from 'next-seo';


// category page
const Category = ({ catDetail, posts, detailPosts, yoastSEO }) => {
	const { name, description } = catDetail || {};
	return (
		name ?
			<>
				<NextSeo
					title={name}
					description={yoastSEO?.opengraphDescription}
					canonical={yoastSEO?.canonical} // Replace with the canonical URL for this page
					openGraph={{
						url: yoastSEO?.opengraphUrl, // Replace with the URL for this page
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
				<Base title={name} description={description}>
					<div className="section mt-16">
						<div className="container">
							<h1 className="h2 mb-12">
								<span className="section-title ml-1 inline-block capitalize">
									{name.replace("-", " ")}
								</span>
							</h1>
							<div className="content mb-16">

								<div
									className="has-drop-cap-fluid"
									dangerouslySetInnerHTML={{ __html: description }}
								></div>
							</div>
							<div className="row">
								<div className="lg:col-8">
									<div className="row rounded border border-border p-4 px-3 dark:border-darkmode-border lg:p-6">
										{detailPosts.map((post, i) => (
											<div key={`key-${i}`} className="col-12 mb-8 sm:col-6">
												<Post post={post} />
											</div>
										))}
									</div>
								</div>
								<Sidebar posts={posts} categories={[]} />
							</div>
						</div>
					</div>
				</Base></>
			: <NotFound title={'Sorry 404! Category not found'} />
	);
};

export default Category;

// category page routes
export const getStaticPaths = () => {
	// const allCategories = getTaxonomy(`content/${blog_folder}`, "categories");
	// const allCategories = [];
	// const paths = allCategories.map((category) => ({
	// 	params: {
	// 		category: category,
	// 	},
	// }));

	return { paths: [], fallback: 'blocking' };
};

// category page data
export const getStaticProps = async ({ params }) => {
	const { category } = params;
	const catSlug = category[category.length - 1]
	const catDetail = await getCategory(catSlug)
	const posts = catDetail && await getAllPosts(catSlug);
	const detailPosts = catDetail && await getAllPostsWithContent(catSlug, '', '', 20);

	return {
		props: {
			catDetail: catDetail?.nodes[0] || null,
			posts: posts?.nodes || null,
			detailPosts: detailPosts?.nodes || null,
			yoastSEO: catDetail?.nodes[0]?.seo || null
		},
	};
};
