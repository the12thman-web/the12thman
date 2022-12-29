import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPost } from "../../utils/wpGraph";

export default function PostPage({ post }) {
  // console.log('post', post)
  return (
    <>
      <section className="pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!--  breaddcrumb  --> */}
              {/* <!--  Breadcrumb  --> */}
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
                    <div className="total-views-read">
                      15.k
                      <span>views</span>
                    </div>

                    <ul className="list-inline">
                      <span className="share me-1">share on:</span>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o facebook" href="#">
                          <i className="fa fa-facebook-f"></i>
                          <span>facebook</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o twitter" href="#">
                          <i className="fa fa-twitter"></i>
                          <span>twitter</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o whatsapp" href="#">
                          <i className="fa fa-whatsapp"></i>
                          <span>whatsapp</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o telegram" href="#">
                          <i className="fa fa-telegram"></i>
                          <span>telegram</span>
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a className="btn btn-linkedin-o linkedin" href="#">
                          <i className="fa fa-linkedin"></i>
                          <span>linkedin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="has-drop-cap-fluid"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>

                  {/* <!--  Blockquote   --> */}
                  {/* <blockquote className="block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote> */}
                  {/* <!-- Blockquote  -->  */}

                  {/* <h5>How Tech Startup Survive Without Funding</h5>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia.
                  </p> */}
                </div>
              </div>
              {/* <!--  end content article detail  --> */}

              {/* <!--  tags  --> */}
              {/* <!--  News Tags  --> */}
              <div className="blog-tags">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-tags"></i>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{post.tags.nodes.name}</a>
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
              </div>
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
                  {/* <figure>
                    <img
                      src="images/placeholder/80x80.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </figure> */}
                  <div className="wrap__profile-author-detail">
                    <div className="wrap__profile-author-detail-name">
                      author
                    </div>
                    <h4>{post.author.nodename}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis laboriosam ad beatae itaque ea non placeat
                      officia ipsum praesentium! Ullam?
                    </p>
                    <ul className="list-inline">
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
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--  end author --> */}

              {/* <!--  comment  --> */}
              {/* <!--  Comment   --> */}
              <div id="comments" className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>

                <ol className="comment-list">
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
                          {/* <img
                            src="images/placeholder/80x80.jpg"
                            className="avatar"
                            alt="image"
                          /> */}
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
                              {/* <img
                                src="images/placeholder/80x80.jpg"
                                className="avatar"
                                alt="image"
                              /> */}
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
                  </li>

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
                    <p className="comment-form-comment">
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols="45"
                        rows="5"
                        maxlength="65525"
                        required="required"
                      ></textarea>
                    </p>
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
                        Save my name, email, and website in this browser for the
                        next span I comment.
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
                <h4>you may also like</h4>

                <div className="article__entry-carousel-three">
                  <div className="item">
                    {/* <!--  Post Article  --> */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <Image
                            className="img-fluid"
                            src={post.featuredImage.node.sourceUrl}
                            width={500}
                            height={400}
                          />
                          {/* <img
                            src="images/placeholder/500x400.jpg"
                            alt=""
                            className="img-fluid"
                          /> */}
                        </a>
                      </div>
                      <div className="article__content">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* <!--  Post Article  --> */}
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
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* <!--  Post Article  --> */}
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
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* <!--  Post Article  --> */}
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
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* <!--  Post Article  --> */}
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
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            Maecenas accumsan tortor ut velit pharetra mollis.
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sticky-top">
                <aside className="wrapper__list__article ">
                  {/* <!--  <h4 className="border_section">Sidebar</h4>  --> */}
                  <div className="mb-4">
                    <div className="widget__form-search-bar  ">
                      <div className="row no-gutters">
                        <div className="col">
                          <input
                            className="form-control border-secondary border-right-0 rounded-0"
                            // value=""
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
                  </div>
                  <div className="wrapper__list__article-small">
                    <div className="mb-3">
                      {/* <!--  Post Article  --> */}
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
                                    {post.author.node.name}
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
                              {/* <!--  <p className="d-none d-lg-block d-xl-block">
                        Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                        sollicitudin ut est. In fringilla dui dui.
                    </p>  --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* <!--  Post Article  --> */}
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
                              {/* <!--  <p className="d-none d-lg-block d-xl-block">
                        Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                        sollicitudin ut est. In fringilla dui dui.
                    </p>  --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* <!--  Post Article  --> */}
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
                              {/* <!--  <p className="d-none d-lg-block d-xl-block">
                        Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                        sollicitudin ut est. In fringilla dui dui.
                    </p>  --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!--  Post Article  --> */}
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

                {/* <!--  social media  --> */}
                <aside className="wrapper__list__article">
                  <h4 className="border_section">stay conected</h4>
                  {/* <!--  widget Social media  --> */}
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
                </aside>
                {/* <!--  End social media  --> */}

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
                  {/* <!--  Form Subscribe  --> */}
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
          </div>
        </div>
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
  console.log(allPosts)
  return {
    paths: allPosts.nodes.map((node) => `/posts/${node.slug}`) || [],
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  console.log("slug", params.slug);
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
