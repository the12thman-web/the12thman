import React from "react";
import Image from "next/image";
import { getAllPosts, getAllCategories } from '../../utils/wpGraph'

const Category = ({ menus }) => {
  console.log("menu", menus);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Breadcrumb --> */}
              <ul className="breadcrumbs bg-light mb-4">
                <li className="breadcrumbs__item">
                  <a href="/" className="breadcrumbs__url">
                    <i className="fa fa-home"></i> Home
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a href="index.html" className="breadcrumbs__url">
                    News
                  </a>
                </li>
                <li className="breadcrumbs__item breadcrumbs__item--current">
                  World
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <aside className="wrapper__list__article ">
                {/* <h4 className="border_section">Category title</h4> */}

                <h4 className="border_section">{menus.nodes[0].author.node.name}
                  {/* {menus.nodes[0].menuItems.nodes[0].label} */}
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <Image className="image-profile"
                            // src={menus.featuredImage.node.sourceUrl}
                            width={500}
                            height={400}
                            alt='xyz'
                          />
                          {/* <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          /> */}
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-md-4">
              <div className="sidebar-sticky">
                <aside className="wrapper__list__article ">
                  <h4 className="border_section">Sidebar</h4>
                  <div className="wrapper__list__article-small">
                    <div className="mb-3">
                      {/* <!-- Post Article --> */}
                      <div className="card__post card__post-list">
                        <div className="image-sm">
                          <a href="./card-article-detail-v1.html">
                            <img
                              src="images/placeholder/500x400.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="card__post__body ">
                          <div className="card__post__content">
                            <div className="card__post__author-info mb-2">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by david hall
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
                                <a href="./card-article-detail-v1.html">
                                  6 Best Tips for Building a Good Shipping Boat
                                </a>
                              </h6>
                              {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* <!-- Post Article --> */}
                      <div className="card__post card__post-list">
                        <div className="image-sm">
                          <a href="./card-article-detail-v1.html">
                            <img
                              src="images/placeholder/500x400.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="card__post__body ">
                          <div className="card__post__content">
                            <div className="card__post__author-info mb-2">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by david hall
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
                                <a href="./card-article-detail-v1.html">
                                  6 Best Tips for Building a Good Shipping Boat
                                </a>
                              </h6>
                              {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* <!-- Post Article --> */}
                      <div className="card__post card__post-list">
                        <div className="image-sm">
                          <a href="./card-article-detail-v1.html">
                            <img
                              src="images/placeholder/500x400.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="card__post__body ">
                          <div className="card__post__content">
                            <div className="card__post__author-info mb-2">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by david hall
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
                                <a href="./card-article-detail-v1.html">
                                  6 Best Tips for Building a Good Shipping Boat
                                </a>
                              </h6>
                              {/*<!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Post Article --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="article__content">
                        <div className="article__category">travel</div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="text-dark text-capitalize">
                              descember 09, 2016
                            </span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est
                          </a>
                        </h5>
                        <p>
                          Maecenas accumsan tortor ut velit pharetra mollis.
                          Proin eu nisl et arcu iaculis placerat sollicitudin ut
                          est. In fringilla dui dui.
                        </p>
                        <a
                          href="#"
                          className="btn btn-outline-primary mb-4 text-capitalize"
                        >
                          {" "}
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </aside>

                <aside className="wrapper__list__article">
                  <h4 className="border_section">tags</h4>
                  <div className="blog-tags p-0">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">#property</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#sea</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#programming</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#sea</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#property</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#life style</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#technology</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#framework</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#sport</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#game</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#wfh</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#sport</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#game</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#wfh</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">#framework</a>
                      </li>
                    </ul>
                  </div>
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
                  <a href="#">
                    <figure>
                      <img
                        src="images/placeholder/500x400.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </a>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;


//hey Next, these are the possible slugs
export async function getStaticPaths(params) {
  const allPosts = await getAllPosts()
  // console.log(allPosts)
  return {
    paths: allPosts.nodes.map((node) => `/category/${node.catslug}`) || [],
    fallback: "blocking",
  }
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  console.log('slug2', params.catslug)
  const menus = await getAllPosts(params.catslug);

  return {
    props: {
      menus,
    },
    revalidate: 10, // In seconds
  };
}
