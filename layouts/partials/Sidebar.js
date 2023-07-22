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
import MailchimpSubscribe from "react-mailchimp-subscribe";
const { blog_folder } = config.settings;
const { about, featured_posts, newsletter,categoriesConfig } = config.widgets;

const Sidebar = ({ posts, categories, className }) => {
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post
  );

  const [showRecent, setShowRecent] = useState(true);

  return (
    <aside className={`${className} px-0 lg:px-6 lg:col-4`}>
     

    

      {/* featured widget */}
      {featured_posts.enable && (
        <div className=" rounded border border-border p-6 dark:border-darkmode-border">
          <h4 className="section-title mb-12 text-center">{featured_posts.title}</h4>
          {sortPostByDate
                .slice(0, featured_posts.showPost)
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
                        <Link
                          href={`/${post.slug}`}
                          className="block hover:text-primary"
                        >
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
                ))
            }
        </div>
      )}

      {/* newsletter */}
      {newsletter.enable && (
        <div className="mt-6  rounded border border-border p-6 text-center dark:border-darkmode-border">
          <h4 className="section-title">{newsletter.title}</h4>
          <p className="mt-10 text-xs">{newsletter.content}</p>
          <MailchimpSubscribe
            url={newsletter.malichip_url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                onValidated={(formData) => subscribe(formData)}
                status={status}
                message={message}
              />
            )}
          />
          <p className="text-xs">
            By Singing Up, You Agree To
            <Link
              href={newsletter.privacy_policy_page}
              className="ml-1 text-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;