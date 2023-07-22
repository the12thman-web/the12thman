import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Sidebar from "@layouts/partials/Sidebar";
import { getAllPosts, getCategory, getRelatedPosts, getTag } from "@lib/graphql";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
import Post from "@partials/Post";
const { blog_folder } = config.settings;
import parse from 'html-react-parser';

// category page
const Tag = ({ tagDetails, posts, detailPosts }) => {
    const { name, description } = tagDetails;
    console.log("description:", description)
    
    return (
        <Base title={name}>
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
                        >
                            {description ? parse(description) : ''}
                        </div>
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
        </Base>
    );
};

export default Tag;

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
    const { tag } = params;
    const tagDetails = await getTag(tag)
    const posts = await getAllPosts('','',tag);
    const detailPosts = await getRelatedPosts('', '', tag, 20);

    return {
        props: {
            tagDetails: tagDetails?.nodes[0],
            posts: posts?.nodes,
            detailPosts: detailPosts?.nodes
        },
    };
};