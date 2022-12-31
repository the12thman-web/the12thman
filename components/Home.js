import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const Home = ({ posts, menus }) => {
  console.log("posts", posts);

  const postData = posts?.nodes;
  const mainCarousel = postData.slice(0, 5);
  const sideCard = postData.slice(5, 7);
  const lowerCarousel = postData.slice(7, 12);
  const recentPost = postData.slice(12, 14);
  const recentPostLeft = postData.slice(14, 16);
  const recentPostRight = postData.slice(16, 18);
  const cricketPost = postData.slice(0, 8);

  return (
    <>
    <Header menus={menus}/>
      <div className="loading-container">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <ul className="list-unstyled">
            <li>
              <img
                src="images/placeholder/loading.png"
                alt="Alternate Text"
                height="100"
              />
            </li>
            <li>
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            </li>
            <li>
              <p>Loading</p>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Tranding news  carousel-->*/}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrapp__list__article-responsive wrapp__list__article-responsive-carousel">
                {postData.map((items, index) => {
                  return (
                    <div className="item" key={`home_${index}`}>
                      {/* <!-- Post Article -->*/}
                      <div className="card__post card__post-list">
                        <div className="image-sm">
                          <Link href={`/posts/${items.slug}`}>
                            <Image
                              src={items.featuredImage?.node.sourceUrl}
                              width={500}
                              height={400}
                              className="img-fluid"
                              alt=""
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
                                <li className="list-inline-item">
                                  <span className="text-dark text-capitalize">
                                    {items.date}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="card__post__title">
                              <h6>
                                <Link href={`/posts/${items.slug}`}>
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
                <div className="card__post-carousel">
                  {mainCarousel.map((items) => {
                    return (
                      <div className="item">
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
                </div>
              </div>
              <div className="col-md-4">
                <div className="popular__news-right">
                  {/* <!-- Post Article -->*/}
                  {sideCard.map((items) => {
                    return (
                      <div className="card__post ">
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
                  {lowerCarousel.map((items) => {
                    return (
                      <div className="item">
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
                          <div className="article__content">
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
                              <Link href={`/posts/${items.slug}`}>
                                {items.title}
                              </Link>
                            </h5>
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
                  <h4 className="border_section">Recent Post</h4>
                </div>
                <div className="row ">
                  {recentPost.map((items) => (
                    <div className="col-sm-12 col-md-6 mb-4">
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
                      {recentPostLeft.map((items) => (
                        <div className="mb-3">
                          {/* <!-- Post Article -->*/}
                          <div className="card__post card__post-list">
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
                                    <li className="list-inline-item">
                                      <span className="text-dark text-capitalize">
                                        {items.date}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h6>
                                    <Link href={`/posts/${items.slug}`}>
                                      {`${items.title.slice(0, 65)}...`}
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
                      {recentPostRight.map((items) => (
                        <div className="mb-3">
                          {/* <!-- Post Article -->*/}
                          <div className="card__post card__post-list">
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
                                    <li className="list-inline-item">
                                      <span className="text-dark text-capitalize">
                                        {items.date}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h6>
                                    <Link href={`/posts/${items.slug}`}>
                                      {`${items.title.slice(0, 65)}...`}
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

              <div className="col-md-12 col-lg-4">
                <aside className="wrapper__list__article">
                  <h4 className="border_section">popular post</h4>
                  <div className="wrapper__list-number">
                    {/* <!-- List Article -->*/}
                    <div className="card__post__list">
                      <div className="list-number">
                        <span>1</span>
                      </div>
                      <a href="#" className="category">
                        covid-19
                      </a>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <h5>
                            <a href="#">
                              Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T
                              dalam 3 Bulan - CNBC Indonesia
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>

                    <div className="card__post__list">
                      <div className="list-number">
                        <span>2</span>
                      </div>
                      <a href="#" className="category">
                        Startup
                      </a>
                      <ul className="list-inline">
                        {/* <!-- <li className="list-inline-item">
            <a href="#" className="author-info">
                by david hall
            </a>

        </li>
        <li className="list-inline-item">
            <span>
                <i className="fa fa-calendar"></i>
                march 01, 2020
            </span>

        </li> -->*/}
                        <li className="list-inline-item">
                          <h5>
                            <a href="#">
                              Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T
                              dalam 3 Bulan - CNBC Indonesia
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- List Article -->*/}
                    <div className="card__post__list">
                      <div className="list-number">
                        <span>1</span>
                      </div>
                      <a href="#" className="category">
                        covid-19
                      </a>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <h5>
                            <a href="#">
                              Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T
                              dalam 3 Bulan - CNBC Indonesia
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>

                    <div className="card__post__list">
                      <div className="list-number">
                        <span>2</span>
                      </div>
                      <a href="#" className="category">
                        Startup
                      </a>
                      <ul className="list-inline">
                        {/* <!-- <li className="list-inline-item">
            <a href="#" className="author-info">
                by david hall
            </a>

        </li>
        <li className="list-inline-item">
            <span>
                <i className="fa fa-calendar"></i>
                march 01, 2020
            </span>

        </li> -->*/}
                        <li className="list-inline-item">
                          <h5>
                            <a href="#">
                              Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T
                              dalam 3 Bulan - CNBC Indonesia
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
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
                        lowest budget and best experiences.{" "}
                      </p>
                      <div
                        className="animated fadeInLeft d-none d-sm-block"
                        // style="animation-delay:2.6s"
                      >
                        <Link
                          href={"/"}
                          className="btn btn-primary text-uppercase"
                        >
                          {" "}
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>

                  {mainCarousel.map((items) => (
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
                          destination.{" "}
                        </p>
                        <div
                          className="animated fadeInLeft d-none d-sm-block"
                          // style="animation-delay:2.6s"
                        >
                          <Link
                            href={`/posts/${items.slug}`}
                            className="btn btn-primary text-uppercase"
                          >
                            {" "}
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
              <div className="col-md-8">
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
                    {/* <!-- Post Article List -->*/}
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
                            {" "}
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

                  <aside className="wrapper__list__article">
                    <h4 className="border_section">stay conected</h4>
                    {/* <!-- widget Social media -->*/}
                    <div className="wrap__social__media">
                      <a href="#" target="_blank">
                        <div className="social__media__widget facebook">
                          <span className="social__media__widget-icon">
                            <i className="fa fa-facebook"></i>
                          </span>
                          <span className="social__media__widget-counter">
                            19,243 fans
                          </span>
                          <span className="social__media__widget-name">
                            like
                          </span>
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
                    <h4 className="border_section">Advertise</h4>
                    <a href="#">
                      <figure>
                        <img
                          src="images/placeholder/600x400.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                    </a>
                  </aside>

                  <aside className="wrapper__list__article">
                    <h4 className="border_section">newsletter</h4>
                    {/* <!-- Form Subscribe -->*/}
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
                      budget and best experiences.{" "}
                    </p>
                    <div
                      className="animated fadeInLeft d-none d-sm-block"
                      // style="animation-delay:2.6s"
                    >
                      <a href="#" className="btn btn-primary text-uppercase">
                        {" "}
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                {mainCarousel.map((items) => (
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
                        destination.{" "}
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
            <div className="col-md-8">
              <aside className="wrapper__list__article">
                <h4 className="border_section">Football</h4>

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
                                  mollis. Proin eu nisl et arcu iaculis placerat
                                  sollicitudin ut est. In fringilla dui dui.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <!-- Post Article List -->*/}
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
                          {" "}
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

                <aside className="wrapper__list__article">
                  <h4 className="border_section">stay conected</h4>
                  {/* <!-- widget Social media -->*/}
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
                  <h4 className="border_section">Advertise</h4>
                  <a href="#">
                    <figure>
                      <img
                        src="images/placeholder/600x400.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </a>
                </aside>

                <aside className="wrapper__list__article">
                  <h4 className="border_section">newsletter</h4>
                  {/* <!-- Form Subscribe -->*/}
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
