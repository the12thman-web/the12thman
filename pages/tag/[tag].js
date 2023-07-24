import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Sidebar from "@layouts/partials/Sidebar";
import { getAllPosts, getAllPostsWithContent, getTag } from "@lib/graphql";
import { contentParser } from "@lib/utils/contentPasrser";
import Post from "@partials/Post";
import parse from 'html-react-parser';

// category page
const Tag = ({ tagDetails, trendingPosts, detailPosts }) => {
    const { name, description } = tagDetails || {};
    
    return (
        name ?
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
                            dangerouslySetInnerHTML={{ __html:contentParser(description) }}
                        >
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
                        <Sidebar trendingPosts={trendingPosts} categories={[]} />
                    </div>
                </div>
            </div>
        </Base>
            : <NotFound title='Sorry 404! Tag Not Found' />
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
    const trendingPosts = tagDetails && await getAllPosts();
    const detailPosts = tagDetails && await getAllPostsWithContent('', '', tag, 20);

    return {
        props: {
            tagDetails: tagDetails?.nodes[0] || null,
            trendingPosts: trendingPosts?.nodes || null,
            detailPosts: detailPosts?.nodes || null
        },
    };
};
