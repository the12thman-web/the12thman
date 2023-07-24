import { getWebStories } from "../../lib/graphql";

export const getServerSideProps = async (context) => {
  if (context && context.res) {
    const { res, params } = context;
    const slug = params?.slug;

    // fetch your web story here 
    const {data} = await getWebStories();

    if (!data.webStory.content) {
      return {
        notFound: true,
      };
    }

    res.setHeader("content-type", "text/html");
    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
    res.write(data.webStory.content);
    res.end();
  }

  return {
    props: {},
  };
};

const StoryPage = () => {};

export default StoryPage;
