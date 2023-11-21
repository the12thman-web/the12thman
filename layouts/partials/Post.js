import config from '@config/config.json';
import ImageFallback from '@layouts/components/ImageFallback';
import dateFormat from '@lib/utils/dateFormat';
import Link from 'next/link';
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa';

const Post = ({ post, featured }) => {
  const { summary_length, blog_folder } = config.settings;
  const { meta_author } = config.metadata;
  const author = post.author?.node?.name ? post.author?.node?.name : meta_author;
  if (featured) {
    return (
      <div className="group relative inline-block h-full w-full overflow-hidden rounded-xl">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full rounded-xl bg-gradient-to-b from-transparent from-0% to-dark/90" />
        {post.featuredImage?.node?.sourceUrl && (
          <ImageFallback
            className="ease h-full w-full rounded-xl object-cover object-center transition-all duration-300 group-hover:scale-105"
            src={post.featuredImage?.node?.sourceUrl}
            alt={post.title}
            width={405}
            height={208}
            sizes="(max-width: 1180px) 100vw, 50vw"
          />
        )}

        <div className="xs:p-6 absolute bottom-0 z-20 w-full p-4 sm:p-10">
          <Link href={`/${post.slug}`} className="mt-6">
            <h2 className="xs:text-base mt-2 text-sm font-bold capitalize text-white sm:mt-4 sm:text-xl md:text-2xl">
              <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px]">
                {post.title}
              </span>
            </h2>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative">
        {post.featuredImage?.node?.sourceUrl && (
          <ImageFallback className="h-[208px] w-[405px] rounded object-cover object-center" src={post.featuredImage?.node?.sourceUrl} alt={post.title} width={405} height={208} />
        )}
        <ul className="absolute left-2 top-3 flex flex-wrap items-center">
          {post.featuredImage?.node?.sourceUrl &&
            post.tags?.nodes.slice(0, 2).map(({ name }, index) => (
              <li className="mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white" key={'tag-' + index}>
                <Link className="capitalize" href={`/tag/${name.toLowerCase().replaceAll(' ', '-')}`}>
                  {name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <h3 className="h5 mb-2 mt-4 line-clamp-3">
        <Link href={`/${post.slug}`} className="block hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <ul className="mx-2 flex items-center justify-between space-x-4">
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
      <div className="has-drop-cap-fluid" dangerouslySetInnerHTML={{ __html: post.content.slice(0, Number(summary_length)) }}></div>
    </div>
  );
};

export default Post;
