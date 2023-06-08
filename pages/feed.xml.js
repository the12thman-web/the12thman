import RSS from 'rss';

const EXTERNAL_DATA_URL = 'https://the12thman.in';
import { getAllPosts } from '../utils/wpGraph';

function generateRssFeed(posts) {
 const site_url = EXTERNAL_DATA_URL;

 const feedOptions = {
  title: 'The 12th man times',
  description: 'Keep up to date with the latest trends in sports',
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  pubDate: new Date(),
  copyright: `Copyright © ${new Date().getFullYear()} The12thman.In`,
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
    });
 })
 return feed.xml();
}

function RSSFeed() {
    // getServerSideProps will do the heavy lifting
  }

  export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const posts = await getAllPosts('', '', 20);
    console.log('posts: ', posts?.nodes);
  
    // We generate the XML RSS with the posts data
    const feed = generateRssFeed(posts?.nodes);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(feed);
    res.end();
  
    return {
      props: {},
    };
  }

  export default RSSFeed;
