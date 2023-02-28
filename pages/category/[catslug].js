import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllMenus } from '../../utils/wpGraph';
import Header from '../../components/Header';

const Category = ({ posts, menus, title }) => {
  const categoryDatafirstCol = posts.nodes.slice(0, 4);
  const categoryDatasecCol = posts.nodes.slice(5, 9);
  const categoryDataSlider = posts.nodes.slice(10, 14);
  const categoryDataSingle = posts.nodes.slice(10, 11);
  const categoryTagsData = posts.nodes;

  console.log('pp', posts);
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

                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}

                    {categoryDatafirstCol.map(item => {
                      return (
                        <>
                          <div className="article__entry" key={item.postId}>
                            <div className="article__image">
                              {/* <a href='.../posts/${node.slug}'> */}
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
                                <li
                                  className="list-inline-item"
                                  key={item.postId}
                                >
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
                              <h5>
                                <Link href={`/posts/${item.slug}`}>
                                  {item.title.slice(0, 45)}...
                                </Link>
                              </h5>

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
                    {categoryDatasecCol.map(item => {
                      return (
                        <>
                          <div className="article__entry" key={item.postId}>
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
                                <li className="list-inline-item" key={1}>
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
                              <h5>
                                <Link href={`/posts/${item.slug}`}>
                                  {item.title.slice(0, 45)}...
                                </Link>
                              </h5>

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
                                      <li className="list-inline-item" key={1}>
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
                                      <Link href={`/posts/${item.slug}`}>
                                        {item.title.slice(0, 30)}
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
                    {/* <div className="article__entry">
                      {categoryDataSingle.map(item => {
                        return (
                          <>
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
                              </ul>
                              <h5>
                                <a href="#">{item.title.slice(0, 30)}</a>
                              </h5>
                              <p>{item.slug.slice(0, 30)} .....</p>
                              <Link
                                href={`/posts/${item.slug}`}
                                className="btn btn-outline-primary mb-4 text-capitalize"
                              >
                                {' '}
                                read more
                              </Link>
                            </div>
                          </>
                        );
                      })}
                    </div> */}
                  </div>
                </aside>
                <ins
                  class="adsbygoogle"
                  style="display:block; text-align:center;"
                  data-ad-layout="in-article"
                  data-ad-format="fluid"
                  data-ad-client="ca-pub-9891586352099803"
                  data-ad-slot="5294261220"
                ></ins>

                {/* <aside className="wrapper__list__article">
                  <h4 className="border_section">tags</h4>
                  {categoryTagsData.map((item) => {
                    return (
                      <>
                        <div className="blog-tags p-0">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link href={`/category/${item.catslug}`}>
                                {item.tags.nodes.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </>
                    );
                  })}
                </aside> */}

                {/* <aside className="wrapper__list__article">
                  <h4 className="border_section">Advertise</h4>
                  <Link href="/">
                    <figure>
                      <Image
                        className="image-profile"
                        src={item.featuredImage.node.sourceUrl}
                        width={500}
                        height={400}
                        alt={item.featuredImage.node.altText}
                      />
                    </figure>
                  </Link>
                </aside> */}
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
          {/* <!-- Pagination --> */}
          {/* <div className="pagination-area">
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
              <a href="#">«</a>
              <a href="#">1</a>
              <a className="active" href="#">
                2
              </a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>

              <a href="#">»</a>
            </div>
          </div> */}
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

  return {
    props: {
      posts,
      menus,
      title: params.catslug,
    },
    revalidate: 10, // In seconds
  };
}
