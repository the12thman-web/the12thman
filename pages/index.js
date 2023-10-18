import { useState, useEffect } from 'react';
import CONFIG from '@config/config.json';
import Base from '@layouts/Baseof';
import ImageFallback from '@layouts/components/ImageFallback';
import Post from '@layouts/partials/Post';
import dateFormat from '@lib/utils/dateFormat';
import Link from 'next/link';
import { FaReadme, FaRegCalendar, FaRegClock, FaUserAlt } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { getAllPosts, getAllPostsWithContent } from '@lib/graphql';
import HomeSidebar from '@layouts/partials/HomeSidebar';
import Slider from 'react-slick';
import { getTimeAgo } from '@lib/utils/getTimeAgo';
import readingTime from '@lib/utils/readingTime';
import Image from 'next/image';
import withErrorBoundary from '../layouts/components/ErrorBoundary';

const { summary_length, refresh_home_page_interval } = CONFIG.settings;

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 200,
  arrows: true,
  slidesToShow: 1,
};

const Home = ({ config, posts, cricketPosts, footballPosts, sidePosts, allRecentPosts }) => {
  const random1 = 0;

  const [visiblePostCount, setVisiblePostCount] = useState(9);

  const loadMorePosts = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      setVisiblePostCount((prevCount) => prevCount + 9);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', loadMorePosts);

    return () => {
      window.removeEventListener('scroll', loadMorePosts);
    };
  }, []);

  const visiblePosts = posts.slice(0, visiblePostCount);
  const visibleCricketPosts = cricketPosts.slice(0, visiblePostCount);
  const visibleFootballPosts = footballPosts.slice(0, visiblePostCount);

  return (
    <Base>
      {/* [Web View] Top carousel Start */}
      <div className="carouselContainer container">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              centerMode
              centerSlidePercentage={33}
              autoPlay
              interval={9000}
              transitionTime="9000"
              infiniteLoop
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              {visiblePosts.map((post, index) => (
                <div className="flex h-24 flex-col justify-center" key={index}>
                  <Link href={'/' + post?.slug}>
                    <div className="relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg md:max-w-3xl md:flex-row md:space-x-5 md:space-y-0">
                      <div className="grid w-full place-items-center bg-white md:w-1/3">
                        <Image
                          src={post.featuredImage?.node?.sourceUrl}
                          alt="tailwind logo"
                          className="rounded-xl"
                          width={123}
                          height={82}
                          placeholder="blur"
                          blurDataURL={post.featuredImage?.node?.sourceUrl}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex w-full flex-col  items-center space-y-2 bg-white p-3 md:w-2/3">
                        <h3 className="text-xs font-black text-gray-800 md:text-xs">
                          {post.title.slice(0, 60)}
                        </h3>

                        <div
                          className="inline-flex  font-secondary text-xs leading-3"
                        >
                          <FaUserAlt className="mr-1.5" />
                          {post.author.node.name}
                          <FaRegClock className="mr-1 ml-3" />
                          {getTimeAgo(new Date(post.date))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* Top carousel End */}

      {/* [Mobile View] Trending carousel Start */}
      <div className="block md:hidden xl:hidden lg:hidden">
        <Slider {...settings}>
          {allRecentPosts.map((post, index) => (
            <div className="wrapper bg-gray-400 antialiased text-gray-900" key={index}>
              <div>
                <Link href={'/' + post?.slug}>
                  <Image
                    src={post.featuredImage?.node?.sourceUrl}
                    placeholder="blur"
                    blurDataURL={post.featuredImage?.node?.sourceUrl}
                    loading="lazy"
                    alt=" random Imageee"
                    className="w-full object-cover object-center rounded-lg shadow-md"
                    width={405}
                    height={228}
                  />

                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-baseline">
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          Trending
                        </span>
                      </div>

                      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>

                      <div className="mt-5 flex flex-right">
                        <FaRegClock className="mr-1 ml-3 mt-1.5" />
                        {getTimeAgo(new Date(post.date))}
                        <FaReadme className="mr-1 ml-3 mt-1.5" />
                        {readingTime(post.content)}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Top carousel End */}

      {/* Home page content start */}
      <div className="container px-1">
        <div className="row items-start">
          <div className="mb-12 lg:col-8 lg:mb-0">
            {/* Cricket posts start */}
            {config.cricket.enable && (
              <div className="section pt-2">
                <h2 className="section-title">{config.cricket.title}</h2>
                {/* [Mobile View] Cricket head content start */}
                <div className=" bg-gray-100 flex justify-center items-center block md:hidden xl:hidden lg:hidden">
                  <div className="container px-1 flex justify-center">
                    <div className="max-w-sm py-2">
                      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Image
                          className="rounded-t-lg"
                          src={cricketPosts[random1].featuredImage?.node?.sourceUrl}
                          alt="cricket"
                          fill
                          placeholder="blur"
                          blurDataURL={cricketPosts[random1].featuredImage?.node?.sourceUrl}
                          loading="lazy"
                        />
                        <div className="py-6 px-8 rounded-lg bg-white">
                          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                            {cricketPosts[random1].title}
                          </h1>
                          <div
                            className="has-drop-cap-fluid"
                            dangerouslySetInnerHTML={{
                              __html: cricketPosts[random1].content.slice(0, Number(summary_length)),
                            }}
                          ></div>
                          <Link className="btn btn-outline-primary mt-4" href={`/${cricketPosts[random1].slug}`}>
                            Read More
                          </Link>
                        </div>
                        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                          <span className="text-md">{cricketPosts[random1].tags.nodes[0]?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* [Mobile View] Top carousel Start */}
                <div className="block xl:hidden md:hidden lg:hidden">
                  <Slider {...settings}>
                    {visibleCricketPosts.map((post, index) => (
                      <div className="wrapper bg-gray-400 antialiased text-gray-900" key={index}>
                        <div>
                          <Image
                            src={post.featuredImage?.node?.sourceUrl}
                            alt=" random Imageee"
                            class="w-full object-cover object-center rounded-lg shadow-md"
                            width={403}
                            height={227}
                            placeholder="blur"
                            blurDataURL={post.featuredImage?.node?.sourceUrl}
                            loading="lazy"
                          />
                          <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                              <div className="flex items-baseline">
                                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                  New
                                </span>
                              </div>
                              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>
                              <div className="mt-5 inline-flex">
                                <FaUserAlt className="mr-1.5 mt-1" />
                                {post.author?.node?.name}
                                <FaRegCalendar className="mr-1.5 ml-3 mt-1" />
                                {dateFormat(post.date)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* Top carousel End */}
                {/* random images */}
                {/* Cricket head content end */}
                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <div className="md:col-6">
                      <Post post={cricketPosts[0]} />
                    </div>
                    <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                      {visibleCricketPosts.slice(1, visibleCricketPosts.length).map((post, i, arr) => (
                        <div
                          className={`mb-6 flex items-center pb-6 ${i !== arr.length - 1 &&
                            'border-b border-border dark:border-darkmode-border'
                          }`}
                          key={`key-${i}`}
                        >
                          <ImageFallback
                            className="mr-3 h-[85px] rounded object-cover"
                            src={post.featuredImage?.node?.sourceUrl}
                            alt={post.title}
                            width={105}
                            height={85}
                            placeholder="blur"
                            blurDataURL={post.featuredImage?.node?.sourceUrl}
                            loading="lazy"
                          />
                          <div>
                            <h3 className="h5 mb-2">
                              <Link
                                href={`/${post.slug}`}
                                className="block hover:text-primary"
                              >
                                {post.title}
                              </Link>
                            </h3>
                            <p className="inline-flex items-center font-bold">
                              <FaUserAlt className="mr-1.5" />
                              {post.author?.node?.name}
                              <FaRegCalendar className="mr-1.5 ml-3" />
                              {dateFormat(post.date)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Cricket posts end */}
            {/* Football Posts start */}
            {config.football.enable && (
              <div className="section">
                <h2 className="section-title">{config.football.title}</h2>
                {/* [Mobile View] Football head content start */}
                <div className=" bg-gray-100 flex justify-center items-center block md:hidden xl:hidden lg:hidden">
                  <div className="container px-1 flex justify-center">
                    <div className="max-w-sm py-2">
                      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Image
                          className="rounded-t-lg"
                          src={footballPosts[random1].featuredImage?.node?.sourceUrl}
                          alt="football"
                          fill
                          placeholder="blur"
                          blurDataURL={footballPosts[random1].featuredImage?.node?.sourceUrl}
                          loading="lazy"
                        />
                        <div className="py-6 px-8 rounded-lg bg-white">
                          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                            {footballPosts[random1].title}
                          </h1>
                          <div
                            className="has-drop-cap-fluid"
                            dangerouslySetInnerHTML={{
                              __html: footballPosts[random1].content.slice(0, Number(summary_length)),
                            }}
                          ></div>
                          <Link className="btn btn-outline-primary mt-4" href={`/${footballPosts[random1].slug}`}>
                            Read More
                          </Link>
                        </div>
                        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                          <span className="text-md">{footballPosts[random1]?.tags?.nodes[0]?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* [Mobile View] Top carousel Start */}
                <div className="block md:hidden xl:hidden lg:hidden">
                  <Slider {...settings}>
                    {visibleFootballPosts.map((post, index) => (
                      <div className="wrapper bg-gray-400 antialiased text-gray-900" key={index}>
                        <div>
                          <Image
                            src={post.featuredImage?.node?.sourceUrl}
                            alt=" random Imageee"
                            class="w-full object-cover object-center rounded-lg shadow-md"
                            width={373}
                            height={210}
                            placeholder="blur"
                            blurDataURL={post.featuredImage?.node?.sourceUrl}
                            loading="lazy"
                          />
                          <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                              <div className="flex items-baseline">
                                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                  New
                                </span>
                              </div>
                              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>
                              <div className="mt-5 justify-around">
                                <FaUserAlt className="mr-1.5 " />
                                {post.author?.node?.name}
                                <FaRegCalendar className="mr-1.5 ml-3 " />
                                {dateFormat(post.date)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* Top carousel End */}
                {/* random images */}
                {/* Football head content end */}
                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <div className="md:col-6">
                      <Post post={footballPosts[0]} />
                    </div>
                    <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                      {visibleFootballPosts.slice(1, visibleFootballPosts.length).map((post, i, arr) => (
                        <div
                          className={`mb-6 flex items-center pb-6 ${i !== arr.length - 1 &&
                            'border-b border-border dark:border-darkmode-border'
                          }`}
                          key={`key-${i}`}
                        >
                          <ImageFallback
                            className="mr-3 h-[85px] rounded object-cover"
                            src={post.featuredImage?.node?.sourceUrl}
                            alt={post.title}
                            width={105}
                            height={85}
                            placeholder="blur"
                            blurDataURL={post.featuredImage?.node?.sourceUrl}
                            loading="lazy"
                          />
                          <div>
                            <h3 className="h5 mb-2">
                              <Link
                                href={`/${post.slug}`}
                                className="block hover:text-primary"
                              >
                                {post.title}
                              </Link>
                            </h3>
                            <p className="inline-flex items-center font-bold">
                              <FaUserAlt className="mr-1.5 mt-1" />
                              {post.author?.node?.name}
                              <FaRegCalendar className="mr-1.5 ml-3 mt-1" />
                              {dateFormat(post.date)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Football Posts end */}
            {/* Recent Posts start */}
            {(
              <div className="section pt-0">
                <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                  <div className="row">
                    {allRecentPosts.map((post) => (
                      <div
                        className="mb-6 flex items-center pb-6"
                        key={`key-${post.id}`}
                      >
                        <ImageFallback
                          className="mr-3 h-[85px] rounded object-cover"
                          src={post.featuredImage?.node?.sourceUrl}
                          alt={post.title}
                          width={105}
                          height={85}
                          placeholder="blur"
                          blurDataURL={post.featuredImage?.node?.sourceUrl}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="h5 mb-2">
                            <Link
                              href={`/${post.slug}`}
                              className="block hover:text-primary"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p className="inline-flex items-center font-bold">
                            <FaUserAlt className="mr-1.5 mt-1" />
                            {post.author?.node?.name}
                            <FaRegCalendar className="mr-1.5 ml-3 mt-1" />
                            {dateFormat(post.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Recent Posts end */}
          </div>
          {/* Side section Start */}
          <HomeSidebar config={config} sidePosts={sidePosts} />
        </div>
      </div>
      {/* Home page content end */}
    </Base>
  );
};

export default Home;

export const getStaticProps = async () => {
	const config = CONFIG.home;
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.categories.edges[0]?.node?.slug === 'news');
  const cricketPosts = allPosts.filter((post) => post.categories.edges[0]?.node?.slug === 'cricket');
  const footballPosts = allPosts.filter((post) => post.categories.edges[0]?.node?.slug === 'football');
  const sidePosts = allPosts.filter((post) => post.categories.edges[0]?.node?.slug === 'side');

  return {
    props: {
      config,
      posts,
      cricketPosts,
      footballPosts,
      sidePosts,
      allRecentPosts: allPosts,
    },
    revalidate: refresh_home_page_interval || 10,
  };
};
