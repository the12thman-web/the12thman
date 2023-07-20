import CONFIG from '@config/config.json';
import Base from '@layouts/Baseof';
import ImageFallback from '@layouts/components/ImageFallback';
import Pagination from '@layouts/components/Pagination';
import Post from '@layouts/partials/Post';
import SlidePost from '@layouts/partials/SlidePost';
import Sidebar from '@layouts/partials/Sidebar';
import dateFormat from '@lib/utils/dateFormat';
import { markdownify } from '@lib/utils/textConverter';
import Link from 'next/link';
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { getAllPosts, getPost, getRelatedPosts } from '@lib/graphql';
import HomeSidebar from '@layouts/partials/HomeSidebar';
import Slider from 'react-slick';

const { pagination, summary_length } = CONFIG.settings;
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
	const random2 = 1;

	const showPosts = pagination;
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
									<div className="relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg md:max-w-3xl md:flex-row md:space-x-5 md:space-y-0">
										<div className="grid w-full place-items-center bg-white md:w-1/3">
											<img
												src={post.featuredImage?.node?.sourceUrl}
												alt="tailwind logo"
												className="rounded-xl"
											/>
										</div>
										<div className="flex w-full flex-col  items-center space-y-2 bg-white p-3 md:w-2/3">
											<h3 className="text-xs font-black text-gray-800 md:text-xs">
												{post.title.slice(0, 60)}
											</h3>

											<Link
												className="inline-flex  font-secondary text-xs leading-3"
												href="/about"
											>
												<FaUserAlt className="mr-1.5" />
												{post.author.node.name}
											</Link>
										</div>
									</div>
								</div>
							))}

							{/* </div> */}
						</Carousel>
					</div>
				</div>
			</div>
			{/*Top caraousel End */}

			{/* [Mobile View] Top caraousel Start */}
			<div className='block xl:hidden lg:hidden'>
				<Slider {...settings}>
					{posts.map((post, index) => (
						<figure class="relative max-w-sm cursor-pointer filter transition-all duration-300 ">
							<a href="#">
								<img
									class="rounded-lg"
									src={post.featuredImage?.node?.sourceUrl}
									alt="image description"
								/>
							</a>
							<figcaption class="absolute absolute bottom-0 bottom-6 left-0 right-0 bg-gray-800 px-4 px-4 py-2 text-lg text-white opacity-70">
								<p>{post.title}</p>
							</figcaption>
						</figure>
					))}
				</Slider>
			</div>
			{/*Top caraousel End */}


			{/* Container for demo purpose */}
			<div class="container px-1 my-1 rounded-lg mx-auto md:px-6 px-1">
				{/* Section: Design Block */}
				<section class="mb-8">
					<div
						class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp')] h-[500px]">
						<div
							class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
							<div class="flex h-full items-center justify-center">
								<div class="px-6 text-center text-white md:px-12">
									<h2 class="mb-12 text-5xl font-bold leading-tight tracking-tight">
										Are you ready <br /><span>for an adventure</span>
									</h2>
									<button type="button"
										class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
										data-te-ripple-init data-te-ripple-color="light">
										Get started
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Section: Design Block */}
			</div>
			{/* Container for demo purpose */}

			{/* Home page content start */}
			<div className="container px-1">
				<div className="row items-start">
					<div className="mb-12 lg:col-8 lg:mb-0">
						{/* Cricket posts start*/}
						{config.cricket.enable && (
							<div className="section">
								<h2 className="section-title">{config.cricket.title}</h2>
								{/*[Mobile View] Cricket head content start */}
								<div class=" bg-gray-100 flex justify-center items-center block md:hidden xl:hidden lg:hidden">
										<div class="container px-1 flex justify-center">
											<div class="max-w-sm py-2">
												<div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
													<img class="rounded-t-lg" src={cricketPosts[random1].featuredImage?.node?.sourceUrl} alt="" />
													<div class="py-6 px-8 rounded-lg bg-white">
														<h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{cricketPosts[random1].title}</h1>
														<div
															className="has-drop-cap-fluid"
															dangerouslySetInnerHTML={{ __html: cricketPosts[random1].content.slice(0, Number(summary_length)) }}
														></div>
														<Link className="btn btn-outline-primary mt-4" href={`/${cricketPosts[random1].slug}`}>
															Read More
														</Link>
													</div>
													<div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
														<span class="text-md">{cricketPosts[random1].tags.nodes[0]?.name}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* [Mobile View] Top caraousel Start */}
									<div className='block xl:hidden md:hidden lg:hidden'>
										<Slider {...settings}>
											{cricketPosts.map((post, index) => (
												<div class="wrapper bg-gray-400 antialiased text-gray-900">
													<div>

														<img src={post.featuredImage?.node?.sourceUrl} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

														<div class="relative px-4 -mt-16  ">
															<div class="bg-white p-6 rounded-lg shadow-lg">
																<div class="flex items-baseline">
																	<span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
																		New
																	</span>
																</div>

																<h4 class="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>

																<div class="mt-5 inline-flex">
																	<FaUserAlt className="mr-3.5" />
																	{post.author.node.name}
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
								<section class="py-12 bg-white flex flex-col justify-center hidden xl:block md:block lg:block">
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
								</section>
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
															<FaRegCalendar className="mr-1.5" />
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
								<div class=" bg-gray-100 flex justify-center items-center block md:hidden xl:hidden lg:hidden">
										<div class="container px-1 flex justify-center">
											<div class="max-w-sm py-2">
												<div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
													<img class="rounded-t-lg" src={footballPosts[random1].featuredImage?.node?.sourceUrl} alt="" />
													<div class="py-6 px-8 rounded-lg bg-white">
														<h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{footballPosts[random1].title}</h1>
														<div
															className="has-drop-cap-fluid"
															dangerouslySetInnerHTML={{ __html: footballPosts[random1].content.slice(0, Number(summary_length)) }}
														></div>
													<Link className="btn btn-outline-primary mt-4" href={`/${footballPosts[random1].slug}`}>
														Read More
													</Link>
													</div>
													<div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
														<span class="text-md">{footballPosts[random1].tags.nodes[0].name}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* [Mobile View] Top caraousel Start */}
									<div className='block md:hidden xl:hidden lg:hidden'>
										<Slider {...settings}>
											{footballPosts.map((post, index) => (
												<div class="wrapper bg-gray-400 antialiased text-gray-900">
													<div>

														<img src={post.featuredImage?.node?.sourceUrl} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

														<div class="relative px-4 -mt-16  ">
															<div class="bg-white p-6 rounded-lg shadow-lg">
																<div class="flex items-baseline">
																	<span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
																		New
																	</span>
																</div>

																<h4 class="mt-1 text-xl font-semibold uppercase leading-tight">{post.title}</h4>

																<div class="mt-5 inline-flex">
																	<FaUserAlt className="mr-3.5" />
																	{post.author.node.name}
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
								<section class="py-12 bg-white flex flex-col justify-center hidden xl:block md:block lg:block">
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
								</section>
								{/* Football head content end */}

								<div className="rounded border border-border p-6 dark:border-darkmode-border">
									<div className="row">
										<div className="md:col-6">
											<Post post={footballPosts[0]} />
										</div>
										<div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
											{footballPosts.slice(1, footballPosts.length).map((post, i, arr) => (
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
															<FaRegCalendar className="mr-1.5" />
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
						{(
							<div className="section pt-0">
								<div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
									<div className="row">
										{allRecentPosts.map((post) => (
											<div
												className="mb-8 md:col-6"
												key={post.slug}
											>
												<Post post={post} />
											</div>
										))}
									</div>
								</div>
							</div>
						)}
						{/* Recent Posts end */}

					</div>
					{/* Home Sidebar */}
					<HomeSidebar
						className={'lg:mt-[8rem]'}
						postData={sidePosts}
					/>
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
	const allRecentPosts = await getRelatedPosts('','',6);
	const config = CONFIG.home;
	const cricketPosts = config.cricket.enable ? await getRelatedPosts('cricket', '', 6) : [];
	const footballPosts = config.football.enable ? await getRelatedPosts('football', '', 6) : [];
	const nbaPosts = config.nba.enable ? await getRelatedPosts('nba', '', 6) : [];
	const ufcPosts = config.ufc.enable ? await getRelatedPosts('ufc', '', 6) : [];
	const motoGPosts = config.motoGP.enable ? await getRelatedPosts('', 'motoGP', 6) : [];

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
			allRecentPosts: allRecentPosts.nodes
		},
	};
};
