import config from "@config/config.json";
import Base from "@layouts/Baseof";
import InnerPagination from "@layouts/components/InnerPagination";
import dateFormat from "@lib/utils/dateFormat";
import { markdownify } from "@lib/utils/textConverter";
import { DiscussionEmbed } from "disqus-react";
import { MDXRemote } from "next-mdx-remote";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
import Post from "./partials/Post";
import Sidebar from "./partials/Sidebar";
import shortcodes from "./shortcodes/all";
const BASE_URL = 'https://the12thman.in/';

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import { useRouter } from 'next/router';

const { disqus } = config;
const { meta_author } = config.metadata;

const PostSingle = ({
  frontmatter,
  content,
  slug,
  relatedPosts,
  posts
}) => {
  let { tags, description, title, date, featuredImage, categories } = frontmatter;
  description = description ? description : content.slice(0, 120);

  const { theme } = useTheme();
  const author = frontmatter.author?.node?.name ? frontmatter.author?.node?.name : meta_author;
  // Local copy so we don't modify global config.
  let disqusConfig = config.disqus.settings;
  disqusConfig.identifier = frontmatter.disqusId
    ? frontmatter.disqusId
    : config.settings.blog_folder + "/" + slug;

      const router = useRouter();


  return (
    <Base title={title} description={description}>
      <section className="section single-blog mt-6">
        <div className="container">
          <div className="row">
            <div className="lg:col-8">
              <article>
                <div className="relative">
                  {featuredImage && (
                    <Image
                      src={featuredImage}
                      height="500"
                      width="1000"
                      alt={title}
                      className="rounded-lg"
                    />
                  )}
                  <ul className="absolute top-3 left-2 flex flex-wrap items-center">
                    {tags?.nodes.map(({name}, index) => (
                      <li
                        className="mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white"
                        key={"tag-" + index}
                      >
                        <Link
                          className="capitalize"
                          href={`/tag/${name.replace(" ", "-")}`}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {config.settings.InnerPaginationOptions.enableTop && (
                  <div className="mt-4">
                    <InnerPagination posts={posts} date={date} />
                  </div>
                )}
                    <div className='totalViews'>
                <ul className="flex items-center space-x-4">
                  <li>
                    <Link
                      className="inline-flex items-center font-secondary text-xs leading-3"
                      href="/about"
                    >
                      <FaUserAlt className="mr-1.5" />
                      {author}
                    </Link>
                  </li>
                  <li className="inline-flex items-center font-secondary text-xs leading-3">
                    <FaRegCalendar className="mr-1.5" />
                    {dateFormat(date)}
                  </li>
                </ul>
                  <ul id="social_link" className="list-inline">
                          <li className="list-inline-item">
                            <FacebookShareButton url={BASE_URL + router.asPath}>
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                          </li>
                          <li className="list-inline-item">
                            <PinterestShareButton
                              url={BASE_URL + router.asPath}
                            >
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
                  <div className="content mb-16">
                  <h1>{title}</h1>
                  <div
                    className="has-drop-cap-fluid"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></div>
                </div>
                {config.settings.InnerPaginationOptions.enableBottom && (
                  <InnerPagination posts={posts} date={date} />
                )}
              </article>
              <div className="mt-16">
                {disqus.enable && (
                  <DiscussionEmbed
                    key={theme}
                    shortname={disqus.shortname}
                    config={disqusConfig}
                  />
                )}
              </div>
            </div>
            <Sidebar
              posts={posts.filter((post) => post.slug !== slug)}
              categories={categories}
            />
          </div>
        </div>

        {/* Related posts */}
        <div className="container mt-20">
          <h2 className="section-title">Related Posts</h2>
          <div className="row mt-16">
            {relatedPosts.map((post, index) => (
              <div key={"post-" + index} className="mb-12 lg:col-4">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </Base>
  );
};

export default PostSingle;
