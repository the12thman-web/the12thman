import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import { getAllPosts, getPost } from "../../utils/wpGraph";

export default function PostPage({ post, allcatPost }) {
  const diffCategoryCarousel = allcatPost.nodes.slice(15, 20);
  const categoryDataSlider = allcatPost.nodes.slice(9, 13);
  const categoryDataSingle = allcatPost.nodes.slice(14, 15);
  const categoryTagsData = allcatPost.nodes;
  console.log("diffCategoryCarousel", diffCategoryCarousel);

  //   return (
  //     <>

  //       <section class="bg-white pb-60">
  //         <div class="container mt-4">
  //         <div className="carousel slide" data-bs-touch="false">
  //           {
  //             diffCategoryCarousel.map((item, postId) => {
  //               return (
  //                 <>

  //                     <div className="carousel-inner" key={postId}>
  //                       <div className="carousel-item active">
  //                         <Link href={`/posts/${item.slug}`}>
  //                           <Image
  //                             src={item.featuredImage.node.sourceUrl}
  //                             className="img-fluid"
  //                             alt=""
  //                             width={500}
  //                             height={400}
  //                           />
  //                         </Link>
  //                         {/* <img src="..." className="d-block w-100" alt="..." /> */}
  //                       </div>
  //                       <div className="carousel-item">
  //                         <Link href={`/posts/${item.slug}`}>
  //                           <Image
  //                             src={item.featuredImage.node.sourceUrl}
  //                             className="img-fluid"
  //                             alt=""
  //                             width={500}
  //                             height={400}
  //                           />
  //                         </Link>
  //                         {/* <img src="..." className="d-block w-100" alt="..." /> */}
  //                       </div>
  //                       <div className="carousel-item">
  //                         <Link href={`/posts/${item.slug}`}>
  //                           <Image
  //                             src={item.featuredImage.node.sourceUrl}
  //                             className="img-fluid"
  //                             alt=""
  //                             width={500}
  //                             height={400}
  //                           />
  //                         </Link>
  //                         {/* <img src="..." className="d-block w-100" alt="..." /> */}
  //                       </div>
  //                     </div>
  //                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
  //                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //                       <span className="visually-hidden">Previous</span>
  //                     </button>
  //                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
  //                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //                       <span className="visually-hidden">Next</span>
  //                     </button>

  //                 </>
  //               )
  //             })
  //           }
  //  </div>
  //           <div class="row">
  //             <div class="col-md-8">
  //               {/*  Social media animation */}
  //               <div class="social__media__animation ">
  //                 <ul class="menu topLeft bg__card-shadow">
  //                   <li class="share bottom">
  //                     <i class="fa fa-share-alt"></i>
  //                     <ul class="list__submenu">
  //                       <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
  //                       <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
  //                       <li><a href="#" class="googlePlus"><i class="fa fa-whatsapp"></i></a></li>
  //                       <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
  //                     </ul>
  //                   </li>
  //                 </ul>
  //               </div>
  //               {/*  Article detail */}
  //               <div class="wrap__article-detail">
  //                 <div class="wrap__article-detail-image">
  //                   <Link href={`/posts/slug`}><Image
  //                     className="image-profile"
  //                     src={post.featuredImage.node.sourceUrl}
  //                     width={800}
  //                     height={500}
  //                     alt="xyz"
  //                   /></Link>
  //                 </div>
  //                 <div class="wrap__article-detail-title">
  //                   <h1>
  //                     {post.title}
  //                   </h1>

  //                 </div>
  //                 <hr />
  //                 <div class="wrap__article-detail-info">
  //                   <ul class="list-inline">
  //                     <li class="list-inline-item">
  //                       <Link href={`/posts/slug`}>
  //                         <Image
  //                           className="image-profile"
  //                           src={post.featuredImage.node.sourceUrl}
  //                           width={80}
  //                           height={50}
  //                           alt="xyz"
  //                         /></Link>
  //                     </li>
  //                     <li class="list-inline-item">

  //                       <span>
  //                         by
  //                       </span>
  //                       <a href="#">
  //                         {post.author.node.name}
  //                       </a>
  //                     </li>
  //                     <li class="list-inline-item">
  //                       <span class="text-dark text-capitalize ml-1">
  //                         {post.date}
  //                       </span>
  //                     </li>

  //                     <li class="list-inline-item ">
  //                       <span class="mr-1 ml-1">
  //                         <i class="fa fa-eye"></i>
  //                         220
  //                       </span>

  //                     </li>
  //                     <li class="list-inline-item d-none d-md-block d-lg-none">

  //                       <a href="#comments" class="text-dark">
  //                         <i class="fa fa-comment"></i>
  //                         3 comments
  //                       </a>

  //                     </li>
  //                   </ul>
  //                 </div>
  //                 <hr />

  //                 <div class="wrap__article-detail-content">

  //                   <p class="has-drop-cap-fluid" dangerouslySetInnerHTML={{ __html: post.content }}>

  //                   </p>

  //                 </div>
  //               </div>

  //               {/*  News Tags */}
  //               <div class="blog-tags">
  //                 <ul class="list-inline">
  //                   <li class="list-inline-item">
  //                     <i class="fa fa-tags">
  //                     </i>
  //                   </li>
  //                   <li class="list-inline-item">
  //                     <a href="#">
  //                       {post.tags.nodes.name}
  //                     </a>
  //                   </li>
  //                   <li class="list-inline-item">
  //                     <a href="#">
  //                       #sea
  //                     </a>
  //                   </li>
  //                   <li class="list-inline-item">
  //                     <a href="#">
  //                       #programming
  //                     </a>
  //                   </li>
  //                   <li class="list-inline-item">
  //                     <a href="#">
  //                       #sea
  //                     </a>
  //                   </li>
  //                   <li class="list-inline-item">
  //                     <a href="#">
  //                       #property
  //                     </a>
  //                   </li>
  //                 </ul>
  //               </div>


  //               {/*  Profile author */}
  //               <div class="wrap__profile">
  //                 <div class="wrap__profile-author">
  //                   <Link href={`/posts/slug`}>
  //                     <Image
  //                       className="img-fluid rounded-circle"
  //                       src={post.featuredImage.node.sourceUrl}
  //                       width={80}
  //                       height={80}
  //                       alt="xyz"
  //                     />
  //                   </Link>
  //                   <div class="wrap__profile-author-detail">
  //                     <div class="wrap__profile-author-detail-name">author</div>
  //                     <h4>{post.author.nodename}</h4>
  //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam ad
  //                       beatae itaque ea non
  //                       placeat officia ipsum praesentium! Ullam?</p>
  //                     <ul class="list-inline">
  //                       <li class="list-inline-item">
  //                         <a href="#" class="btn btn-social btn-social-o facebook ">
  //                           <i class="fa fa-facebook"></i>
  //                         </a>
  //                       </li>
  //                       <li class="list-inline-item">
  //                         <a href="#" class="btn btn-social btn-social-o twitter ">
  //                           <i class="fa fa-twitter"></i>
  //                         </a>
  //                       </li>
  //                       <li class="list-inline-item">
  //                         <a href="#" class="btn btn-social btn-social-o instagram ">
  //                           <i class="fa fa-instagram"></i>
  //                         </a>
  //                       </li>
  //                       <li class="list-inline-item">
  //                         <a href="#" class="btn btn-social btn-social-o telegram ">
  //                           <i class="fa fa-telegram"></i>
  //                         </a>
  //                       </li>
  //                       <li class="list-inline-item">
  //                         <a href="#" class="btn btn-social btn-social-o linkedin ">
  //                           <i class="fa fa-linkedin"></i>
  //                         </a>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //               </div>


  //               {/*  Comment  */}
  //               <div id="comments" class="comments-area">
  //                 <h3 class="comments-title">2 Comments:</h3>

  //                 <ol class="comment-list">
  //                   <li class="comment">
  //                     <aside class="comment-body">
  //                       <div class="comment-meta">
  //                         <div class="comment-author vcard">
  //                           <Link href={`/posts/slug`}>
  //                             <Image
  //                               className="avatar"
  //                               src={post.featuredImage.node.sourceUrl}
  //                               width={80}
  //                               height={80}
  //                               alt="xyz"
  //                             />
  //                           </Link>
  //                           <b className="fn">{post.comments.nodes.name}</b>
  //                           <span class="says">says:</span>
  //                         </div>

  //                         <div class="comment-metadata">
  //                           <a href="#">
  //                             <span>{post.date}</span>
  //                           </a>
  //                         </div>
  //                       </div>

  //                       <div class="comment-content">
  //                         <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
  //                           when an unknown
  //                           printer took a galley of type and scrambled it to make a type specimen book.
  //                         </p>
  //                       </div>

  //                       <div class="reply">
  //                         <a href="#" class="comment-reply-link">Reply</a>
  //                       </div>
  //                     </aside>


  //                   </li>


  //                 </ol>


  //               </div>
  //               {/*  Comment */}


  //               <div class="clearfix"></div>

  //               <div class="related-article">
  //                 <h4>
  //                   you may also like
  //                 </h4>

  //                 {/* <div class="article__entry-carousel-three">
  //                   {
  //                     diffCategoryCarousel.map((items, postId) => {
  //                       return (
  //                         <>
  //                           <div class="item" key={postId}>
  //                             <div class="article__entry">
  //                               <div class="article__image">
  //                                 <Link href={`/posts/${items.slug}`}>
  //                                   <Image
  //                                     src={items.featuredImage.node.sourceUrl}
  //                                     className="img-fluid"
  //                                     alt=""
  //                                     width={500}
  //                                     height={400}
  //                                   />
  //                                 </Link>
  //                               </div>
  //                               <div class="article__content">
  //                                 <ul class="list-inline">
  //                                   <li class="list-inline-item">
  //                                     <span class="text-primary">
  //                                       by   {items.author.node.name}
  //                                     </span>
  //                                   </li>
  //                                   <li class="list-inline-item">
  //                                     <span>
  //                                       {items.date}
  //                                     </span>
  //                                   </li>

  //                                 </ul>
  //                                 <h5>
  //                                   <Link href={`/posts/${items.slug}`}>
  //                                     {items.title.slice(0, 16)}
  //                                   </Link>
  //                                 </h5>

  //                               </div>
  //                             </div>
  //                           </div>

  //                         </>
  //                       )
  //                     })
  //                   }


  //                 </div> */}

  //               </div>
  //             </div>
  //             <div class="col-md-4 mt-4">
  //               <aside class="wrapper__list__article">
  //                 <div class="wrapper__list__article-small">
  //                   {/*  Post Article */}
  //                   {categoryDataSlider.map((item, postId) => {
  //                     return (
  //                       <>
  //                         <div class="article__entry" key={postId}>
  //                           <div class="article__image">
  //                             <Link href={`/posts/${item.slug}`}>
  //                               <Image
  //                                 className="image-fluid"
  //                                 src={item.featuredImage.node.sourceUrl}
  //                                 width={500}
  //                                 height={400}
  //                                 alt={item.featuredImage.node.altText}
  //                               />
  //                             </Link>
  //                           </div>
  //                           <div class="article__content">
  //                             <div class="article__category">
  //                               {item.categories.nodes[0].name}
  //                             </div>
  //                             <ul class="list-inline">
  //                               <li class="list-inline-item">
  //                                 <span class="text-primary">
  //                                   by {item.author.node.name}
  //                                 </span>
  //                               </li>
  //                               <li class="list-inline-item">
  //                                 <span class="text-dark text-capitalize">
  //                                   {item.date}
  //                                 </span>
  //                               </li>

  //                             </ul>
  //                             <h5>
  //                               <Link href={`/posts/${item.slug}`}>
  //                                 {item.title.slice(0, 20)}
  //                               </Link>
  //                             </h5>

  //                             <Link href={`/posts/${item.slug}`} class="btn btn-outline-primary mb-4 text-capitalize"> read more </Link>
  //                           </div>
  //                         </div>
  //                       </>
  //                     )
  //                   })}


  //                   <div>
  //                     {categoryDataSlider.map((item, postId) => {
  //                       return (
  //                         <>
  //                           <div className="mb-3" key={postId}>
  //                             {/* <!-- Post Article --> */}
  //                             <div className="card__post card__post-list">
  //                               <div className="image-sm">
  //                                 <Link href={`/posts/${item.slug}`}>
  //                                   <Image
  //                                     className="image-profile"
  //                                     src={item.featuredImage.node.sourceUrl}
  //                                     width={500}
  //                                     height={400}
  //                                     alt={item.featuredImage.node.altText}
  //                                   />
  //                                 </Link>
  //                               </div>

  //                               <div className="card__post__body ">
  //                                 <div className="card__post__content">
  //                                   <div className="card__post__author-info mb-2">
  //                                     <ul className="list-inline">
  //                                       <li className="list-inline-item">
  //                                         <span className="text-primary">
  //                                           by {item.author.node.name}
  //                                         </span>
  //                                       </li>
  //                                       <li className="list-inline-item">
  //                                         <span className="text-dark text-capitalize">
  //                                           descember 09, 2016
  //                                         </span>
  //                                       </li>
  //                                     </ul>
  //                                   </div>
  //                                   <div className="card__post__title">
  //                                     <h6>
  //                                       <Link href={`/posts/${item.slug}`}>
  //                                         {item.title.slice(0, 20)}
  //                                       </Link>
  //                                     </h6>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </>
  //                       );
  //                     })}

  //                   </div>

  //                 </div>
  //               </aside>

  //               {/*  social media */}
  //               <aside class="wrapper__list__article">
  //                 <h4 class="border_section">stay conected</h4>
  //                 {/*  widget Social media */}
  //                 <div class="wrap__social__media">
  //                   <a href="#" target="_blank">
  //                     <div class="social__media__widget facebook">
  //                       <span class="social__media__widget-icon">
  //                         <i class="fa fa-facebook"></i>
  //                       </span>
  //                       <span class="social__media__widget-counter">
  //                         19,243 fans
  //                       </span>
  //                       <span class="social__media__widget-name">
  //                         like
  //                       </span>
  //                     </div>
  //                   </a>
  //                   <a href="#" target="_blank">
  //                     <div class="social__media__widget twitter">
  //                       <span class="social__media__widget-icon">
  //                         <i class="fa fa-twitter"></i>
  //                       </span>
  //                       <span class="social__media__widget-counter">
  //                         2.076 followers
  //                       </span>
  //                       <span class="social__media__widget-name">
  //                         follow
  //                       </span>
  //                     </div>
  //                   </a>
  //                   <a href="#" target="_blank">
  //                     <div class="social__media__widget youtube">
  //                       <span class="social__media__widget-icon">
  //                         <i class="fa fa-youtube"></i>
  //                       </span>
  //                       <span class="social__media__widget-counter">
  //                         15,200 followers
  //                       </span>
  //                       <span class="social__media__widget-name">
  //                         subscribe
  //                       </span>
  //                     </div>
  //                   </a>

  //                 </div>
  //               </aside>
  //               {/*  End social media */}

  //               {/*  Newsletter news */}
  //               <aside class="wrapper__list__article">
  //                 <h4 class="border_section">newsletter</h4>
  //                 {/*  Form Subscribe */}
  //                 <div class="widget__form-subscribe bg__card-shadow">
  //                   <h6>
  //                     The most important world news and events of the day.
  //                   </h6>
  //                   <p><small>Get magzrenvi daily newsletter on your inbox.</small></p>
  //                   <div class="input-group ">
  //                     <input type="email" class="form-control" placeholder="Your email address" />
  //                     <div class="input-group-append">
  //                       <button class="btn btn-primary" type="submit">sign up</button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </aside>
  //               {/*  End Newsletter news */}

  //               <div class="sidebar-section">
  //                 <aside class="wrapper__list__article">

  //                   {/*  List Article */}
  //                   {categoryDataSlider.map((item, postId) => {
  //                     return (
  //                       <>
  //                         <div class="card__post__content p-3 card__post__body-border-all" key={postId}>
  //                           <div class="card__post__category text-capitalize">
  //                             {item.categories.nodes.names}
  //                           </div>
  //                           <div class="card__post__author-info mb-2">
  //                             <ul class="list-inline mb-0">
  //                               <li class="list-inline-item">
  //                                 <span class="text-primary">
  //                                   by {item.author.node.name}
  //                                 </span>
  //                               </li>
  //                               <li class="list-inline-item">
  //                                 <span class="text-dark text-capitalize">
  //                                   {item.date}
  //                                 </span>
  //                               </li>

  //                             </ul>
  //                           </div>
  //                           <div class="card__post__title">
  //                             <h5>
  //                               <Link href={`/posts/${item.slug}`}>
  //                                 {item.title.slice(0, 20)}
  //                               </Link>
  //                             </h5>
  //                           </div>

  //                         </div>
  //                       </>
  //                     )
  //                   })}


  //                 </aside>

  //                 {/*  Tags news */}
  //                 <aside class="wrapper__list__article">
  //                   <h4 class="border_section">tags</h4>
  //                   {categoryTagsData.map((item, postId) => {
  //                     return (
  //                       <>
  //                         <div className="blog-tags p-0" key={postId}>
  //                           <ul className="list-inline">
  //                             <li className="list-inline-item">
  //                               <Link href="#">{item.tags.nodes.name}</Link>
  //                             </li>
  //                           </ul>
  //                         </div>
  //                       </>
  //                     );
  //                   })}
  //                 </aside>
  //                 {/*  End Tags news */}



  //               </div>
  //             </div>
  //             <div class="clearfix"></div>

  //           </div>

  //         </div>

  //       </section>
  //     </>
  //   )
  return (
    <>
      <section className="pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {/* <!--  content article detail  --> */}

              <div className="wrap__article-detail">
                <div className="wrap__article-detail-title">
                  {/* <Link href={`/posts/${item.slug}`}> <h1>{post.title}</h1></Link> */}
                </div>
                <hr />
                <div className="wrap__article-detail-info">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link href={`/posts/slug`}>
                        <Image
                          className="image-profile"
                          src={post.featuredImage.node.sourceUrl}
                          width={80}
                          height={50}
                          alt="xyz"
                        /></Link>

                    </li>
                    <li className="list-inline-item">
                      <span className="list-inline-item me-2">by</span>
                      <Link href="#">{post.author.node.name}</Link>
                    </li>
                    <li className="list-inline-item me-2">
                      <span className="text-dark text-capitalize ml-1">
                        {post.date}
                      </span>
                    </li>
                    {/* <li className="list-inline-item">
                      <span className="text-dark text-capitalize">
                        the12thman
                      </span>
                      <Link  href="#">.in</Link>
                    </li> */}
                  </ul>
                </div>

                <div className="wrap__article-detail-image mt-4">
                  <Link href={`/posts/slug`}>
                    <Image
                      className="image-profile"
                      src={post.featuredImage.node.sourceUrl}
                      width={800}
                      height={500}
                      alt="xyz"
                    />
                  </Link>
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
                        <Link className="btn btn-social-o facebook" href="#">
                          <i className="fa fa-facebook-f"></i>
                          <span>facebook</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="btn btn-social-o twitter" href="#">
                          <i className="fa fa-twitter"></i>
                          <span>twitter</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="btn btn-social-o whatsapp" href="#">
                          <i className="fa fa-whatsapp"></i>
                          <span>whatsapp</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="btn btn-social-o telegram" href="#">
                          <i className="fa fa-telegram"></i>
                          <span>telegram</span>
                        </Link>
                      </li>

                      <li className="list-inline-item">
                        <Link className="btn btn-linkedin-o linkedin" href="#">
                          <i className="fa fa-linkedin"></i>
                          <span>linkedin</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="has-drop-cap-fluid"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
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
                    <Link href="#">{post.tags.nodes.name}</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">#sea</Link>
                  </li>
                </ul>
              </div>
              {/* <!--  end tags --> */}

              {/* <!--  authors --> */}
              {/* <!--  Profile author  --> */}
              <div className="wrap__profile">
                <div className="wrap__profile-author">
                  <Link href={`/posts/slug`}>
                    <Image
                      className="img-fluid rounded-circle"
                      src={post.featuredImage.node.sourceUrl}
                      width={80}
                      height={80}
                      alt="xyz"
                    />
                  </Link>
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
                        <Link
                          href="#"
                          className="btn btn-social btn-social-o facebook "
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="#"
                          className="btn btn-social btn-social-o twitter "
                        >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="#"
                          className="btn btn-social btn-social-o instagram "
                        >
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="#"
                          className="btn btn-social btn-social-o telegram "
                        >
                          <i className="fa fa-telegram"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="#"
                          className="btn btn-social btn-social-o linkedin "
                        >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--  end author --> */}

              {/* <!--  Comment   --> */}
              <div id="comments" className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>

                <ol className="comment-list">
                  <li className="comment">
                    <aside className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <Link href={`/posts/slug`}>
                            <Image
                              className="avatar"
                              src={post.featuredImage.node.sourceUrl}
                              width={80}
                              height={80}
                              alt="xyz"
                            />
                          </Link>
                          <b className="fn">{post.comments.nodes.name}</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <Link href="#">
                            <span>{post.date}</span>
                          </Link>
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
                        <Link href="#" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </aside>

                    <ol className="children">
                      <li className="comment">
                        <aside className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-author vcard">
                              <Link href={`/posts/slug`}>
                                <Image
                                  className="avatar"
                                  src={post.featuredImage.node.sourceUrl}
                                  width={80}
                                  height={80}
                                  alt="xyz"
                                />
                              </Link>
                              <b className="fn">Sinmun</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              <Link href="#">
                                <span>April 24, 2019 at 10:59 am</span>
                              </Link>
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
                            <Link href="#" className="comment-reply-link">
                              Reply
                            </Link>
                          </div>
                        </aside>
                      </li>
                    </ol>
                  </li>
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
                        maxLength="65525"
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

              {/* <!--  end comment  --> */}

              <div className="clearfix"></div>

              {/* ------------carousel details--------------- */}
              <div class="related-article">
                <h4>
                  you may also like
                </h4>

                <div class="article__entry-carousel-three d-flex">
                  {
                    diffCategoryCarousel.map((items, postId) => {
                      return (
                        <>
                          <div class="item" key={postId}>

                            <div class="article__entry">
                              <div class="article__image">
                                <Link href={`/posts/${items.slug}`}>
                                  <Image
                                    src={items.featuredImage.node.sourceUrl}
                                    className="img-fluid"
                                    alt=""
                                    width={500}
                                    height={400}
                                  />
                                </Link>
                              </div>
                              <div class="article__content">
                                <ul class="list-inline">
                                  <li class="list-inline-item">
                                    <span class="text-primary">
                                      by   {items.author.node.name}
                                    </span>
                                  </li>
                                  <li class="list-inline-item">
                                    <span>
                                      {items.date}
                                    </span>
                                  </li>

                                </ul>
                                <h5>
                                  <Link href={`/posts/${items.slug}`}>
                                    {items.title.slice(0, 16)}
                                  </Link>
                                </h5>

                              </div>
                            </div>
                          </div>
                        </>
                      )
                    }
                    )}


                </div>
              </div>

              {/* <div class="related-article">
                <h4>you may also like</h4>
                <div class="article__entry-carousel-three">
                  {diffCategoryCarousel.map((items, postId) => {
                    return (
                      <>
                        <div class="item">
                          <div class="article__entry" key={postId}>
                            <div class="article__image">
                              <Link href={`/posts/${items.slug}`}>
                                <Image
                                  src={items.featuredImage.node.sourceUrl}
                                  className="img-fluid"
                                  alt=""
                                  width={500}
                                  height={400}
                                />
                              </Link>
                            </div>
                            <div class="article__content">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <span class="text-primary"> by  {items.author.node.name} </span>
                                </li>
                                <li class="list-inline-item">
                                  <span> {items.date} </span>
                                </li>
                              </ul>
                              <h5>
                                <Link href={`/posts/${items.slug}`}>
                                  {items.title.slice(0, 16)}
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                  )}
                </div>
              </div> */}
            </div>
            {/* ------------Sidebar details--------------- */}

            <div className="col-md-4 mt-4">
              <div className="sidebar-sticky">
                <aside className="wrapper__list__article ">

                  <div className="wrapper__list__article-small">
                    {categoryDataSlider.map((item, postId) => {
                      return (
                        <>
                          <div className="mb-3" key={postId}>
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
                                        {item.title.slice(0, 20)}
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
                      {categoryDataSingle.map((item, postId) => {
                        return (
                          <>
                            <div className="article__image" key={postId}>
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
                                <Link href={`/posts/${item.slug}`}>{item.title.slice(0, 20)}</Link>
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

                <aside className="wrapper__list__article">
                  <h4 className="border_section">tags</h4>
                  {categoryTagsData.map((item, postId) => {
                    return (
                      <>
                        <div className="blog-tags p-0" key={postId}>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link href="#">{item.tags.nodes.name}</Link>
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
                  <Link href={`/posts/${post.slug}`}>
                    <Image
                      className="image-profile"
                      src={post.featuredImage.node.sourceUrl}
                      width={500}
                      height={400}
                      alt={post.featuredImage.node.altText}
                    />
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths(params) {
  const allPosts = await getAllPosts();
  // console.log(allPosts)
  return {
    paths: allPosts.nodes.map((node) => `/posts/${node.slug}`) || [],
    fallback: "blocking",
  };
}
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  console.log("slug", params.slug);
  console.log("slug", params.slug);
  const post = await getPost(params.slug);
  const allcatPost = await getAllPosts(params.slug);
  return {
    props: {
      post,
      allcatPost,
    },
    revalidate: 10, // In seconds
  };
}
