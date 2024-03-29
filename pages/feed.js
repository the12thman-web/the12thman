import RSS from 'rss';
import { getAllPostsWithContent } from '@lib/graphql';

const EXTERNAL_DATA_URL = 'https://the12thman.in';

function generateRssFeed(posts) {
 const site_url = EXTERNAL_DATA_URL;

 const feedOptions = {
  title: 'The 12th man times',
  description: 'Keep up to date with the latest trends in sports',
  site_url: site_url,
  feed_url: `${site_url}/feed`,
  pubDate: new Date(),
  copyright: `Copyright © ${new Date().getFullYear()} The12thman.In`,
  // image_url: `${site_url}/images/logo 2.png`,
  description: 'The 12th man times',
  custom_elements: [
    {'content:encoded': 'The 12th man times'},
    {'snf': {'logo': { link: `${site_url}/images/logo 2.png`}}}
  ]
 };

 const feed = new RSS(feedOptions);
 posts.map(value => {
    const categories = value.categories?.nodes.map(val => {return val.name})
    feed.item({
        title:  value.title,
        url: `${site_url}/${value.slug}`, // link to the item
        guid: value.postId,
        categories: categories || [], // optional - array of item categories
        author: value.author?.node.name, // optional - defaults to feed author property
        date: value.date || new Date(),
        enclosure: {url:value.featuredImage?.node.sourceUrl}, // optional enclosure
        custom_elements: [
          {'content:encoded': {_cdata: value.content}},
          {'thumbnail': value.featuredImage?.node.sourceUrl}
        ]
    });
 })
 return feed.xml();
}

function RSSFeed() {
    // getServerSideProps will do the heavy lifting
  }


  export async function getServerSideProps({ res }) {
    const newPosts = await getAllPostsWithContent('', '', '', 20);

    // We generate the XML RSS with the posts data
    const feed = generateRssFeed(newPosts?.nodes);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(feed);
    res.end();
  
    return {
      props: {},
    };
  }

  export default RSSFeed;