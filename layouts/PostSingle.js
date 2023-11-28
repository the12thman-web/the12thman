import config from "@config/config.json";
import Base from "@layouts/Baseof";
import InnerPagination from "@layouts/components/InnerPagination";
import dateFormat from "@lib/utils/dateFormat";
// import { DiscussionEmbed } from "disqus-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt, FaReadme } from "react-icons/fa";
import Sidebar from "./partials/Sidebar";
import CONFIG from '@config/config.json';

const BASE_URL = CONFIG.site.base_url;

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import { useRouter } from 'next/router';
import readingTime from "@lib/utils/readingTime";
import useWindow from "../hooks/useWindow";
import { MyAdComponent } from "./partials/AdComponent";
import { UniBotsPlayerComponent } from "./partials/UniBotsPlayer";
import { useEffect, useRef } from "react";

const { disqus } = config;
const { meta_author } = config.metadata;

const PostSingle = ({ frontmatter, content, slug, trendingPosts }) => {
  const isMobile = useWindow(767) < 768;

  let { tags, description, title, date, featuredImage, categories, metaKeywords } = frontmatter;
  description = description ? description : content?.slice(0, 120);

  const { theme } = useTheme();
  const author = frontmatter.author?.node?.name ? frontmatter.author?.node?.name : meta_author;
  // Local copy so we don't modify global config.
  let disqusConfig = config.disqus.settings;
  disqusConfig.identifier = frontmatter.disqusId ? frontmatter.disqusId : config.settings.blog_folder + '/' + slug;

  const router = useRouter();

  // content = content.replaceAll('img', 'Image');
  const article_schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BASE_URL + router.asPath,
    },
    headline: title,
    image: [featuredImage],
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The 12th Man',
      logo: {
        '@type': 'ImageObject',
        url: 'https://the12thman.in/_next/image?url=%2Fimages%2Flogo%202.png&w=640&q=75',
        height: 60,
      },
    },
    description: description,
  };

  const contentRef = useRef();

  useEffect(() => {
    // Replace 'img' with 'Image' in the content
    const updatedContent = content.replaceAll('img', 'Image');
    contentRef.current.innerHTML = updatedContent;

    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, [content]);

  console.log({ content, featuredImage });
  return (
    <Base title={title} description={description} metaKeywords={metaKeywords} schema={article_schema}>
      <section className="single-blog mt-1 py-16 pt-1">
        <div className="container">
          <div className="row">
            <div className="lg:col-8">
              <article>
                {/* <div className="relative">
                  {featuredImage && <Image src={featuredImage} height="500" width="1000" alt={title} className="rounded-lg" priority={true} />}
                  <ul className="absolute left-2 top-3 flex flex-wrap items-center">
                    {featuredImage &&
                      tags?.nodes.slice(0, 2).map(({ name }, index) => (
                        <li className="mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white" key={'tag-' + index}>
                          <Link className="capitalize" href={`/tag/${name.toLowerCase().replaceAll(' ', '-')}`}>
                            {name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div> */}
                {config.settings.InnerPaginationOptions.enableTop && (
                  <div className="mt-4">
                    <InnerPagination posts={posts} date={date} />
                  </div>
                )}
                <div className="totalViews">
                  <ul className="flex items-center space-x-4">
                    <li>
                      <Link className="inline-flex items-center font-secondary text-xs leading-3" href="/about">
                        <FaUserAlt className="mr-1.5 mt-1" />
                        {author}
                      </Link>
                    </li>
                    <li className="inline-flex items-center font-secondary text-xs leading-3">
                      <FaRegCalendar className="mr-1.5" />
                      {date ? dateFormat(date) : ''}
                    </li>
                    <li className="inline-flex items-center font-secondary text-xs leading-3">
                      <FaReadme className="mr-1.5" />
                      {content ? readingTime(content) : 'o'}
                    </li>
                  </ul>
                  <div className=" hidden sm:block">
                    <ul id="social_link" className="list-inline">
                      <li className="list-inline-item">
                        <FacebookShareButton url={BASE_URL + router.asPath}>
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                      </li>
                      <li className="list-inline-item">
                        <PinterestShareButton url={BASE_URL + router.asPath}>
                          <PinterestIcon size={32} round />
                        </PinterestShareButton>
                      </li>
                      <li className="list-inline-item">
                        <WhatsappShareButton url={BASE_URL + router.asPath}>
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </li>
                      <li className="list-inline-item">
                        <LinkedinShareButton url={BASE_URL + router.asPath}>
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content mb-16">
                  <h1>{title}</h1>
                  {/* {tags?.nodes.slice(0, 2).map(({ name }, index) => (
                    <Tag name={name}/>
                  ))} */}
                  <div className="has-drop-cap-fluid" ref={contentRef}></div>
                </div>
                {config.settings.InnerPaginationOptions.enableBottom && <InnerPagination posts={posts} date={date} />}
              </article>
              {/* <div className="mt-16">{disqus.enable && <DiscussionEmbed key={theme} shortname={disqus.shortname} config={disqusConfig} />}</div> */}
            </div>
            <Sidebar trendingPosts={trendingPosts.filter(post => post.slug !== slug)} categories={categories} />
            {/** UniBots Player */}
            <div id="div-ub-the12thman">
              <UniBotsPlayerComponent></UniBotsPlayerComponent>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {/* <div className="container mt-20">
          <h2 className="section-title">Related Posts</h2>
          <div className="row mt-16">
            {relatedPosts.map((post, index) => (
              <div key={"post-" + index} className="mb-12 lg:col-4">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div> */}
      </section>
      {/* Mobile Share button links */}
        <div className="ads-block" style={{ width: '100%', bottom: '65px' }}>
          {isMobile && <MyAdComponent slot="3700818465" adHeight="50px" adWidth="300px" isMobile={true}></MyAdComponent>}
        </div>

      <footer
        className="fixed inset-x-0 bottom-0 block bg-neutral-100 p-4 md:hidden lg:hidden xl:hidden"
        style={{ zIndex: '500' }}
      >
        <ul id="social_link" className="justify-around">
          <li className="list-inline-item">
            <FacebookShareButton url={BASE_URL + router.asPath}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </li>
          <li className="list-inline-item">
            <PinterestShareButton url={BASE_URL + router.asPath}>
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </li>
          <li className="list-inline-item">
            <WhatsappShareButton url={BASE_URL + router.asPath}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </li>
          <li className="list-inline-item">
            <LinkedinShareButton url={BASE_URL + router.asPath}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </li>
        </ul>
      </footer>
    </Base>
  );
};

export default PostSingle;
