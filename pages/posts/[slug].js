import Link from 'next/link';
import Image from 'next/image';
import { getAllMenus, getAllPosts, getPost } from '../../utils/wpGraph';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../components/Header';
// import logo from '../../public/Logo.png';
import { useAmp } from 'next/amp';

export const config = { amp: 'false' };

export default function PostPage({ post, posts, menus }) {
  // console.log('post1', post);
  const isAmp = useAmp();
  const categoryTagsData = post?.tags?.nodes;
  const asideData = posts?.nodes?.slice(12, 16);
  const categoryDataSingle = posts?.nodes?.slice(10, 11);

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
                <div className="col-md-12">
                  {/* <!--  breaddcrumb  --> */}
                  {/* <!--  Breadcrumb  --> */}
                  {/* <!--  end breadcrumb  --> */}
                </div>
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

                          {/* <figure className="image-profile">
                        <img src={post.featuredImage.node.sourceUrl} alt="" />
                      </figure> */}
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
                        <li className="list-inline-item">
                          <span className="text-dark text-capitalize">
                            the12thman
                          </span>
                          <a href="#">.in</a>
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

                      {/* <img
                    src={post.featuredImage.node.sourceUrl}
                    alt=""
                    className="img-fluid"
                  /> */}
                    </div>
                    <div className="wrap__article-detail-content">
                      <div className="total-views">
                        {/* <div className="total-views-read">
                      15.k
                      <span>views</span>
                    </div> */}

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
                          {/* <li className="list-inline-item">
                            <a
                              href="#"
                              className="btn btn-social rounded text-white telegram"
                            >
                              <i className="fa fa-telegram"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="btn btn-social rounded text-white linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li> */}
                        </ul>
                      </div>
                      <div
                        className="has-drop-cap-fluid"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></div>
                    </div>
                  </div>
                  {/* <!--  end content article detail  --> */}

                  {/* <!--  tags  --> */}
                  {/* {categoryTagsData.map((item) => {
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
              })} */}

                  {/* <div className="blog-tags">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-tags"></i>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{post.tags.nodes[0].name}</a>
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
                </ul>
              </div> */}
                  {/* <!--  end tags --> */}

                  {/* <!--  authors --> */}
                  {/* <!--  Profile author  --> */}
                  <div className="wrap__profile">
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
                        {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis laboriosam ad beatae itaque ea non placeat
                      officia ipsum praesentium! Ullam?
                    </p> */}
                        {/* <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="btn btn-social btn-social-o facebook "
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="btn btn-social btn-social-o twitter "
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="btn btn-social btn-social-o instagram "
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="btn btn-social btn-social-o telegram "
                        >
                          <i className="fa fa-telegram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="btn btn-social btn-social-o linkedin "
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul> */}
                      </div>
                    </div>
                  </div>
                  {/* <!--  end author --> */}

                  {/* <!--  comment  --> */}
                  {/* <!--  Comment   --> */}
                  <div id="comments" className="comments-area">
                    {/* <h3 className="comments-title">2 Comments:</h3> */}

                    <ol className="comment-list">
                      {/* <li className="comment">
                    <aside className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            className="avatar"
                            src={post.featuredImage.node.sourceUrl}
                            width={80}
                            height={80}
                          />

                          <b className="fn">{post.comments.nodes.name}</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <a href="#">
                            <span>{post.date}</span>
                          </a>
                        </div>
                      </div>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>

                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </aside>

                    <ol className="children">
                      <li className="comment">
                        <aside className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-author vcard">
                              <Image
                                className="avatar"
                                src={post.featuredImage.node.sourceUrl}
                                width={80}
                                height={80}
                              />

                              <b className="fn">Sinmun</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              <a href="#">
                                <span>April 24, 2019 at 10:59 am</span>
                              </a>
                            </div>
                          </div>

                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>

                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </aside>
                      </li>
                    </ol>
                  </li> */}

                      {/* <li className="comment">
                    <aside className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="images/placeholder/80x80.jpg"
                            className="avatar"
                            alt="image"
                          />
                          <b className="fn">Sinmun</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <a href="#">
                            <span>April 24, 2019 at 10:59 am</span>
                          </a>
                        </div>
                      </div>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>

                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </aside>
                  </li> */}
                    </ol>

                    <div className="comment-respond">
                      <h3 className="comment-reply-title">Leave a Reply</h3>

                      <form className="comment-form">
                        <p className="comment-notes">
                          <span id="email-notes">
                            Your email address will not be published.
                          </span>
                          Required fields are marked
                          <span className="required">*</span>
                        </p>
                        {/* <p className="comment-form-comment">
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols="45"
                        rows="5"
                        maxLength="65525"
                        required="required"
                      ></textarea>
                    </p> */}
                        <p className="comment-form-author">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="author"
                            name="name"
                            required="required"
                          />
                        </p>
                        <p className="comment-form-email">
                          <label htmlFor="email">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required="required"
                          />
                        </p>
                        <p className="comment-form-url">
                          <label htmlFor="url">Website</label>
                          <input type="url" id="url" name="url" />
                        </p>
                        <p className="comment-form-cookies-consent">
                          <input
                            type="checkbox"
                            // value="yes"
                            name="wp-comment-cookies-consent"
                            id="wp-comment-cookies-consent"
                          />
                          <label htmlFor="wp-comment-cookies-consent">
                            Save my name, email, and website in this browser for
                            the next span I comment.
                          </label>
                        </p>
                        <p className="form-submit">
                          <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="submit"
                            // value="Post Comment"
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Comment  -->  */}
                  {/* <!--  end comment  --> */}
                  {/* <div className="row">
                <div className="col-md-6">
                  <div className="single_navigation-prev">
                    <a href="#">
                      <span>previous post</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, similique.
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_navigation-next text-left text-md-right">
                    <a href="#">
                      <span>next post</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perferendis, nesciunt.
                    </a>
                  </div>
                </div>
              </div> */}
                  <div className="clearfix"></div>

                  <div className="related-article">
                    {/* <h4>you may also like</h4> */}
                    <div className="col-md-8 ">
                      {/* <div className="main_carousel">
                    <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}>
                      {mainCarousel.map((items) => {
                        return (
                          <div className="item">
                            <div className="card__post">
                              <div className="card__post__body">
                                <Link href={`/posts/${items.slug}`}>
                                  <Image
                                    src={items.featuredImage.node.sourceUrl}
                                    className="img-fluid"
                                    alt=""
                                    width={800}
                                    height={600}
                                  />
                                </Link>
                                <div className="card__post__content bg__post-cover">
                                  <div className="card__post__category">
                                    {items.categories.nodes[0].name}
                                  </div>
                                  <div className="card__post__title">
                                    <h2>
                                      <Link href={`/posts/${items.slug}`}>
                                        {items.title}
                                      </Link>
                                    </h2>
                                  </div>
                                  <div className="card__post__author-info">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <Link href={`/posts/${items.slug}`}>
                                          {items.author.node.name}
                                        </Link>
                                      </li>
                                      <li className="list-inline-item">
                                        <span>{items.date}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="sticky-top">
                    <aside className="wrapper__list__article ">
                      {/* <div className="mb-4">
                    <div className="widget__form-search-bar  ">
                      <div className="row no-gutters">
                        <div className="col">
                          <input
                            className="form-control border-secondary border-right-0 rounded-0"
                          
                            placeholder="Search"
                          />
                        </div>
                        <div className="col-auto">
                          <button className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
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
                                    {' '}
                                    read more
                                  </Link>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </aside>

                    {/* <!--  social media  --> */}
                    {/* <aside className="wrapper__list__article">
                  <h4 className="border_section">stay conected</h4>
                  <div className="wrap__social__media">
                    <a href="#" target="_blank">
                      <div className="social__media__widget facebook">
                        <span className="social__media__widget-icon">
                          <i className="fa fa-facebook"></i>
                        </span>
                        <span className="social__media__widget-counter">
                          19,243 fans
                        </span>
                        <span className="social__media__widget-name">like</span>
                      </div>
                    </a>
                    <a href="#" target="_blank">
                      <div className="social__media__widget twitter">
                        <span className="social__media__widget-icon">
                          <i className="fa fa-twitter"></i>
                        </span>
                        <span className="social__media__widget-counter">
                          2.076 followers
                        </span>
                        <span className="social__media__widget-name">
                          follow
                        </span>
                      </div>
                    </a>
                    <a href="#" target="_blank">
                      <div className="social__media__widget youtube">
                        <span className="social__media__widget-icon">
                          <i className="fa fa-youtube"></i>
                        </span>
                        <span className="social__media__widget-counter">
                          15,200 followers
                        </span>
                        <span className="social__media__widget-name">
                          subscribe
                        </span>
                      </div>
                    </a>
                  </div>
                </aside> */}

                    {/* <aside className="wrapper__list__article">
                  <h4 className="border_section">tags</h4>
                  {categoryTagsData.map(item => {
                    return (
                      <>
                        <div className="blog-tags p-0">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link href={`/category/${item.catslug}`}>
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </>
                    );
                  })}
                </aside> */}

                    {/* <aside className="wrapper__list__article">
                  <h4 className="border_section">newsletter</h4>
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
                </aside> */}

                    {/* <aside className="wrapper__list__article">
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
                </aside> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>

    // <div className="container pt-5">
    //   <h1 className="text-center pb-5">{post.title}</h1>
    //   <div
    //     className="card-text pb-5"
    //     dangerouslySetInnerHTML={{ __html: post.content }}
    //   ></div>
    //   {/* <Link href="/">
    //     <a className="btn btn-primary">Back to Home</a>
    //   </Link> */}
    // </div>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths(params) {
  const allPosts = await getAllPosts();
  // console.log(allPosts);
  return {
    paths:
      allPosts.nodes.map(node => {
        console.log('static path post', '/posts/' + node.slug);
        return `/posts/${node.slug}`;
      }) || [],
    fallback: 'blocking',
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  // console.log('slug', params.slug);
  const post = await getPost(params.slug);
  const menus = await getAllMenus();

  const posts = await getAllPosts();

  return {
    props: {
      post,
      menus,
      posts,
    },
    revalidate: 10, // In seconds
  };
}
