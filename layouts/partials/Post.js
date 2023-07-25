import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";

const Post = ({ post }) => {
	const { summary_length, blog_folder } = config.settings;
	const { meta_author } = config.metadata;
	const author = post.author?.node?.name ? post.author?.node?.name : meta_author;
	return (
		<div className="post">
			<div className="relative">
				{post.featuredImage?.node?.sourceUrl && (
					<ImageFallback
						className="rounded"
						src={post.featuredImage?.node?.sourceUrl}
						alt={post.title}
						width={405}
						height={208}
					/>
				)}
				<ul className="absolute left-2 top-3 flex flex-wrap items-center">
					{post.featuredImage?.node?.sourceUrl && post.tags?.nodes.slice(0, 2).map(({ name }, index) => (
						<li
							className="mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white"
							key={"tag-" + index}
						>
							<Link className="capitalize" href={`/tags/${name.replace(" ", "-")}`}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<h3 className="h5 mb-2 mt-4">
				<Link href={`/${post.slug}`} className="block hover:text-primary">
					{post.title}
				</Link>
			</h3>
			<ul className="flex items-center space-x-4">
				<li>
					<Link className="inline-flex items-center font-secondary text-xs leading-3" href="/about">
						<FaUserAlt className="mr-1.5 mt-1" />
						{author}
					</Link>
				</li>
				<li className="inline-flex items-center font-secondary text-xs leading-3">
					<FaRegCalendar className="mr-1.5" />
					{dateFormat(post.date)}
				</li>
			</ul>
			<div
				className="has-drop-cap-fluid"
				dangerouslySetInnerHTML={{ __html: post.content.slice(0, Number(summary_length)) }}
			></div>
			{/* <p>{post.content.slice(0, Number(summary_length))}</p> */}
			<Link className="btn btn-outline-primary mt-4" href={`/${post.slug}`}>
				Read More
			</Link>
		</div>
	);
};

export default Post;
