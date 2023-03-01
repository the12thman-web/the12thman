import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home = ({
  posts,
  menus,
  IPLcategory,
  cricketPosts,
  footBallPosts,
  motoGPPosts,
}) => {
  // console.log('posts', posts);

  const postData = posts?.nodes;
  const mainCarousel = postData.slice(0, 5);
  const sideCard = postData.slice(5, 7);
  const lowerCarousel = postData.slice(7, 12);

  const IPLData = IPLcategory?.nodes;
  const firstTwoData = IPLData.slice(0, 2);
  const firstTwoLeftData = IPLData.slice(2, 5);
  const firstTwoRightData = IPLData.slice(5, 8);

  const cricketData = cricketPosts?.nodes;
  const leftCricketCardData = cricketData.slice(0, 4);
  const rightCricketCardData = cricketData.slice(4, 8);

  const footBallData = footBallPosts?.nodes;
  const leftFootBallCardData = footBallData.slice(0, 4);
  const rightFootBallCardData = footBallData.slice(4, 8);

  const motoGPData = motoGPPosts?.nodes;
  const motoGPCardData = motoGPData.slice(0, 4);
  const example = IPLData.slice(0, 4);

  console.log('firstTwoData', firstTwoData);
  console.log('example', example);

  return (
    <>
      <Header menus={menus} />

      {/* <!-- Tranding news  carousel-->*/}
      <section className="bg-light pt-20 carouselContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="wrapp__list__article-responsive wrapp__list__article-responsive-carousel"> */}
              <div>
                <Carousel
                  centerMode
                  centerSlidePercentage={33.33}
                  autoPlay
                  interval={5000}
                  transitionTime="5000"
                  infiniteLoop
                  showIndicators={false}
                  showStatus={false}
                  showArrows={false}
                  showThumbs={false}
                >
                  {postData.map((items, index) => {
                    return (
                      <div className="item" key={`home_${index}`}>
                        {/* <!-- Post Article -->*/}
                        <div className="card__post card__post-list" style={{ height: "100px", marginLeft: "8px", overflow: "hidden" }}>
                          <div className="image-sm">
                            <Link href={`/posts/${items.slug}?amp=1`}>
                              <Image
                                src={items.featuredImage?.node.sourceUrl}
                                width={500}
                                height={400}
                                className="img-fluid"
                                alt={items.featuredImage?.node.altText}
                              />
                            </Link>
                          </div>

                          <div className="card__post__body ">
                            <div className="card__post__content">
                              <div className="card__post__author-info mb-2">
                                <ul className="list-inline">
                                  <li key={index} className="list-inline-item">
                                    <span
                                      className="text-dark"
                                      style={{
                                        fontWeight: '800',
                                      }}
                                    >
                                      by {items.author.node.name}
                                    </span>
                                  </li>
                                  {/* <li key={index} className="list-inline-item">
                                    <span className="text-dark text-capitalize">
                                      {items.date}
                                    </span>
                                  </li> */}
                                </ul>
                              </div>
                              <div className="card__post__title">
                                <h6>
                                  <Link
                                    href={`/posts/${items.slug}?amp=1`}
                                    style={{
                                      fontSize: '10px',
                                      opacity: '0.6',
                                    }}
                                  >
                                    {items.title}
                                  </Link>
                                </h6>
                                {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> -->*/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Tranding news carousel -->*/}

      {/* <!-- Popular news -->*/}
      <section>
        {/* <!-- Popular news  header-->*/}
        <div className="popular__news-header">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-8 ">
                <div className="main_carousel">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                  >
                    {mainCarousel.map((items, index) => {
                      return (
                        <div className="item" key={`home__${index}`}>
                          {/* <!-- Post Article -->*/}
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
                                    <Link
                                      href={`/posts/${items.slug}`}
                                      className="text-decoration-none"
                                    >
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
                </div>
              </div>
              <div className="col-md-4">
                <div className="popular__news-right">
                  {/* <!-- Post Article -->*/}
                  {sideCard.map((items, index) => {
                    return (
                      <div className="card__post " key={`home___${index}`}>
                        <div className="card__post__body card__post__transition">
                          <Link href={`/posts/${items.slug}`}>
                            <Image
                              src={items.featuredImage.node.sourceUrl}
                              className="img-fluid"
                              width={600}
                              height={400}
                              alt=""
                            />
                          </Link>
                          <div className="card__post__content bg__post-cover">
                            <div className="card__post__category">
                              {items.categories.nodes[0].name}
                            </div>
                            <div className="card__post__title">
                              <h5>
                                <Link href={`/posts/${items.slug}`}>
                                  {items.title}
                                </Link>
                              </h5>
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Popular news header-->*/}
        {/* <!-- Popular news carousel -->*/}
        <div className="popular__news-header-carousel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top__news__slider">
                  <Carousel
                    centerMode
                    centerSlidePercentage={33.33}
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    set
                    showThumbs={false}
                  >
                    {lowerCarousel.map((items, index) => {
                      return (
                        <div className="item m-2" key={`home_${index}`}>
                          {/* <!-- Post Article -->*/}
                          <div className="article__entry">
                            <div className="article__image">
                              <Link href={`/posts/${items.slug}`}>
                                <Image
                                  src={items.featuredImage.node.sourceUrl}
                                  alt=""
                                  className="img-fluid"
                                  width={500}
                                  height={400}
                                />
                              </Link>
                            </div>
                            <div className="article__content" id='lowerCarContent'>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    {items.author.node.name}
                                  </span>
                                </li>

                                <li className="list-inline-item">
                                  <span>{items.date}</span>
                                </li>
                              </ul>
                              <h5>
                                <Link
                                  href={`/posts/${items.slug}`}
                                  style={{ fontSize: '12px' }}
                                >
                                  {items.title}
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Popular news carousel -->*/}
      </section>
      {/* <!-- End Popular news -->*/}

      {/* <!-- Popular news category -->*/}
      <section className="pt-0">
        <div className="popular__section-news">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="wrapper__list__article">
                  <h4 className="border_section">IPL</h4>
                </div>
                <div className="row ">
                  {firstTwoData.map((items, index) => (
                    <div
                      className="col-sm-12 col-md-6 mb-4"
                      key={`home_${index}`}
                    >
                      {/* <!-- Post Article -->*/}
                      <div className="card__post ">
                        <div className="card__post__body card__post__transition">
                          <Link href={`/posts/${items.slug}`}>
                            <Image
                              src={items.featuredImage.node.sourceUrl}
                              className="img-fluid"
                              alt=""
                              width={600}
                              height={400}
                            />
                          </Link>
                          <div className="card__post__content bg__post-cover">
                            <div className="card__post__category">IPL</div>
                            <div className="card__post__title">
                              <h5>
                                <Link href={`/posts/${items.slug}`}>
                                  {items.title}
                                </Link>
                              </h5>
                            </div>
                            <div className="card__post__author-info">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <Link href={`/posts/${items.slug}`}>
                                    {items.author.node.name}
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <span> {items.date}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row ">
                  <div className="col-sm-12 col-md-6">
                    <div className="wrapp__list__article-responsive">
                      {firstTwoLeftData.map((items, index) => (
                        <div className="mb-3" key={`home_${index}`}>
                          {/* <!-- Post Article -->*/}
                          <div className="card__post card__post-list" id='iplHomeCard'>
                            <div className="image-sm">
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

                            <div className="card__post__body ">
                              <div className="card__post__content">
                                <div className="card__post__author-info mb-2">
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span className="text-primary">
                                        {items.author.node.name}
                                      </span>
                                    </li>
                                    <span className="card__post__category">
                                      IPl
                                    </span>
                                    {/* <li className="list-inline-item">
                                      <span className="text-dark text-capitalize">
                                        {items.date}
                                      </span>
                                    </li> */}
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h6>
                                    <Link
                                      href={`/posts/${items.slug}`}
                                    >
                                      {items.title}
                                    </Link>
                                  </h6>
                                  {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> -->*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 ">
                    <div className="wrapp__list__article-responsive">
                      {firstTwoRightData.map((items, index) => (
                        <div className="mb-3" key={`home_${index}`}>
                          {/* <!-- Post Article -->*/}
                          <div className="card__post card__post-list iplCard" id='iplHomeCard'>
                            <div className="image-sm">
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

                            <div className="card__post__body ">
                              <div className="card__post__content">
                                <div className="card__post__author-info mb-2">
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span className="text-primary">
                                        {items.author.node.name}
                                      </span>
                                    </li>
                                    <span className="card__post__category">
                                      IPL
                                    </span>
                                    {/* <li className="list-inline-item">
                                      <span className="text-dark text-capitalize">
                                        {items.date}
                                      </span>
                                    </li> */}
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h6>
                                    <Link
                                      href={`/posts/${items.slug}`}
                                    >
                                      {items.title}
                                    </Link>
                                  </h6>
                                  {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> -->*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4" id='motogpHomeCss'>
                <div className="sticky-top">
                  <aside className="wrapper__list__article">
                    <h4 className="border_section">MotoGP</h4>
                    <div className="wrapper__list__article-small">
                      {example.map((motoItem, index) => (
                        <div className="mb-3" key={`home_${index}`}>
                          {/* <!-- Post Article -->*/}
                          <div className="card__post card__post-list">
                            <div className="image-sm">
                              <Link href={`/posts/${motoItem.slug}`}>
                                <Image
                                  src={motoItem.featuredImage.node.sourceUrl}
                                  className="img-fluid"
                                  alt=""
                                  width={500}
                                  height={400}
                                />
                              </Link>
                            </div>

                            <div className="card__post__body ">
                              <div className="card__post__content">
                                <div className="card__post__author-info mb-2">
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span className="text-primary">
                                        {motoItem?.author?.node?.name}
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
                                    <Link
                                      href={`/posts/${motoItem.slug}`}
                                      style={{ fontSize: '12px' }}
                                    >
                                      {motoItem.title}
                                    </Link>
                                  </h6>
                                  {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> -->*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Post news carousel -->*/}

        <section>
          <div className="slider-container">
            <div className="container-slider-image-full nopadd">
              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <ol className="carousel-indicators d-none">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      height={960}
                      width={1920}
                      className="d-block w-100"
                      alt="First slide"
                    // src={items.featuredImage.node.sourceUrl}
                    />
                    <div className="carousel-caption d-md-block text-center text-capitalize">
                      <h1
                        className="text-white animated fadeInUp nopadd"
                      // style="animation-delay:1s"
                      >
                        Cricket
                      </h1>
                      <p
                        className="text-white animated fadeInDown text-center"
                      // style="animation-delay:2s"
                      >
                        Find your best tour and start the adventure at the
                        lowest budget and best experiences.{' '}
                      </p>
                      <div
                        className="animated fadeInLeft d-none d-sm-block"
                      // style="animation-delay:2.6s"
                      >
                        <Link
                          href={'/'}
                          className="btn btn-primary text-uppercase"
                        >
                          {' '}
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>

                  {mainCarousel.map((items, index) => (
                    <div className="carousel-item" key={`home_${index}`}>
                      <Image
                        className="d-block w-100"
                        src={items.featuredImage.node.sourceUrl}
                        height={960}
                        width={1920}
                        alt="Second slide"
                      />
                      <div className="carousel-caption d-md-block text-center text-capitalize">
                        <h1
                          className="text-white animated fadeInUp nopadd"
                        // style="animation-delay:1s"
                        >
                          {items.title}
                        </h1>
                        <p
                          className="text-white animated fadeInDown text-center"
                        // style="animation-delay:2s"
                        >
                          Best solution for your transportation from pickup to
                          destination.{' '}
                        </p>
                        <div
                          className="animated fadeInLeft d-none d-sm-block"
                        // style="animation-delay:2.6s"
                        >
                          <Link
                            href={`/posts/${items.slug}`}
                            className="btn btn-primary text-uppercase"
                          >
                            {' '}
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  {/* <!-- <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span> --> */}
                  <i className="fa fa-2x fa-angle-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  {/* <!-- <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span> --> */}
                  <i className="fa fa-2x fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Popular news category -->*/}

        {/* <!-- Popular news category -->*/}
        <div className="mt-4">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-8">
                <aside className="wrapper__list__article">
                  <h4 className="border_section">Cricket</h4>

                  <div className="wrapp__list__article-responsive">
                    {cricketPost.map((items) => (
                      <div className="card__post card__post-list card__post__transition mt-30">
                        <div className="row ">
                          <div className="col-md-5">
                            <div className="card__post__transition">
                              <Link href={`/posts/${items.slug}`}>
                                <Image
                                  src={items.featuredImage.node.sourceUrl}
                                  width={500}
                                  height={400}
                                  sizes="(max-width: 500px) ,(max-width: 1200px)"
                                  className="img-fluid w-100"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-7 my-auto pl-0">
                            <div className="card__post__body ">
                              <div className="card__post__content  ">
                                <div className="card__post__category ">
                                  {items.categories.nodes[0].name}
                                </div>
                                <div className="card__post__author-info mb-2">
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span className="text-primary">
                                        {items.author.node.name}
                                      </span>
                                    </li>
                                    <li className="list-inline-item">
                                      <span className="text-dark text-capitalize">
                                        {items.date}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h5>
                                    <Link href={`/posts/${items.slug}`}>
                                      {items.title}
                                    </Link>
                                  </h5>
                                  <p className="d-none d-lg-block d-xl-block mb-0">
                                    Maecenas accumsan tortor ut velit pharetra
                                    mollis. Proin eu nisl et arcu iaculis
                                    placerat sollicitudin ut est. In fringilla
                                    dui dui.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </div> */}

              <div className="col-md-8">
                <aside className="wrapper__list__article ">
                  <h4 className="border_section">Cricket</h4>

                  <div className="row">
                    <div className="col-md-6">
                      {/* <!-- Post Article --> */}

                      {leftCricketCardData.map((item, index) => {
                        return (
                          <>
                            <div
                              className="article__entry"
                              key={`home_${index}`}
                            >
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
                              <div className="article__content" id='cricketHomeStyle'>
                                <div className="article__category">
                                  {item.categories.nodes[0].name}
                                </div>
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
                                <h5>
                                  <Link href={`/posts/${item.slug}`}>
                                    {item.title}
                                  </Link>
                                </h5>
                                {/* <p>{item.slug.slice(0, 30)} ...</p> */}
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
                      {rightCricketCardData.map((item, index) => {
                        return (
                          <>
                            <div
                              className="article__entry"
                              key={`home_${index}`}
                            >
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
                              <div className="article__content" id='cricketHomeStyle'>
                                <div className="article__category">
                                  {item.categories.nodes[0].name}
                                </div>
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
                                <h5>
                                  <Link href={`/posts/${item.slug}`}>
                                    {item.title}
                                  </Link>
                                </h5>
                                {/* <p>{item.slug.slice(0, 30)} ...</p> */}
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
                <div className="sticky-top">
                  <aside className="wrapper__list__article">
                    <h4 className="border_section">Latest post</h4>
                    <div className="wrapper__list__article-small">
                      {/* <!-- Post Article -->*/}
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
                          <h5>
                            <a href="#">
                              Proin eu nisl et arcu iaculis placerat
                              sollicitudin ut est
                            </a>
                          </h5>
                          <p>
                            Maecenas accumsan tortor ut velit pharetra mollis.
                            Proin eu nisl et arcu iaculis placerat sollicitudin
                            ut est. In fringilla dui dui.
                          </p>
                          <a
                            href="#"
                            className="btn btn-outline-primary mb-4 text-capitalize"
                          >
                            {' '}
                            read more
                          </a>
                        </div>
                      </div>
                      <div className="mb-3">
                        {/* <!-- Post Article -->*/}
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
                                    6 Best Tips for Building a Good Shipping
                                    Boat
                                  </a>
                                </h6>
                                {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> -->*/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        {/* <!-- Post Article -->*/}
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
                                    6 Best Tips for Building a Good Shipping
                                    Boat
                                  </a>
                                </h6>
                                {/* <!-- <p className="d-none d-lg-block d-xl-block">
                    Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat
                    sollicitudin ut est. In fringilla dui dui.
                </p> -->*/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="slider-container">
          <div className="container-slider-image-full nopadd">
            <div
              id="carouselExampleIndicator"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators d-none">
                <li
                  data-target="#carouselExampleIndicator"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicator"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicator"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    height={960}
                    width={1920}
                    className="d-block w-100"
                    sizes="(max-width: 500px) ,(max-width: 960px)"
                    // src="images/placeholder/1920x960.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-md-block text-center text-capitalize">
                    <h1
                      className="text-white animated fadeInUp nopadd"
                    // style="animation-delay:1s"
                    >
                      Football
                    </h1>
                    <p
                      className="text-white animated fadeInDown text-center"
                    // style="animation-delay:2s"
                    >
                      Find your best tour and start the adventure at the lowest
                      budget and best experiences.{' '}
                    </p>
                    <div
                      className="animated fadeInLeft d-none d-sm-block"
                    // style="animation-delay:2.6s"
                    >
                      <a href="#" className="btn btn-primary text-uppercase">
                        {' '}
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                {mainCarousel.map(items => (
                  <div className="carousel-item">
                    <Image
                      className="d-block w-100"
                      src={items.featuredImage.node.sourceUrl}
                      height={960}
                      width={1920}
                      alt="Second slide"
                    />
                    <div className="carousel-caption d-md-block text-center text-capitalize">
                      <h1
                        className="text-white animated fadeInUp nopadd"
                      // style="animation-delay:1s"
                      >
                        {items.title}
                      </h1>
                      <p
                        className="text-white animated fadeInDown text-center"
                      // style="animation-delay:2s"
                      >
                        Best solution for your transportation from pickup to
                        destination.{' '}
                      </p>
                      <div
                        className="animated fadeInLeft d-none d-sm-block"
                      // style="animation-delay:2.6s"
                      >
                        <Link href={`/posts/${items.slug}`}>read more</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicator"
                role="button"
                data-slide="prev"
              >
                {/* <!-- <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                {/* <span className="sr-only">Previous</span> --> */}
                <i className="fa fa-2x fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicator"
                role="button"
                data-slide="next"
              >
                {/* <!-- <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                {/* <span className="sr-only">Next</span> --> */}
                <i className="fa fa-2x fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Popular news category -->*/}

      {/* <!-- Popular news category -->*/}
      <div className="mt-4">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-8">
                <aside className="wrapper__list__article">
                  <h4 className="border_section">Cricket</h4>

                  <div className="wrapp__list__article-responsive">
                    {cricketPost.map((items) => (
                      <div className="card__post card__post-list card__post__transition mt-30">
                        <div className="row ">
                          <div className="col-md-5">
                            <div className="card__post__transition">
                              <Link href={`/posts/${items.slug}`}>
                                <Image
                                  src={items.featuredImage.node.sourceUrl}
                                  width={500}
                                  height={400}
                                  sizes="(max-width: 500px) ,(max-width: 1200px)"
                                  className="img-fluid w-100"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-7 my-auto pl-0">
                            <div className="card__post__body ">
                              <div className="card__post__content  ">
                                <div className="card__post__category ">
                                  {items.categories.nodes[0].name}
                                </div>
                                <div className="card__post__author-info mb-2">
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span className="text-primary">
                                        {items.author.node.name}
                                      </span>
                                    </li>
                                    <li className="list-inline-item">
                                      <span className="text-dark text-capitalize">
                                        {items.date}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h5>
                                    <Link href={`/posts/${items.slug}`}>
                                      {items.title}
                                    </Link>
                                  </h5>
                                  <p className="d-none d-lg-block d-xl-block mb-0">
                                    Maecenas accumsan tortor ut velit pharetra
                                    mollis. Proin eu nisl et arcu iaculis
                                    placerat sollicitudin ut est. In fringilla
                                    dui dui.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </div> */}

            <div className="col-md-8">
              <aside className="wrapper__list__article ">
                <h4 className="border_section">Football</h4>

                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}

                    {leftFootBallCardData.map((item, index) => {
                      return (
                        <>
                          <div className="article__entry" key={`home_${index}`}>
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
                            <div className="article__content" id='footballtHomeStyle'>
                              <div className="article__category">
                                {item.categories.nodes[0].name}
                              </div>
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
                              <h5>
                                <Link href={`/posts/${item.slug}`}>
                                  {item.title}
                                </Link>
                              </h5>
                              {/* <p>{item.slug.slice(0, 30)} ....</p> */}
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
                    {rightFootBallCardData.map((item, index) => {
                      return (
                        <>
                          <div className="article__entry" key={`home_${index}`}>
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
                            <div className="article__content" id='footballtHomeStyle'>
                              <div className="article__category">
                                {item.categories.nodes[0].name}
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="text-primary">
                                    by {item.author.node.name}
                                  </span>
                                </li>
                                {/* <li className="list-inline-item"> */}
                                {/* <span className="text-dark text-capitalize">
                                    descember 09, 2016
                                  </span>
                                </li> */}
                              </ul>
                              <h5>
                                <Link href={`/posts/${item.slug}`}>
                                  {item.title}
                                </Link>
                              </h5>
                              {/* <p>{item.slug.slice(0, 30)} .....</p> */}
                              <a
                                href={`/posts/${item.slug}`}
                                className="btn btn-outline-primary mb-4 text-capitalize"
                              >
                                readmore
                              </a>
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
              <div className="sticky-top">
                <aside className="wrapper__list__article">
                  <h4 className="border_section">Latest post</h4>
                  <div className="wrapper__list__article-small">
                    {/* <!-- Post Article -->*/}
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
                          {' '}
                          read more
                        </a>
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* <!-- Post Article -->*/}
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
                </p> -->*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* <!-- Post Article -->*/}
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
                </p> -->*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Popular news category -->*/}
    </>
  );
};

export default Home;
