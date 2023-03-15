import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import iplWinImg from '../public/images/iplwin.png';

import dynamic from 'next/dynamic';

const Popup = dynamic(
  () => {
    return import('reactjs-popup');
  },
  { ssr: false }
);

import 'reactjs-popup/dist/index.css';

import laserImage from '../public/images/laser.png';
const Home = ({
  posts,
  menus,
  IPLcategory,
  cricketPosts,
  footBallPosts,
  motoGPPosts,
}) => {
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

  const customStyles = {
    background: 'none',
    border: 'none',
  };

  return (
    <>
      <Header menus={menus} />

      <Popup
        arrow={true}
        open={true}
        position="center"
        content={<button>click to close</button>}
        contentStyle={customStyles}
      >
        <a href="http://lbook.cc/3WEUByR">
          <Image
            src={laserImage}
            alt="IPLWIN"
            style={{ margin: 'auto', display: 'flex' }}
          />
        </a>
      </Popup>
      {/* <!-- Tranding news  carousel-->*/}
      <section className="bg-light pt-20 carouselContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
                  {postData.map(items => {
                    return (
                      <div className="item" key={items.postId}>
                        {/* <!-- Post Article -->*/}
                        <div
                          className="card__post card__post-list"
                          style={{
                            height: '100px',
                            marginLeft: '8px',
                            overflow: 'hidden',
                          }}
                        >
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
                                  <li
                                    className="list-inline-item"
                                    key={items.postId}
                                  >
                                    <span
                                      className="text-dark"
                                      style={{
                                        fontWeight: '800',
                                      }}
                                    >
                                      by {items.author.node.name}
                                    </span>
                                  </li>
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
                    {mainCarousel.map(items => {
                      return (
                        <div className="item" key={items.postId}>
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
                                    <li
                                      className="list-inline-item"
                                      key={items.postId}
                                    >
                                      <Link href={`/posts/${items.slug}`}>
                                        {items.author.node.name}
                                      </Link>
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
                  {sideCard.map(items => {
                    return (
                      <div className="card__post " key={items.postId}>
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
                                <li
                                  className="list-inline-item"
                                  key={items.postId}
                                >
                                  <Link href={`/posts/${items.slug}`}>
                                    {items.author.node.name}
                                  </Link>
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
                    {lowerCarousel.map(items => {
                      return (
                        <div className="item m-2" key={items.postId}>
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
                            <div
                              className="article__content"
                              id="lowerCarContent"
                            >
                              <ul className="list-inline">
                                <li
                                  className="list-inline-item"
                                  key={items.postId}
                                >
                                  <span className="text-primary">
                                    {items.author.node.name}
                                  </span>
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
                  {firstTwoData.map(items => (
                    <div className="col-sm-12 col-md-6 mb-4" key={items.postId}>
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
                                <li
                                  className="list-inline-item"
                                  key={items.postId}
                                >
                                  <Link href={`/posts/${items.slug}`}>
                                    {items.author.node.name}
                                  </Link>
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
                      {firstTwoLeftData.map(items => (
                        <div className="mb-3" key={items.postId}>
                          {/* <!-- Post Article -->*/}
                          <div
                            className="card__post card__post-list"
                            id="iplHomeCard"
                          >
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
                                    <li
                                      className="list-inline-item"
                                      key={items.postId}
                                    >
                                      <span className="text-primary">
                                        {items.author.node.name}
                                      </span>
                                    </li>
                                    <span className="card__post__category">
                                      IPl
                                    </span>
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h6>
                                    <Link href={`/posts/${items.slug}`}>
                                      {items.title}
                                    </Link>
                                  </h6>
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
                      {firstTwoRightData.map(items => (
                        <div className="mb-3" key={items.postId}>
                          {/* <!-- Post Article -->*/}
                          <div
                            className="card__post card__post-list iplCard"
                            id="iplHomeCard"
                          >
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
                                    <li
                                      className="list-inline-item"
                                      key={items.postId}
                                    >
                                      <span className="text-primary">
                                        {items.author.node.name}
                                      </span>
                                    </li>
                                    <span className="card__post__category">
                                      IPL
                                    </span>
                                  </ul>
                                </div>
                                <div className="card__post__title">
                                  <h6>
                                    <Link href={`/posts/${items.slug}`}>
                                      {items.title}
                                    </Link>
                                  </h6>
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

              <div className="col-md-4" id="motogpHomeCss">
                <div className="sticky-top">
                  <aside className="wrapper__list__article">
                    <h4 className="border_section">MotoGP</h4>
                    <div className="wrapper__list__article-small">
                      {example.map(motoItem => (
                        <div className="mb-3" key={motoItem.postId}>
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
                                    <li
                                      className="list-inline-item"
                                      key={motoItem.postId}
                                    >
                                      <span className="text-primary">
                                        {motoItem?.author?.node?.name}
                                      </span>
                                    </li>
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
        <section>
          <div className="container">
            <Image
              height={960}
              width={1920}
              alt="Cricket Image"
              src={leftCricketCardData[1].featuredImage.node.sourceUrl}
            />
          </div>
        </section>

        {/* <!-- Popular news category -->*/}
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <aside className="wrapper__list__article ">
                  <h4 className="border_section">Cricket</h4>
                  <div className="row">
                    <div className="col-md-6">
                      {/* <!-- Post Article --> */}

                      {leftCricketCardData.map(item => {
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
                              <div
                                className="article__content"
                                id="cricketHomeStyle"
                              >
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
                                </ul>
                                <h5>
                                  <Link href={`/posts/${item.slug}`}>
                                    {item.title}
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
                      {rightCricketCardData.map(item => {
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
                              <div
                                className="article__content"
                                id="cricketHomeStyle"
                              >
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
                                </ul>
                                <h5>
                                  <Link href={`/posts/${item.slug}`}>
                                    {item.title}
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
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Image
            height={960}
            width={1920}
            alt="Football Image"
            src={leftFootBallCardData[1].featuredImage.node.sourceUrl}
          />
        </div>
      </section>
      {/* <!-- End Popular news category -->*/}
      {/* <!-- Popular news category -->*/}
      <div className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <aside className="wrapper__list__article ">
                <h4 className="border_section">Football</h4>
                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- Post Article --> */}
                    {leftFootBallCardData.map(item => {
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
                            <div
                              className="article__content"
                              id="footballtHomeStyle"
                            >
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
                              </ul>
                              <h5>
                                <Link href={`/posts/${item.slug}`}>
                                  {item.title}
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
                    {rightFootBallCardData.map(item => {
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
                            <div
                              className="article__content"
                              id="footballtHomeStyle"
                            >
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
                              </ul>
                              <h5>
                                <Link href={`/posts/${item.slug}`}>
                                  {item.title}
                                </Link>
                              </h5>
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
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="rswsuper365mobile">
        {' '}
        <a id="super365mobile" target="_blank" href="https://iplwin.us/PRblO">
          <Image src={iplWinImg} alt="IPLWIN" style={{ width: '100%' }} />
        </a>{' '}
      </div>
      {/* <!-- End Popular news category -->*/}
    </>
  );
};
export default Home;
