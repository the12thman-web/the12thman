import config from '@config/config.json';
import ImageFallback from '@layouts/components/ImageFallback';
import dateFormat from '@lib/utils/dateFormat';
import Link from 'next/link';
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa';
const { blog_folder } = config.settings;
const { about, featured_posts, newsletter, categoriesConfig } = config.widgets;

const RenderPosts = ({ topic, limit }) => (
  <div className="mt-6 rounded border border-border p-2 dark:border-darkmode-border">
    <h4 className="section-title mb-12 text-center">{topic.title}</h4>
    {topic.posts.slice(0, limit).map((post, i, arr) => (
      <div className={`flex h-[100px] overflow-hidden mb-2 rounded border border-border dark:border-darkmode-border`} key={`key-${i}`}>
        <div className="w-1/3">
          {post.featuredImage?.node?.sourceUrl && <ImageFallback className="h-full w-full rounded-l object-cover" src={post.featuredImage?.node?.sourceUrl} alt={post.title} width={100} height={100} />}
        </div>
        <div className="w-2/3 p-1 flex flex-col gap-2">
          <h3 className="h5 line-clamp-2">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.title}
            </Link>
          </h3>
          <div className="flex justify-between text-left font-secondary text-xs pt-1">
            <div className="flex w-1/2 gap-1 items-center">
              <FaUserAlt />
              <p className='truncate'>{post.author?.node?.name}</p>
            </div>
            <div className="flex w-1/2 items-center">
              <FaRegCalendar className="ml-3 mr-1.5" />
              {dateFormat(post.date)}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const HomeSidebar = ({ postData, className }) => {
  const { nba, ufc, motoGP, limit } = postData;

  return (
    <aside className={`${className} px-2 lg:col-4`}>
      <RenderPosts topic={nba} limit={limit} />
      <RenderPosts topic={ufc} limit={limit} />
      <RenderPosts topic={motoGP} limit={limit} />
    </aside>
  );
};

export default HomeSidebar;
