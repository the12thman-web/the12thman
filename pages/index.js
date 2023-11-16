// Import necessary dependencies and components
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

// Get configuration settings from CONFIG
const { summary_length, refresh_home_page_interval } = CONFIG.settings;

// Configuration for the carousel
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 200,
  arrows: true,
  slidesToShow: 1,
};

const PostsCard = ({ post, i, arr }) => {
  return (
    <div className={`mb-6 flex items-center pb-6 ${i !== arr.length - 1 && 'border-b border-border dark:border-darkmode-border'}`} key={`key-${i}`}>
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
          <Link href={`/${post.slug}`} className="block hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="inline-flex items-center font-bold">
          <FaUserAlt className="mr-1.5" />
          {post.author?.node?.name}
          <FaRegCalendar className="ml-3 mr-1.5" />
          {dateFormat(post.date)}
        </p>
      </div>
    </div>
  );
};

// Define the Home component
const Home = ({ config, posts, cricketPosts, footballPosts, sidePosts, allRecentPosts }) => {
  const random1 = 0;

  return (
    <Base>
      {/* [Web View] Top caraousel Start */}
      <div className="carouselContainer container">
        <div className="row">
          <div className="col-md-12">
            <Carousel centerMode centerSlidePercentage={33} autoPlay interval={9000} transitionTime="9000" infiniteLoop showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
              {/* <div className="container px-1"> */}
              {posts.map((post, index) => (
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
                          placeholder="blur" // "empty" | "blur" | "data:image/..."
                          blurDataURL={post.featuredImage?.node?.sourceUrl}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex w-full flex-col  items-center space-y-2 bg-white p-3 md:w-2/3">
                        <h3 className="text-xs font-black text-gray-800 md:text-xs">{post.title.slice(0, 60)}</h3>

                        <div className="inline-flex  font-secondary text-xs leading-3">
                          <FaUserAlt className="mr-1.5" />
                          {post.author.node.name}
                          <FaRegClock className="ml-3 mr-1" />
                          {getTimeAgo(new Date(post.date))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* </div> */}
            </Carousel>
          </div>
        </div>
      </div>
      {/*Top caraousel End */}

      {/* [Mobile View] Trending caraousel Start */}
      <div className="block md:hidden lg:hidden xl:hidden">
        <Slider {...settings}>
          {allRecentPosts.map((post, index) => (
            <div className="wrapper bg-gray-400 text-gray-900 antialiased" key={index}>
              <div>
                <Link href={'/' + post?.slug}>
                  <Image
                    src={post.featuredImage?.node?.sourceUrl}
                    placeholder="blur"
                    blurDataURL={post.featuredImage?.node?.sourceUrl}
                    loading="lazy"
                    alt=" random Imageee"
                    class="w-full rounded-lg object-cover object-center shadow-md"
                    width={405}
                    height={228}
                  />

                  <div className="relative -mt-16 px-4  ">
                    <div className="rounded-lg bg-white p-6 shadow-lg">
                      <div className="flex items-baseline">
                        <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">Trending</span>
                      </div>

                      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>

                      <div className="flex-right mt-5 flex">
                        <FaRegClock className="ml-3 mr-1 mt-1.5" />
                        {getTimeAgo(new Date(post.date))}
                        <FaReadme className="ml-3 mr-1 mt-1.5" />
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
      {/*Top caraousel End */}

      {/* Home page content start */}
      <div className="container px-1">
        <div className="row items-start">
          <div className="mb-12 lg:col-8 lg:mb-0">
            {/* Cricket posts start*/}
            {config.cricket.enable && (
              <div className="py-16 pt-2">
                <h2 className="section-title">{config.cricket.title}</h2>
                {/* [Mobile View] Top caraousel Start */}
                <div className="block md:hidden lg:hidden xl:hidden">
                  <Slider {...settings}>
                    {cricketPosts.map((post, index) => (
                      <div className="wrapper bg-gray-400 text-gray-900 antialiased" key={index}>
                        <div>
                          <Image
                            src={post.featuredImage?.node?.sourceUrl}
                            alt=" random Imageee"
                            class="w-full rounded-lg object-cover object-center shadow-md"
                            width={403}
                            height={227}
                            placeholder="blur"
                            blurDataURL={post.featuredImage?.node?.sourceUrl}
                            loading="lazy"
                          />

                          <div className="relative -mt-16 px-4  ">
                            <div className="rounded-lg bg-white p-6 shadow-lg">
                              <div className="flex items-baseline">
                                <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">New</span>
                              </div>

                              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>

                              <div className="mt-5 inline-flex">
                                <FaUserAlt className="mr-1.5 mt-1" />
                                {post.author?.node?.name}
                                <FaRegCalendar className="ml-3 mr-1.5 mt-1" />
                                {dateFormat(post.date)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  {/*Top caraousel End */}
                </div>

                {/* Cricket head content end */}

                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="mt-10 sm:mt-16 grid grid-cols-2 grid-rows-2  gap-6 ">
                    <article className="col-span-2 md:col-span-1 row-span-2 relative">
                      <Post post={cricketPosts[0]} featured={true} />
                    </article>
                    <article className="col-span-2 md:col-span-1 row-span-2 scrollbar-w-[10px]  mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark sm:col-span-1 md:mt-0">
                      {cricketPosts.slice(1, cricketPosts.length).map((post, i, arr) => (
                        <PostsCard post={post} i={i} arr={arr} />
                      ))}
                    </article>
                  </div>
                </div>
              </div>
            )}
            {/* Cricket posts end*/}

            {/* Football Posts start */}
            {config.football.enable && (
              <div className="py-16">
                <h2 className="section-title">{config.football.title}</h2>
                {/* [Mobile View] Top caraousel Start */}
                <div className="block md:hidden lg:hidden xl:hidden">
                  <Slider {...settings}>
                    {footballPosts.map((post, index) => (
                      <div className="wrapper bg-gray-400 text-gray-900 antialiased" key={index}>
                        <div>
                          <Image
                            src={post.featuredImage?.node?.sourceUrl}
                            alt=" random Imageee"
                            class="w-full rounded-lg object-cover object-center shadow-md"
                            width={373}
                            height={210}
                            placeholder="blur"
                            blurDataURL={post.featuredImage?.node?.sourceUrl}
                            loading="lazy"
                          />

                          <div className="relative -mt-16 px-4  ">
                            <div className="rounded-lg bg-white p-6 shadow-lg">
                              <div className="flex items-baseline">
                                <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">New</span>
                              </div>

                              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>

                              <div className="mt-5 justify-around">
                                <FaUserAlt className="mr-1.5 " />
                                {post.author?.node?.name}
                                <FaRegCalendar className="ml-3 mr-1.5 " />
                                {dateFormat(post.date)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/*Top caraousel End */}

                {/* Football head content end */}
                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <div className="md:col-6">
                      <Post post={footballPosts[0]} featured={true} />
                    </div>
                    <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                      {footballPosts.slice(1, footballPosts.length).map((post, i, arr) => (
                        <PostsCard post={post} i={i} arr={arr} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Football Posts end */}

            {/* Recent Posts start*/}
            <div className="py-16 pt-0">
              <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                <div className="row">
                  {allRecentPosts.map(post => (
                    <div className="mb-8 md:col-6" key={post.slug}>
                      <Post post={post} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Recent Posts end */}
          </div>
          {/* Home Sidebar */}
          <HomeSidebar className={'lg:mt-[4.5rem]'} postData={sidePosts} />
        </div>
      </div>
    </Base>
  );
};

// Export the Home component wrapped with an error boundary
export default withErrorBoundary(Home);

// Fetch data for the homepage
export const getStaticProps = async () => {
  const config = CONFIG.home;
  const refresh_home_page_interval = 60;

  // Fetch all types of posts concurrently using Promise.all
  const [postsData, allRecentPostsData, cricketPostsData, footballPostsData, nbaPostsData, ufcPostsData, motoGPostsData] = await Promise.all([
    getAllPosts('', '', '', 5),
    getAllPostsWithContent('', '', '', 4),
    config.cricket.enable ? getAllPostsWithContent('cricket', '', '', 6) : [],
    config.football.enable ? getAllPostsWithContent('football', '', '', 4) : [],
    config.nba.enable ? getAllPostsWithContent('nba', '', '', 3) : [],
    config.ufc.enable ? getAllPostsWithContent('ufc', '', '', 3) : [],
    config.motoGP.enable ? getAllPostsWithContent('', 'motoGP', '', 3) : [],
  ]);

  // Extract the nodes from the fetched data
  const posts = postsData.nodes;
  const allRecentPosts = allRecentPostsData.nodes;
  const cricketPosts = cricketPostsData.nodes;
  const footballPosts = footballPostsData.nodes;
  const nbaPosts = nbaPostsData.nodes;
  const ufcPosts = ufcPostsData.nodes;
  const motoGPosts = motoGPostsData.nodes;

  const sidePosts = {
    nba: {
      title: config.nba.title,
      posts: nbaPosts,
    },
    ufc: {
      title: config.ufc.title,
      posts: ufcPosts,
    },
    motoGP: {
      title: config.motoGP.title,
      posts: motoGPosts,
    },
    limit: 4,
  };

  return {
    props: {
      config,
      posts,
      cricketPosts,
      footballPosts,
      sidePosts,
      allRecentPosts,
    },
    revalidate: refresh_home_page_interval,
  };
};
