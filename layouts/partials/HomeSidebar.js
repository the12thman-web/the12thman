import config from '@config/config.json';
import ImageFallback from '@layouts/components/ImageFallback';
import dateFormat from '@lib/utils/dateFormat';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa';
const { blog_folder } = config.settings;
const { about, featured_posts, newsletter, categoriesConfig } = config.widgets;

const RenderPosts = ({ topic, limit }) => (
  <div className="mt-6 rounded border border-border p-2 dark:border-darkmode-border">
    <h4 className="section-title mb-12 text-center">{topic.title}</h4>
    {topic.posts.slice(0, limit).map((post, i, arr) => (
      <div className={`mb-2 flex h-[100px] overflow-hidden rounded border border-border dark:border-darkmode-border`} key={`key-${i}`}>
        <div className="w-1/3">
          {post.featuredImage?.node?.sourceUrl && (
            <ImageFallback className="h-full w-full rounded-l object-cover" src={post.featuredImage?.node?.sourceUrl} alt={post.title} width={100} height={100} />
          )}
        </div>
        <div className="flex w-2/3 flex-col gap-2 p-1">
          <h3 className="h5 line-clamp-2">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.title}
            </Link>
          </h3>
          <div className="flex justify-between pt-1 text-left font-secondary text-xs">
            <div className="flex w-1/2 items-center gap-1">
              <FaUserAlt />
              <p className="truncate">{post.author?.node?.name}</p>
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
  const [isVisible, setIsVisible] = useState(false);
  const { nba, ufc, motoGP, limit } = postData;

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight / 2;

    // Check if the user has scrolled to a certain position
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsVisible(true); // Always visible on desktop
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? (
    <aside className={`${className} px-2 lg:col-4`}>
      <RenderPosts topic={nba} limit={limit} />
      <RenderPosts topic={ufc} limit={limit} />
      <RenderPosts topic={motoGP} limit={limit} />
    </aside>
  ) : null;
};

export default HomeSidebar;
