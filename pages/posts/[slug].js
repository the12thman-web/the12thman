import Link from 'next/link';
import Image from 'next/image';
import { getAllMenus, getAllPosts, getPost } from '../../utils/wpGraph';
import { useSearchParams } from 'next/navigation';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../components/Header';
import { useAmp } from 'next/amp';

export const config = { amp: 'false' };

export default function PostPage({ post, posts, menus }) {
  const isAmp = useAmp();
  const asideData = posts ? posts?.nodes?.slice(12, 16) : [];
  const categoryDataSingle = posts ? posts?.nodes?.slice(10, 11) : [];

  return (
    <>
      <section className="pb-80">
        {isAmp ? (
          <>
            <amp-img
              width="100"
              height="50"
              src="/public/Logo.png"
              alt="a cool image"
              layout="responsive"
            />
            <br />
            <div className="wrap__article-detail-title">
              <h1>{post.title}</h1>
            </div>

            <amp-img
              width="100"
              height="100"
              src={post.featuredImage.node.sourceUrl}
              alt="a cool image"
              layout="responsive"
            />
            <br />
            <div
              className="has-drop-cap-fluid"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </>
        ) : (
          <>
            <Header menus={menus} />
            <div className="container">
              <br />
              <br />
              <div className="row">
                <div className="col-md-8">
                  {/* <!--  content article detail  --> */}
                  {/* <!--  Article Detail  --> */}
                  <div className="wrap__article-detail">
                    <div className="wrap__article-detail-title">
                      <h1>{post.title}</h1>
                    </div>
                    <hr />
                    <div className="wrap__article-detail-info">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Image
                            className="image-profile"
                            src={post.featuredImage.node.sourceUrl}
                            width={80}
                            height={50}
                          />
                        </li>
                        <li className="list-inline-item">
                          <span className="list-inline-item me-2">by</span>
                          <a href="#">{post.author.node.name}</a>
                        </li>
                        <li className="list-inline-item me-2">
                          <span className="text-dark text-capitalize ml-1">
                            {post.date}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="wrap__article-detail-image mt-4">
                      <Image
                        className="image-profile"
                        src={post.featuredImage.node.sourceUrl}
                        width={800}
                        height={500}
                      />
                    </div>
                    <div className="wrap__article-detail-content">
                      <div className="total-views">
                        <ul id="social_link" className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="btn btn-social rounded text-white facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="btn btn-social rounded text-white twitter"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="btn btn-social rounded text-white instagram"
                            >
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="has-drop-cap-fluid"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></div>
                    </div>
                  </div>
                  {/* <!--  end tags --> */}

                  {/* <!--  authors --> */}

                  {/* <div className="wrap__profile">
                    <div className="wrap__profile-author">
                      <Image
                        className="img-fluid rounded-circle"
                        src={post.featuredImage.node.sourceUrl}
                        width={80}
                        height={80}
                      />

                      <div className="wrap__profile-author-detail">
                        <div className="wrap__profile-author-detail-name">
                          author
                        </div>
                        <h4>{post.author.node.name}</h4>
                      </div>
                    </div>
                  </div> */}
                  {/* <!--  end author --> */}

                  <div className="clearfix"></div>

                  <div className="related-article"></div>
                </div>
                <div className="col-md-4">
                  <div className="sticky-top">
                    <aside className="wrapper__list__article ">
                      <div className="wrapper__list__article-small">
                        {asideData.map(item => {
                          return (
                            <div className="mb-3">
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
                                            {item.author.node.name}
                                          </span>
                                        </li>
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
                          );
                        })}

                        {/* <!--  Post Article  --> */}
                        <div className="article__entry">
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
                                    read more
                                  </Link>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths(params) {
  const allPosts = await getAllPosts();
  return {
    paths: allPosts
      ? allPosts.nodes.map(node => {
          // console.log('static path post', '/posts/' + node.slug);
          return `/posts/${node.slug}`;
        }) || []
      : [],
    fallback: 'blocking',
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }, category) {
  const post = await getPost(params.slug);
  const menus = await getAllMenus();

  const posts = await getAllPosts((category = post.categories.nodes[0].name));

  return {
    props: {
      post,
      menus,
      posts,
    },
    revalidate: 10, // In seconds
  };
}
