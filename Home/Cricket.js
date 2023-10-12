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

// Define the Home component
const Cricket = ({ config, posts, cricketPosts, footballPosts, sidePosts, allRecentPosts }) => {
	const random1 = 0;

	return (
		<Base>
		
		
			{/* Home page content start */}
			<div className="container px-1">
				<div className="row items-start">
					<div className="mb-12 lg:col-8 lg:mb-0">
						{/* Cricket posts start*/}
						{config.cricket.enable && (
							<div className="section pt-2">
								<h2 className="section-title">{config.cricket.title}</h2>
								{/*[Mobile View] Cricket head content start */}
								<div className=" bg-gray-100 flex justify-center items-center block md:hidden xl:hidden lg:hidden">
									<div className="container px-1 flex justify-center">
										<div className="max-w-sm py-2">
											<div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
												<Image
													className="rounded-t-lg"
													src={cricketPosts[random1].featuredImage?.node?.sourceUrl}
													alt="cricket" fill
													//placeholder={post.featuredImage?.node?.sourceUrl ? 'blur' : null}
													blurDataURL={cricketPosts[random1].featuredImage?.node?.sourceUrl}
													loading="lazy"

												/>
												<div className="py-6 px-8 rounded-lg bg-white">
													<h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{cricketPosts[random1].title}</h1>
													<div
														className="has-drop-cap-fluid"
														dangerouslySetInnerHTML={{ __html: cricketPosts[random1].content.slice(0, Number(summary_length)) }}
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
								{/* [Mobile View] Top caraousel Start */}
								<div className='block xl:hidden md:hidden lg:hidden'>
									<Slider {...settings}>
										{cricketPosts.map((post, index) => (
											<div className="wrapper bg-gray-400 antialiased text-gray-900" key={index}>
												<div>

													<Image
														src={post.featuredImage?.node?.sourceUrl}
														alt=" random Imageee"
														class="w-full object-cover object-center rounded-lg shadow-md"
														width={403}
														height={227}
														//placeholder={post.featuredImage?.node?.sourceUrl ? 'blur' : null}
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
									{/*Top caraousel End */}
								</div>

								{/* random images */}

								{/* Cricket head content end */}

								<div className="rounded border border-border p-6 dark:border-darkmode-border">
									<div className="row">
										<div className="md:col-6">
											<Post post={cricketPosts[0]} />
										</div>
										<div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
											{cricketPosts.slice(1, cricketPosts.length).map((post, i, arr) => (
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
														//placeholder={post.featuredImage?.node?.sourceUrl ? 'blur' : null}
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
					

						
						

					</div>
					{/* Home Sidebar */}
					<HomeSidebar
						className={'lg:mt-[4.5rem]'}
						postData={sidePosts}
					/>
				</div>
			</div>
			{/* Home page content start */}
		</Base>
	);
};

// Export the Home component wrapped with an error boundary
export default Cricket;


