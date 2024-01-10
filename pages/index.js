import CONFIG from '@config/config.json';
import Base from '@layouts/Baseof';
import ImageFallback from '@layouts/components/ImageFallback';
import Post from '@layouts/partials/Post';
import dateFormat from '@lib/utils/dateFormat';
import Link from 'next/link';
import { FaRegCalendar, FaRegClock, FaUserAlt } from 'react-icons/fa';
import { getAllPosts, getAllPostsWithContent, getCategoricalPosts } from '@lib/graphql';
import HomeSidebar from '@layouts/partials/HomeSidebar';
import Slider from 'react-slick';
import { getTimeAgo } from '@lib/utils/getTimeAgo';
// import readingTime from '@lib/utils/readingTime';
import Image from 'next/image';
import withErrorBoundary from '../layouts/components/ErrorBoundary';

// Get configuration settings from CONFIG
// const { summary_length, refresh_home_page_interval } = CONFIG.settings;

// Configuration for the carousel
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  responsive: [
    { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
    { breakpoint: 540, settings: { arrows: false, slidesToShow: 1 } },
  ],
};

const Slide = ({ post, index, trending }) => {
  return (
    <div className="bg-gray-400 text-gray-900 antialiased" key={index}>
      <Link href={'/' + post?.slug}>
        <div className="relative">
          <div className="relative h-60 w-full">
            <Image
              className="w-full object-cover object-center"
              src={post.featuredImage?.node?.sourceUrl}
              alt="post"
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-1 px-4">
            <div className="rounded-lg bg-white p-4 shadow-lg">
              {trending ? (
                <div className="flex items-baseline">
                  <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">Trending</span>
                </div>
              ) : null}
              <h4 className="mt-1 line-clamp-2 text-xl font-semibold uppercase leading-tight">{post.title}</h4>
              <div className="flex-right flex">
                <FaRegClock className="ml-2 mr-1 mt-1.5" />
                {getTimeAgo(new Date(post.date))}
                {/* <FaReadme className="ml-2 mr-1 mt-1.5" /> */}
                {/* {readingTime(post.content)} */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
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
        priority={true}
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
const Home = ({ config, cricketPosts, footballPosts, sidePosts, allRecentPosts, allCategoricalPostData }) => {
  return (
    <Base>
      {/* [Web View] Top caraousel Start */}
      <div className="container">
        <div className="">
          <div className="mt-3">
            <Slider {...settings}>
              {allRecentPosts.map((post, index) => (
                <Link className="block p-1" href={'/' + post?.slug}>
                  <div className="relative flex h-60 flex-col gap-2 rounded-xl border bg-white p-2 shadow-lg md:h-32 md:flex-row   " key={index}>
                    <div className="relative h-full w-full md:w-1/3">
                      <Image
                        className="h-full w-full rounded-lg object-cover object-center"
                        src={post.featuredImage?.node?.sourceUrl}
                        alt="post"
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-1 md:w-2/3 md:p-3">
                      <h3 className="line-clamp-2 text-xs font-black text-gray-800 md:text-xs">{post.title}</h3>
                      <div className="inline-flex w-full font-secondary text-xs leading-3">
                        <FaUserAlt className="mr-1.5" />
                        {post.author.node.name}
                        <FaRegClock className="ml-3 mr-1" />
                        {getTimeAgo(new Date(post.date))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/*Top caraousel End */}

      {/* Home page content start */}
      <div className="container px-1">
        <div className="row items-start">
          <div className="lg:col-8 lg:mb-0">
            {/* Cricket posts start*/}
            {config.cricket.enable && (
              <div className="pb-16 pt-2">
                <h2 className="section-title">{config.cricket.title}</h2>
                <div className="mb-2 block md:hidden">
                  <Slider {...settings}>
                    {cricketPosts.map((post, index) => (
                      <Slide post={post} index={index} />
                    ))}
                  </Slider>
                </div>

                <div className="rounded border border-border p-4 dark:border-darkmode-border">
                  <div className="grid grid-cols-2 grid-rows-2 gap-6">
                    <article className="relative col-span-2 row-span-2 hidden md:col-span-1 md:block">
                      <Post post={cricketPosts[0]} featured={true} />
                    </article>
                    <article className="scrollbar-w-[10px] col-span-2 row-span-2 max-h-[480px]  scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark sm:col-span-1 md:col-span-1 ">
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
              <div className="pb-16">
                <h2 className="section-title">{config.football.title}</h2>
                <div className="mb-2 block md:hidden">
                  <Slider {...settings}>
                    {footballPosts.map((post, index) => (
                      <Slide post={post} index={index} />
                    ))}
                  </Slider>
                </div>

                <div className="rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="grid grid-cols-2 grid-rows-2 gap-6">
                    <article className="relative col-span-2 row-span-2 hidden md:col-span-1 md:block">
                      <Post post={footballPosts[0]} featured={true} />
                    </article>
                    <article className="scrollbar-w-[10px] col-span-2 row-span-2 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark sm:col-span-1 md:col-span-1">
                      {footballPosts.slice(1, footballPosts.length).map((post, i, arr) => (
                        <PostsCard post={post} i={i} arr={arr} />
                      ))}
                    </article>
                  </div>
                </div>
              </div>
            )}
            {/* Football Posts end */}

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

  const allCategoricalPostData = await getCategoricalPosts()

  // getAllPostsWithContent('', '', '', 4),
  // getAllPosts('', '', '', 5),
  // config.cricket.enable ? getAllPostsWithContent('cricket', '', '', 6) : [],
  // config.football.enable ? getAllPostsWithContent('football', '', '', 4) : [],
  // config.nba.enable ? getAllPostsWithContent('nba', '', '', 3) : [],
  // config.ufc.enable ? getAllPostsWithContent('ufc', '', '', 3) : [],
  // config.motoGP.enable ? getAllPostsWithContent('', 'motoGP', '', 3) : [],

  // Extract the nodes from the fetched data
  // const posts = postsData.nodes;

  // const allRecentPosts = allRecentPostsData.nodes;
  const { cricketPosts, footballPosts, nbaPosts, ufcPosts, motoGPosts, allRecentPosts } = allCategoricalPostData;

  const sidePosts = {
    nba: { title: config.nba.title, posts: nbaPosts.nodes },
    ufc: { title: config.ufc.title, posts: ufcPosts.nodes },
    motoGP: { title: config.motoGP.title, posts: motoGPosts.nodes },
    limit: 4,
  };

  return {
    props: { config, cricketPosts : cricketPosts.nodes, footballPosts : footballPosts.nodes, sidePosts, allRecentPosts : allRecentPosts.nodes  },
    revalidate: refresh_home_page_interval,
  };
};
