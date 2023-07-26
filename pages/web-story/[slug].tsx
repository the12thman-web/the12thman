import { useAmp } from 'next/amp'
import { getWebStoriesBySlug } from "@lib/graphql";
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
    const data = await getWebStoriesBySlug(slug);
    console.log(data)

    if (!data.content) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        content: data?.content
      },
    };
  }

  return {
    props: {
    },
  };
};
