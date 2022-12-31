import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllCategories } from "../../utils/wpGraph";

const Category = ({ menus }) => {
  const categoryDatafirstCol = menus.nodes.slice(0, 4);
  const categoryDatasecCol = menus.nodes.slice(5, 9);
  const categoryDataSlider = menus.nodes.slice(10, 14);
  const categoryDataSingle = menus.nodes.slice(10, 11);
  const categoryTagsData = menus.nodes;
  //  console.log("menu", menus);
  return (
    <>
      <section>
        {/* ------------Category Section details--------------- */}

        <div className="container">
          <h4 className="shadow-sm p-3 mb-5 bg-white rounded text-md-center">Category Title</h4>
          <div className="row">
            <div className="col-md-8">
              <aside className="wrapper__list__article ">
                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}

                    {categoryDatafirstCol.map((item, index) => {
                      return (
                        <>
                          <div className="article__entry" key={index}>
                            <div className="article__image">
                              {/* <Link href='.../posts/${node.slug}'> */}
                              <Link href={`/posts/${item.slug}`}>
                                <Image
                                  className="image-profile"
                                  src={item.featuredImage.node.sourceUrl}
                                  width={500}
                                  height={400}
                                  alt={item.featuredImage.node.altText}
                                />
                              </Link>
                            </div>
                            <div className="article__content">
                              <div className="article__category">
                                {item.categories.nodes[0].name}
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by {item.author.node.name}
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="text-dark text-capitalize">
                                    descember 09, 2016
                                  </span>
                                </li>
                              </ul>
                              <h5>
                                <Link href={`/posts/${item.slug}`}>{item.title.slice(0, 26)}</Link>
                              </h5>
                              <p>{item.slug.slice(0, 20)} ....</p>
                              <Link
                                href={`/posts/${item.slug}`}
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
                    {categoryDatasecCol.map((item, index) => {
                      return (
                        <>
                          <div className="article__entry" key={index}>
                            <div className="article__image">
                              <Link href={`/posts/${item.slug}`}>
                                <Image
                                  className="image-profile"
                                  src={item.featuredImage.node.sourceUrl}
                                  width={500}
                                  height={400}
                                  alt={item.featuredImage.node.altText}
                                />
                              </Link>
                            </div>
                            <div className="article__content">
                              <div className="article__category">
                                {item.categories.nodes[0].name}
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by {item.author.node.name}
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="text-dark text-capitalize">
                                    descember 09, 2016
                                  </span>
                                </li>
                              </ul>
                              <h5>
                                <Link href={`/posts/${item.slug}`}>{item.title.slice(0, 26)}</Link>
                              </h5>
                              <p>{item.slug.slice(0, 30)} .....</p>
                              <Link
                                href={`/posts/${item.slug}`}
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
                </div>
              </aside>
            </div>

            {/* ------------Sidebar details--------------- */}

            <div className="col-md-4">
              <div className="sidebar-sticky">
                <aside className="wrapper__list__article ">
                  <div className="wrapper__list__article-small">
                    {categoryDataSlider.map((item) => {
                      return (
                        <>
                          <div className="mb-3">
                            {/* <!-- Post Article --> */}
                            <div className="card__post card__post-list">
                              <div className="image-sm">
                                <Link href={`/posts/${item.slug}`}>
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
                                      <li className="list-inline-item">
                                        <span className="text-dark text-capitalize">
                                          descember 09, 2016
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="card__post__title">
                                    <h6>
                                      <Link href={`/posts/${item.slug}`}>
                                        {item.title.slice(0, 26)}
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

                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      {categoryDataSingle.map((item, index) => {
                        return (
                          <>
                            <div className="article__image" key={index}>
                              <Link href={`/posts/${item.slug}`}>
                                <Image
                                  className="image-profile"
                                  src={item.featuredImage.node.sourceUrl}
                                  width={500}
                                  height={400}
                                  alt={item.featuredImage.node.altText}
                                />
                              </Link>
                            </div>
                            <div className="article__content">
                              <div className="article__category">
                                {item.categories.nodes[0].name}
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by {item.author.node.name}
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="text-dark text-capitalize">
                                    descember 09, 2016
                                  </span>
                                </li>
                              </ul>
                              <h5>
                                <Link href={`/posts/${item.slug}`}>{item.title.slice(0, 26)}</Link>
                              </h5>
                              <p>{item.slug.slice(0, 30)} .....</p>
                              <Link
                                href={`/posts/${item.slug}`}
                                className="btn btn-outline-primary mb-4 text-capitalize"
                              >
                                {" "}
                                read more
                              </Link>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </aside>

                {/* ------------Single Category data details--------------- */}

                <aside className="wrapper__list__article">
                  <h4 className="border_section">tags</h4>
                  {categoryTagsData.map((item, index) => {
                    return (
                      <>
                        <div className="blog-tags p-0" key={index}>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link href={`/posts/${item.slug}`}>{item.tags.nodes.name}</Link>
                            </li>
                          </ul>
                        </div>
                      </>
                    );
                  })}
                </aside>

                <aside className="wrapper__list__article">
                  <h4 className="border_section">newsletter</h4>
                  {/* <!-- Form Subscribe --> */}
                  <div className="widget__form-subscribe bg__card-shadow">
                    <h6>
                      The most important world news and events of the day.
                    </h6>
                    <p>
                      <small>
                        Get magzrenvi daily newsletter on your inbox.
                      </small>
                    </p>
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your email address"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </aside>

                <aside className="wrapper__list__article">
                  <h4 className="border_section">Advertise</h4>
                  {/* <Link href="#">
                    <Image
                      className="image-profile"
                      src={item.featuredImage.node.sourceUrl}
                      width={500}
                      height={400}
                      alt={item.featuredImage.node.altText}
                    />
                  </Link> */}
                </aside>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          {/* <!-- Pagination --> */}

          <div className="pagination-area">
            <div
              className="pagination wow fadeIn animated"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDuration: "2s",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <Link href="#">«</Link>
              <Link href="#">1</Link>
              <Link className="active" href="#">
                2
              </Link>
              <Link href="#">3</Link>
              <Link href="#">4</Link>
              <Link href="#">5</Link>

              <Link href="#">»</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

//hey Next, these are the possible slugs
export async function getStaticPaths(params) {
  const allPosts = await getAllPosts();
  console.log(allPosts);
  return {
    paths: allPosts.nodes.map((node) => `/category/${node.catslug}`) || [],
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  console.log("slug2", params.catslug);
  const menus = await getAllPosts(params.catslug);

  return {
    props: {
      menus,
    },
    revalidate: 10, // In seconds
  };
}
