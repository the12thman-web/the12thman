import { useAmp } from 'next/amp'
import { getWebStories } from "../../lib/graphql";
export const config = { amp: true }

const WebStory = ({ content }) => {

  const isAmp = useAmp();
  console.log('isAmp', isAmp)
  return <div>{isAmp && <div
    className="has-drop-cap-fluid"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div> }
</div>
};

export default WebStory


export const getServerSideProps = async (context) => {
  if (context && context.res) {
    const { res, params } = context;
    const slug = params?.slug;

    // fetch your web story here 
    const data = await getWebStories();
    if (!data.nodes || !data.nodes.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        content: data?.nodes[1].content
      },
    };
  }

  return {
    props: {
    },
  };
};
