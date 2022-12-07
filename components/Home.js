import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

const Home = ({ posts }) => {
  // console.log("posts", posts.length);

  const mainCarousel = posts.nodes.slice(0, 5);
  const sideCard = posts.nodes.slice(5, 7);
  const lowerCarousel = posts.nodes.slice(7, 12);

  return (
    <>
      {/* <!-- Tranding news  carousel-->*/}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrapp__list__article-responsive wrapp__list__article-responsive-carousel">
                {posts.nodes.map((items) => {
                  return (
                    <div className="item">
                      {/* <!-- Post Article -->*/}
                      <div className="card__post card__post-list">
                        <div className="image-sm">
                          <a href={`/posts/${items.slug}`}>
                            <Image
                              src={items.featuredImage.node.sourceUrl}
                              className="img-fluid"
                              alt=""
                              width={500}
                              height={400}
                            />
                          </a>
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
                                <a href={`/posts/${items.slug}`}>
                                  {items.title}
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
                            <a href="./card-article-detail-v1.html">
                              <Image
                                src={items.featuredImage.node.sourceUrl}
                                className="img-fluid"
                                alt=""
                                width={800}
                                height={600}
                              />
                            </a>
                            <div className="card__post__content bg__post-cover">
                              <div className="card__post__category">
                                {items.categories.nodes[0].name}
                              </div>
                              <div className="card__post__title">
                                <h2>
                                  <a href="#">{items.title}</a>
                                </h2>
                              </div>
                              <div className="card__post__author-info">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <a href="#">{items.author.node.name}</a>
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
                          <a href="./card-article-detail-v1.html">
                            <Image
                              src={items.featuredImage.node.sourceUrl}
                              className="img-fluid"
                              width={600}
                              height={400}
                              alt=""
                            />
                          </a>
                          <div className="card__post__content bg__post-cover">
                            <div className="card__post__category">
                              {items.categories.nodes[0].name}
                            </div>
                            <div className="card__post__title">
                              <h5>
                                <a href="./card-article-detail-v1.html">
                                  {items.title}
                                </a>
                              </h5>
                            </div>
                            <div className="card__post__author-info">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <a href="./card-article-detail-v1.html">
                                    {items.author.node.name}
                                  </a>
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
                            <a href="#">
                              <Image
                                src={items.featuredImage.node.sourceUrl}
                                alt=""
                                className="img-fluid"
                                width={500}
                                height={400}
                              />
                            </a>
                          </div>
                          <div className="article__content">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  {items.author.node.name}
                                </span>
                                ,
                              </li>

                              <li className="list-inline-item">
                                <span>{items.date}</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">{items.title}</a>
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
                  <h4 className="border_section">recent post</h4>
                </div>
                <div className="row ">
                  <div className="col-sm-12 col-md-6 mb-4">
                    {/* <!-- Post Article -->*/}
                    <div className="card__post ">
                      <div className="card__post__body card__post__transition">
                        <a href="./card-article-detail-v1.html">
                          <img
                            src="images/placeholder/600x400.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="card__post__content bg__post-cover">
                          <div className="card__post__category">politics</div>
                          <div className="card__post__title">
                            <h5>
                              <a href="./card-article-detail-v1.html">
                                Barack Obama and Family Visit borobudur temple
                                enjoy holiday indonesia.
                              </a>
                            </h5>
                          </div>
                          <div className="card__post__author-info">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a href="./card-article-detail-v1.html">
                                  by david hall
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <span>Descember 09, 2016</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 mb-4">
                    {/* <!-- Post Article -->*/}
                    <div className="card__post ">
                      <div className="card__post__body card__post__transition">
                        <a href="./card-article-detail-v1.html">
                          <img
                            src="images/placeholder/600x400.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="card__post__content bg__post-cover">
                          <div className="card__post__category">politics</div>
                          <div className="card__post__title">
                            <h5>
                              <a href="./card-article-detail-v1.html">
                                Barack Obama and Family Visit borobudur temple
                                enjoy holiday indonesia.
                              </a>
                            </h5>
                          </div>
                          <div className="card__post__author-info">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a href="./card-article-detail-v1.html">
                                  by david hall
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <span>Descember 09, 2016</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm-12 col-md-6">
                    <div className="wrapp__list__article-responsive">
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
                  </div>
                  <div className="col-sm-12 col-md-6 ">
                    <div className="wrapp__list__article-responsive">
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <aside className="wrapper__list__article">
                <h4 className="border_section">technology</h4>
              </aside>
            </div>
            <div className="col-md-12">
              <div className="article__entry-carousel">
                <div className="item">
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
        </div>
        {/* <!-- End Popular news category -->*/}

        {/* <!-- Popular news category -->*/}
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <aside className="wrapper__list__article mb-0">
                  <h4 className="border_section">lifestyle</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
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
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  by david hall
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span>descember 09, 2016</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">
                                Maecenas accumsan tortor ut velit pharetra
                                mollis.
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
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
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  by david hall
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span>descember 09, 2016</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">
                                Maecenas accumsan tortor ut velit pharetra
                                mollis.
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
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
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  by david hall
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span>descember 09, 2016</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">
                                Maecenas accumsan tortor ut velit pharetra
                                mollis.
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
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
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  by david hall
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span>descember 09, 2016</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">
                                Maecenas accumsan tortor ut velit pharetra
                                mollis.
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
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
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  by david hall
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span>descember 09, 2016</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">
                                Maecenas accumsan tortor ut velit pharetra
                                mollis.
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
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
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="text-primary">
                                  by david hall
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span>descember 09, 2016</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="#">
                                Maecenas accumsan tortor ut velit pharetra
                                mollis.
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="wrapper__list__article">
                  <h4 className="border_section">technology</h4>

                  <div className="wrapp__list__article-responsive">
                    {/* <!-- Post Article List -->*/}
                    <div className="card__post card__post-list card__post__transition mt-30">
                      <div className="row ">
                        <div className="col-md-5">
                          <div className="card__post__transition">
                            <a href="#">
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
                              <div className="card__post__category ">
                                travel
                              </div>
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
                                  <a href="#">
                                    Exercitation Ullamco Laboris Nisi Ut Aliquip
                                  </a>
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
                    {/* <!-- Post Article List -->*/}
                    <div className="card__post card__post-list card__post__transition mt-30">
                      <div className="row ">
                        <div className="col-md-5">
                          <div className="card__post__transition">
                            <a href="#">
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
                              <div className="card__post__category ">
                                travel
                              </div>
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
                                  <a href="#">
                                    Exercitation Ullamco Laboris Nisi Ut Aliquip
                                  </a>
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
                    {/* <!-- Post Article List -->*/}
                    <div className="card__post card__post-list card__post__transition mt-30">
                      <div className="row ">
                        <div className="col-md-5">
                          <div className="card__post__transition">
                            <a href="#">
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
                              <div className="card__post__category ">
                                travel
                              </div>
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
                                  <a href="#">
                                    Exercitation Ullamco Laboris Nisi Ut Aliquip
                                  </a>
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
                    {/* <!-- Post Article List -->*/}
                    <div className="card__post card__post-list card__post__transition mt-30">
                      <div className="row ">
                        <div className="col-md-5">
                          <div className="card__post__transition">
                            <a href="#">
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
                              <div className="card__post__category ">
                                travel
                              </div>
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
                                  <a href="#">
                                    Exercitation Ullamco Laboris Nisi Ut Aliquip
                                  </a>
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
              <div className="mx-auto">
                {/* <!-- Pagination -->*/}
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

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Popular news category -->*/}
    </>
  );
};

export default Home;
