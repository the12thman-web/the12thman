import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Sidebar from "@layouts/partials/Sidebar";
import { getAllPosts, getCategory, getRelatedPosts } from "@lib/graphql";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
import Post from "@partials/Post";
const { blog_folder } = config.settings;
import { useRouter } from 'next/router';


// category page
const Category = ({ catDetail }) => {
	const router = useRouter();

	const { uri } = catDetail;
	router.push(uri); // or router.replace('/destination-page') for a replace redirect

	return (
		<></>
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
	const catDetail = await getCategory(category)

	return {
		props: {
			catDetail: catDetail.nodes[0],
		},
	};
};
