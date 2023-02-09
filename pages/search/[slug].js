import React from "react";
import { getAllPosts } from "../../utils/wpGraph";

const search = ({posts}) => {
  console.log('posts: ', posts);

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="wrap__search-result">
                <div className="wrap__search-result-keyword">
                  <h2>
                    Search results for keyword:
                    <span className="text-primary">"corona virus"</span>
                    found in 4 posts.
                  </h2>
                </div>
              </div>
              {/* <!-- Post Article List --> */}
              <div className="card__post card__post-list card__post__transition mt-30">
                <div className="row ">
                  <div className="col-md-5">
                    <div className="card__post__transition">
                      <a href="/">
                        <img
                          src="images/placeholder/500x400.jpg"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 my-auto pl-0">
                    <div className="card__post__body ">
                      <div className="card__post__content  ">
                        <div className="card__post__category ">travel</div>
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
                          <h5>
                            <a href="/">
                              Exercitation Ullamco Laboris Nisi Ut Aliquip
                            </a>
                          </h5>
                          <p className="d-none d-lg-block d-xl-block mb-0">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est. In fringilla dui dui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Post Article List --> */}
              <div className="card__post card__post-list card__post__transition mt-30">
                <div className="row ">
                  <div className="col-md-5">
                    <div className="card__post__transition">
                      <a href="/">
                        <img
                          src="images/placeholder/500x400.jpg"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 my-auto pl-0">
                    <div className="card__post__body ">
                      <div className="card__post__content  ">
                        <div className="card__post__category ">travel</div>
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
                          <h5>
                            <a href="/">
                              Exercitation Ullamco Laboris Nisi Ut Aliquip
                            </a>
                          </h5>
                          <p className="d-none d-lg-block d-xl-block mb-0">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est. In fringilla dui dui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Post Article List --> */}
              <div className="card__post card__post-list card__post__transition mt-30">
                <div className="row ">
                  <div className="col-md-5">
                    <div className="card__post__transition">
                      <a href="/">
                        <img
                          src="images/placeholder/500x400.jpg"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 my-auto pl-0">
                    <div className="card__post__body ">
                      <div className="card__post__content  ">
                        <div className="card__post__category ">travel</div>
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
                          <h5>
                            <a href="/">
                              Exercitation Ullamco Laboris Nisi Ut Aliquip
                            </a>
                          </h5>
                          <p className="d-none d-lg-block d-xl-block mb-0">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est. In fringilla dui dui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Post Article List --> */}
              <div className="card__post card__post-list card__post__transition mt-30">
                <div className="row ">
                  <div className="col-md-5">
                    <div className="card__post__transition">
                      <a href="/">
                        <img
                          src="images/placeholder/500x400.jpg"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 my-auto pl-0">
                    <div className="card__post__body ">
                      <div className="card__post__content  ">
                        <div className="card__post__category ">travel</div>
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
                          <h5>
                            <a href="/">
                              Exercitation Ullamco Laboris Nisi Ut Aliquip
                            </a>
                          </h5>
                          <p className="d-none d-lg-block d-xl-block mb-0">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est. In fringilla dui dui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default search;


//hey Next, these are the possible slugs
export async function getStaticPaths(params) {
  console.log("getStaticPaths")
  const allPosts = await getAllPosts('',params.slug);
  console.log(allPosts);
  return {
    paths: [],
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  console.log("getStaticProps", params.slug);
  const posts = await getAllPosts('',params.slug);

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}

