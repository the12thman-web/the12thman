import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Sidebar from "@layouts/partials/Sidebar";
import { getAllPosts, getCategory, getAllPostsWithContent } from "@lib/graphql";
import Post from "@partials/Post";
import { NextSeo } from 'next-seo';

// category page
const Category = ({ catDetail, trendingPosts, detailPosts, yoastSEO, currentPage, totalPages }) => {
  const { name, description } = catDetail || {};
  
  // Pagination controls
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;
  
  const nextPage = `/category/${catDetail?.slug}?page=${currentPage + 1}`;
  const prevPage = `/category/${catDetail?.slug}?page=${currentPage - 1}`;
  
  return (
    name ?
    <>
      <NextSeo
        title={name}
        description={yoastSEO?.opengraphDescription}
        canonical={yoastSEO?.canonical}
        openGraph={{
          url: yoastSEO?.opengraphUrl,
          title: yoastSEO?.opengraphTitle,
          description: yoastSEO?.opengraphDescription,
          images: [
            {
              url: yoastSEO?.opengraphImage?.url,
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
                {name.replaceAll("-", " ")}
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
                
                {/* Pagination */}
                <div className="pagination">
                  {hasPrevPage && <a href={prevPage}>Previous</a>}
                  {hasNextPage && <a href={nextPage}>Next</a>}
                </div>
              </div>
              <Sidebar trendingPosts={trendingPosts} categories={[]} />
            </div>
          </div>
        </div>
      </Base>
    </>
    : <NotFound title={'Sorry 404! Category not found'} />
  );
};

export default Category;

// category page routes
export const getServerSideProps = async ({ params, query }) => {
	try {
	  const { category } = params;
	  const catSlug = category[category.length - 1];
	  const page = parseInt(query.page) || 1; // Get the requested page from the query parameters
	  const postsPerPage = 10; // Number of posts per page
	  const startIndex = (page - 1) * postsPerPage;
  
	  const catDetail = await getCategory(catSlug);
	  
	  // Check if catDetail is defined and has a 'posts' property
	  if (catDetail && catDetail.posts) {
		const trendingPosts = await getAllPosts();
		const detailPosts = await getAllPostsWithContent(catSlug, '', '', postsPerPage, startIndex);
  
		// Calculate total pages for pagination
		const totalPosts = catDetail.posts.totalCount || 0;
		const totalPages = Math.ceil(totalPosts / postsPerPage);
  
		return {
		  props: {
			catDetail: catDetail.nodes[0] || null,
			trendingPosts: trendingPosts?.nodes || null,
			detailPosts: detailPosts?.nodes || null,
			yoastSEO: catDetail.nodes[0]?.seo || null,
			currentPage: page, // Pass the current page number to your component
			totalPages, // Pass the total pages for pagination
		  },
		};
	  } else {
		// Handle the case where catDetail or catDetail.posts is undefined
		return {
		  props: {
			catDetail: null,
			trendingPosts: null,
			detailPosts: null,
			yoastSEO: null,
			currentPage: page,
			totalPages: 0,
		  },
		};
	  }
	} catch (error) {
	  console.error("Error in getServerSideProps:", error);
	  // Handle other potential errors here
	  return {
		props: {
		  catDetail: null,
		  trendingPosts: null,
		  detailPosts: null,
		  yoastSEO: null,
		  currentPage: page,
		  totalPages: 0,
		},
	  };
	}
  };
  
