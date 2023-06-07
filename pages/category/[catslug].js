import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllMenus, getCategory } from '../../utils/wpGraph';
import Header from '../../components/Header';

const Category = ({ posts, menus, title, catDetails }) => {
  const categoryDatafirstCol = posts?.nodes?.slice(0, 4);
  const categoryDatasecCol = posts?.nodes?.slice(5, 9);
  const categoryDataSlider = posts?.nodes?.slice(10, 14);
  const categoryDataSingle = posts?.nodes?.slice(10, 11);
  const categoryTagsData = posts?.nodes;
  const catDesc = catDetails?.nodes[0]?.description || '';

  return (
    <>
      <Header menus={menus} />

      <section>
        {/* <!-- Breadcrumb --> */}

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <aside className="wrapper__list__article ">
                <h4 className="border_section">{title}</h4>
                <br />
                <br />
                <div
                  className="has-drop-cap-fluid"
                  dangerouslySetInnerHTML={{ __html: catDesc }}
                ></div>
                <br />
                <br />
                <br />

                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}

                    {categoryDatafirstCol.map(item => {
                      return (
                        <>
                          <div className="article__entry" key={item.postId}>
                            <div className="article__image">
                              {/* <a href='.../${node.slug}'> */}
                              <Link href={`/${item.slug}`}>
                                <Image
                                  className="image-profile"
                                  src={item?.featuredImage?.node?.sourceUrl}
                                  width={500}
                                  height={400}
                                  alt={item?.featuredImage?.node?.altText}
                                />
                              </Link>
                            </div>
                            <div className="article__content">
                              <div className="article__category">
                                {item?.categories?.nodes[0]?.name}
                              </div>
                              <ul className="list-inline">
                                <li
                                  className="list-inline-item"
                                  key={item?.postId}
                                >
                                  <span className="text-primary">
                                    by {item?.author?.node?.name}
                                  </span>
                                </li>
                                {/* <li className="list-inline-item">
                                  <span className="text-dark text-capitalize">
                                    descember 09, 2016
                                  </span>
                                </li> */}
                              </ul>
                              <h5>
                                <Link href={`/${item.slug}`}>
                                  {item?.title}
                                </Link>
                              </h5>

                              <Link
                                href={`/${item.slug}`}
                                className="btn btn-outline-primary mb-4 text-capitalize"
                              >
                                readmore
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}
                    {categoryDatasecCol.map(item => {
                      return (
                        <>
                          <div className="article__entry" key={item.postId}>
                            <div className="article__image">
                              <Link href={`/${item.slug}`}>
                                <Image
                                  className="image-profile"
                                  src={item?.featuredImage?.node?.sourceUrl}
                                  width={500}
                                  height={400}
                                  alt={item?.featuredImage?.node?.altText}
                                />
                              </Link>
                            </div>
                            <div className="article__content">
                              <div className="article__category">
                                {item?.categories?.nodes[0]?.name}
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by {item?.author?.node?.name}
                                  </span>
                                </li>
                                {/* <li className="list-inline-item">
                                  <span className="text-dark text-capitalize">
                                    descember 09, 2016
                                  </span>
                                </li> */}
                              </ul>
                              <h5>
                                <Link href={`/${item.slug}`}>
                                  {item?.title}
                                </Link>
                              </h5>

                              <Link
                                href={`/${item.slug}`}
                                className="btn btn-outline-primary mb-4 text-capitalize"
                              >
                                Read more
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-md-4">
              <div className="sidebar-sticky">
                <aside className="wrapper__list__article ">
                  <h4 className="border_section">Recent Blogs</h4>
                  <div className="wrapper__list__article-small">
                    {categoryDataSlider.map(item => {
                      return (
                        <>
                          <div className="mb-3" key={item.postId}>
                            {/* <!-- Post Article --> */}
                            <div className="card__post card__post-list">
                              <div className="image-sm">
                                <Link href={`/${item.slug}`}>
                                  <Image
                                    className="image-profile"
                                    src={item.featuredImage.node.sourceUrl}
                                    width={500}
                                    height={400}
                                    alt={item.featuredImage.node.altText}
                                  />
                                </Link>
                              </div>

                              <div className="card__post__body ">
                                <div className="card__post__content">
                                  <div className="card__post__author-info mb-2">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">
                                          by {item.author.node.name}
                                        </span>
                                      </li>
                                      {/* <li className="list-inline-item">
                                        <span className="text-dark text-capitalize">
                                          descember 09, 2016
                                        </span>
                                      </li> */}
                                    </ul>
                                  </div>
                                  <div className="card__post__title">
                                    <h6>
                                      <Link href={`/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </aside>
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block', textAlign: 'center' }}
                  data-ad-layout="in-article"
                  data-ad-format="fluid"
                  data-ad-client="ca-pub-9891586352099803"
                  data-ad-slot="5294261220"
                ></ins>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

export async function getStaticPaths(params) {
  // const allMenusResp = await getAllMenus(params.slug);
  // console.log('allMenus: ', allMenus.edges[0].node.menuItems.edges);
  // const allMenus = allMenusResp.edges[0].node.menuItems.edges;
  return {
    // paths:
    //   allMenus.map(node => {
    //     if (node?.node) {
    //       console.log('static path category', node.node.label);
    //       return `/category/${node.node.label}`;
    //     }
    //   }) || [],
    paths: [],
    fallback: 'blocking',
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  const posts = await getAllPosts(params.catslug);
  const menus = await getAllMenus();
  const catDetails = await getCategory(params.catslug);
  // console.log('catDetails: ', catDetails);

  return {
    props: {
      posts,
      menus,
      title: params.catslug,
      catDetails,
    },
    revalidate: 10, // In seconds
  };
}
