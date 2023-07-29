import config from "@config/config.json";
import social from "@config/social.json";
import ImageFallback from "@layouts/components/ImageFallback";
import Logo from "@layouts/components/Logo";
import CustomForm from "@layouts/components/NewsLetterForm";
import Social from "@layouts/components/Social";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useState } from "react";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
const { blog_folder } = config.settings;
const { about, featured_posts, newsletter, categoriesConfig } = config.widgets;

const HomeSidebar = ({ postData, className }) => {

	const { nba, ufc, motoGP, limit} = postData;
	
	return (
		<aside className={`${className} px-0 lg:col-4 lg:px-2`}>
	
		
			{/* featured widget */}
			{(
				<div className="mt-6 rounded border border-border p-6 dark:border-darkmode-border">
					<h4 className="section-title mb-12 text-center">{nba.title}</h4>
					{nba.posts.slice(0, limit)
                        .map((post, i, arr) => (
						<div
							className={`flex items-center ${
								i !== arr.length - 1 &&
								"mb-6 border-b border-border pb-6 dark:border-darkmode-border"
							}`}
							key={`key-${i}`}
						>
							{post.featuredImage?.node?.sourceUrl && (
								<ImageFallback
									className="mr-3 h-[85px] w-[85px] rounded-full object-cover"
									src={post.featuredImage?.node?.sourceUrl}
									alt={post.title}
									width={105}
									height={85}
								/>
							)}
							<div>
								<h3 className="h5 mb-2">
									<Link href={`/${post.slug}`} className="block hover:text-primary">
										{post.title}
									</Link>
								</h3>
									<p className="inline-flex items-center font-secondary text-xs">
										<FaUserAlt className="mr-1.5" />
										{post.author?.node?.name}
										<FaRegCalendar className="mr-1.5 ml-3" />
										{dateFormat(post.date)}
									</p>
							</div>
						</div>
					))}
				</div>
			)}

			<div className="mt-6 rounded border border-border p-6 dark:border-darkmode-border">
					<h4 className="section-title mb-12 text-center">{ufc.title}</h4>
					{ufc.posts.slice(0, limit)
                        .map((post, i, arr) => (
						<div
							className={`flex items-center ${
								i !== arr.length - 1 &&
								"mb-6 border-b border-border pb-6 dark:border-darkmode-border"
							}`}
							key={`key-${i}`}
						>
							{post.featuredImage?.node?.sourceUrl && (
								<ImageFallback
									className="mr-3 h-[85px] w-[85px] rounded-full object-cover"
									src={post.featuredImage?.node?.sourceUrl}
									alt={post.title}
									width={105}
									height={85}
								/>
							)}
							<div>
								<h3 className="h5 mb-2">
									<Link href={`/${post.slug}`} className="block hover:text-primary">
										{post.title}
									</Link>
								</h3>
									<p className="inline-flex items-center font-secondary text-xs">
										<FaUserAlt className="mr-1.5 mt-1" />
										{post.author?.node?.name}
										<FaRegCalendar className="mr-1.5 ml-3 mt-1" />
										{dateFormat(post.date)}
									</p>
							</div>
						</div>
					))}
				</div>

			<div className="mt-6 rounded border border-border p-6 dark:border-darkmode-border">
				<h4 className="section-title mb-12 text-center">{motoGP.title}</h4>
				{motoGP.posts.slice(0, limit)
					.map((post, i, arr) => (
						<div
							className={`flex items-center ${i !== arr.length - 1 &&
								"mb-6 border-b border-border pb-6 dark:border-darkmode-border"
								}`}
							key={`key-${i}`}
						>
							{post.featuredImage?.node?.sourceUrl && (
								<ImageFallback
									className="mr-3 h-[85px] w-[85px] rounded-full object-cover"
									src={post.featuredImage?.node?.sourceUrl}
									alt={post.title}
									width={105}
									height={85}
								/>
							)}
							<div>
								<h3 className="h5 mb-2">
									<Link href={`/${post.slug}`} className="block hover:text-primary">
										{post.title}
									</Link>
								</h3>
								<p className="inline-flex items-center font-secondary text-xs">
									<FaUserAlt className="mr-1.5 mt-1" />
									{post.author?.node?.name}
									<FaRegCalendar className="mr-1.5 ml-3 mt-1" />
									{dateFormat(post.date)}
								</p>
							</div>
						</div>
					))}
			</div>

					</aside>
	);
};

export default HomeSidebar;
