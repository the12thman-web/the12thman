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

const { summary_length, refresh_home_page_interval } = CONFIG.settings;
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 200,
  arrows: true,
  slidesToShow: 1,
};

const Home = ({
  config,
  posts,
  cricketPosts,
  footballPosts,
  sidePosts,
  allRecentPosts,
}) => {
  const random1 = 0;

  return (
    <Base>
      {/* [Web View] Top caraousel Start */}
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
              {/* <div className="container px-1"> */}
              {posts.map((post, index) => (
                <div className="flex h-24 flex-col justify-center">
                  <Link href={'/' + post?.slug}>
                    <div className="relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg md:max-w-3xl md:flex-row md:space-x-5 md:space-y-0">
                      <div className="grid w-full place-items-center bg-white md:w-1/3">
                        <img
                          src={post.featuredImage?.node?.sourceUrl}
                          alt="tailwind logo"
                          className="rounded-xl"
                          width={123}
                          height={82}
                        />
                      </div>
                      <div className="flex w-full flex-col  items-center space-y-2 bg-white p-3 md:w-2/3">
                        <h3 className="text-xs font-black text-gray-800 md:text-xs">
                          {post.title.slice(0, 60)}
                        </h3>

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
            <div class="wrapper bg-gray-400 text-gray-900 antialiased">
              <div>
                <Link href={'/' + post?.slug}>
                  <img
                    src={post.featuredImage?.node?.sourceUrl}
                    alt=" random imgee"
                    class="w-full rounded-lg object-cover object-center shadow-md"
                  />

                  <div class="relative -mt-16 px-4  ">
                    <div class="rounded-lg bg-white p-6 shadow-lg">
                      <div class="flex items-baseline">
                        <span class="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                          Trending
                        </span>
                      </div>

                      <h4 class="mt-1 text-xl font-semibold uppercase leading-tight">
                        {post.title}
                      </h4>

                      <div class="flex-right mt-5 flex">
                        {/* <FaUserAlt className="mr-1.5 mt-1" />
											{post.author?.node?.name} */}
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
              <div className="section pt-2">
                <h2 className="section-title">{config.cricket.title}</h2>
                {/*[Mobile View] Cricket head content start */}
                <div class=" block flex items-center justify-center bg-gray-100 md:hidden lg:hidden xl:hidden">
                  <div class="container flex justify-center px-1">
                    <div class="max-w-sm py-2">
                      <div class="relative rounded-lg bg-white shadow-lg transition duration-500 hover:shadow-xl">
                        <img
                          class="rounded-t-lg"
                          src={
                            cricketPosts[random1].featuredImage?.node?.sourceUrl
                          }
                          alt=""
                        />
                        <div class="rounded-lg bg-white px-8 py-6">
                          <h1 class="mb-3 text-2xl font-bold text-gray-700 hover:cursor-pointer hover:text-gray-900">
                            {cricketPosts[random1].title}
                          </h1>
                          <div
                            className="has-drop-cap-fluid"
                            dangerouslySetInnerHTML={{
                              __html: cricketPosts[random1].content.slice(
                                0,
                                Number(summary_length)
                              ),
                            }}
                          ></div>
                          <Link
                            className="btn btn-outline-primary mt-4"
                            href={`/${cricketPosts[random1].slug}`}
                          >
                            Read More
                          </Link>
                        </div>
                        <div class="absolute right-2 top-2 rounded-lg bg-white px-4 py-2">
                          <span class="text-md">
                            {cricketPosts[random1].tags.nodes[0]?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* [Mobile View] Top caraousel Start */}
                <div className="block md:hidden lg:hidden xl:hidden">
                  <Slider {...settings}>
                    {cricketPosts.map((post, index) => (
                      <div class="wrapper bg-gray-400 text-gray-900 antialiased">
                        <div>
                          <img
                            src={post.featuredImage?.node?.sourceUrl}
                            alt=" random imgee"
                            class="w-full rounded-lg object-cover object-center shadow-md"
                          />

                          <div class="relative -mt-16 px-4  ">
                            <div class="rounded-lg bg-white p-6 shadow-lg">
                              <div class="flex items-baseline">
                                <span class="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                                  New
                                </span>
                              </div>

                              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight">
                                {post.title}
                              </h4>

                              <div class="mt-5 inline-flex">
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

                {/* random images */}
                {/* <section class="py-12 bg-white flex flex-col justify-center hidden xl:block md:block lg:block">
									<div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
										<div class="-mt-20 flex justify-end">
											<img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src={cricketPosts[0].featuredImage?.node?.sourceUrl} />
										</div>
										<div class="flex justify-start">
											<img class="rounded-lg object-cover overflow-hidden" src={cricketPosts[1].featuredImage?.node?.sourceUrl} />
										</div>
										<div class="-mt-64 flex justify-start">
											<img class="rounded-lg object-cover overflow-hidden" src={cricketPosts[2].featuredImage?.node?.sourceUrl} />
										</div>
										<div class="flex justify-start -mr-28 ml-28">
											<img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src={cricketPosts[3].featuredImage?.node?.sourceUrl} />
										
										</div>
									
									</div>
								</section> */}
                {/* Cricket head content end */}

                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <div className="md:col-6">
                      <Post post={cricketPosts[0]} />
                    </div>
                    <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                      {cricketPosts
                        .slice(1, cricketPosts.length)
                        .map((post, i, arr) => (
                          <div
                            className={`mb-6 flex items-center pb-6 ${
                              i !== arr.length - 1 &&
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
                                <FaRegCalendar className="ml-3 mr-1.5" />
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
            {/* Cricket posts end*/}

            {/* Football Posts start */}
            {config.football.enable && (
              <div className="section">
                <h2 className="section-title">{config.football.title}</h2>
                {/* [Mobile View] Football head content start */}
                <div class=" block flex items-center justify-center bg-gray-100 md:hidden lg:hidden xl:hidden">
                  <div class="container flex justify-center px-1">
                    <div class="max-w-sm py-2">
                      <div class="relative rounded-lg bg-white shadow-lg transition duration-500 hover:shadow-xl">
                        <img
                          class="rounded-t-lg"
                          src={
                            footballPosts[random1].featuredImage?.node
                              ?.sourceUrl
                          }
                          alt=""
                        />
                        <div class="rounded-lg bg-white px-8 py-6">
                          <h1 class="mb-3 text-2xl font-bold text-gray-700 hover:cursor-pointer hover:text-gray-900">
                            {footballPosts[random1].title}
                          </h1>
                          <div
                            className="has-drop-cap-fluid"
                            dangerouslySetInnerHTML={{
                              __html: footballPosts[random1].content.slice(
                                0,
                                Number(summary_length)
                              ),
                            }}
                          ></div>
                          <Link
                            className="btn btn-outline-primary mt-4"
                            href={`/${footballPosts[random1].slug}`}
                          >
                            Read More
                          </Link>
                        </div>
                        <div class="absolute right-2 top-2 rounded-lg bg-white px-4 py-2">
                          <span class="text-md">
                            {footballPosts[random1].tags.nodes[0].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* [Mobile View] Top caraousel Start */}
                <div className="block md:hidden lg:hidden xl:hidden">
                  <Slider {...settings}>
                    {footballPosts.map((post, index) => (
                      <div class="wrapper bg-gray-400 text-gray-900 antialiased">
                        <div>
                          <Image
                            src={post.featuredImage?.node?.sourceUrl}
                            alt=" random imgee"
                            class="w-full rounded-lg object-cover object-center shadow-md"
                            width={373}
                            height={210}
                          />

                          <div class="relative -mt-16 px-4  ">
                            <div class="rounded-lg bg-white p-6 shadow-lg">
                              <div class="flex items-baseline">
                                <span class="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                                  New
                                </span>
                              </div>

                              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight">
                                {post.title}
                              </h4>

                              <div class="mt-5 justify-around">
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

                {/* random images */}
                {/* <section class="py-12 bg-white flex flex-col justify-center hidden xl:block md:block lg:block">
									<div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
										<div class="-mt-20 flex justify-end">
											<img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src={footballPosts[0].featuredImage?.node?.sourceUrl} />
										</div>
										<div class="flex justify-start">
											<img class="rounded-lg object-cover overflow-hidden" src={footballPosts[1].featuredImage?.node?.sourceUrl} />
										</div>
										<div class="-mt-64 flex justify-start">
											<img class="rounded-lg object-cover overflow-hidden" src={footballPosts[2].featuredImage?.node?.sourceUrl} />
										</div>
										<div class="flex justify-start -mr-28 ml-28">
											<img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src={footballPosts[3].featuredImage?.node?.sourceUrl} />

										</div>

									</div>
								</section> */}
                {/* Football head content end */}

                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <div className="md:col-6">
                      <Post post={footballPosts[0]} />
                    </div>
                    <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                      {footballPosts
                        .slice(1, footballPosts.length)
                        .map((post, i, arr) => (
                          <div
                            className={`mb-6 flex items-center pb-6 ${
                              i !== arr.length - 1 &&
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
                                <FaRegCalendar className="ml-3 mr-1.5 mt-1" />
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

            {/* Recent Posts start*/}
            {
              <div className="section pt-0">
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
            }
            {/* Recent Posts end */}
          </div>
          {/* Home Sidebar */}
          <HomeSidebar className={'lg:mt-[4.5rem]'} postData={sidePosts} />
        </div>
      </div>
      {/* Home page content start */}
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const allRecentPosts = await getAllPostsWithContent('', '', '', 10);
  const config = CONFIG.home;
  const cricketPosts = config.cricket.enable
    ? await getAllPostsWithContent('cricket', '', '', 6)
    : [];
  const footballPosts = config.football.enable
    ? await getAllPostsWithContent('football', '', '', 6)
    : [];
  const nbaPosts = config.nba.enable
    ? await getAllPostsWithContent('nba', '', '', 6)
    : [];
  const ufcPosts = config.ufc.enable
    ? await getAllPostsWithContent('ufc', '', '', 6)
    : [];
  const motoGPosts = config.motoGP.enable
    ? await getAllPostsWithContent('', 'motoGP', '', 6)
    : [];

  const sidePosts = {
    nba: {
      title: config.nba.title,
      posts: nbaPosts.nodes,
    },
    ufc: {
      title: config.ufc.title,
      posts: ufcPosts.nodes,
    },
    motoGP: {
      title: config.motoGP.title,
      posts: motoGPosts.nodes,
    },
    limit: 4,
  };
  return {
    props: {
      config,
      posts: posts.nodes,
      cricketPosts: cricketPosts.nodes,
      footballPosts: footballPosts.nodes,
      sidePosts,
      allRecentPosts: allRecentPosts.nodes,
    },
    revalidate: refresh_home_page_interval, // Refresh data every 60 seconds
  };
};
