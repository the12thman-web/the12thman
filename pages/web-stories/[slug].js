import { useAmp } from 'next/amp'
import { getWebStoriesBySlug, getAllWebStories } from "@lib/graphql";
import NotFound from '@layouts/404';
export const config = { amp: true }

const cleanStory = (content) => {
  let cleanContent = "";
  // remove all the line breaks
  cleanContent = content.replace(/\r?\n|\r/gs, "");
  // remove all the paragraphs wordpress might add
  cleanContent = cleanContent.replace(/<p>/gs, "");
  cleanContent = cleanContent.replace(/<\/p>/gs, "");

  return cleanContent
}

const WebStory = ({ content }) => {

  const isAmp = useAmp();
  console.log('isAmp', isAmp)
  return <div>{isAmp && content ? <div
    className="has-drop-cap-fluid"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div> : <NotFound title='Sorry 404! Webstory Not Found' />}
  </div>
};

export default WebStory


// category page routes
export const getStaticPaths = async () => {
  const allWebStories = await getAllWebStories(20);
  return {
    paths: allWebStories
      ? allWebStories.nodes.map(node => {
        console.log('static post path', '/web-stories/' + node.slug);
        return {
          params: {
            slug: `/web-stories/${node.slug}`
          }
        };
      }) || []
      : [],
    fallback: 'blocking',
  };
};

// category page data
export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  // fetch your web story here 
  const data = await getWebStoriesBySlug(slug);
  const content = cleanStory(data.content);
  return {
    props: {
      content
    },
  };
};

