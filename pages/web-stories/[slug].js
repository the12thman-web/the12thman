import { useAmp } from 'next/amp'
import { getWebStoriesBySlug } from "@lib/graphql";
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
  ></div> : <NotFound title='Sorry 404! Webstory Not Found' /> }
</div>
};

export default WebStory


// category page routes
export const getStaticPaths = () => {
  // const allCategories = getTaxonomy(`content/${blog_folder}`, "categories");
  // const allCategories = [];
  // const paths = allCategories.map((category) => ({
  // 	params: {
  // 		category: category,
  // 	},
  // }));

  return { paths: [], fallback: 'blocking' };
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

