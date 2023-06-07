const EXTERNAL_DATA_URL = 'https://the12thman.in';
import { getAllPosts } from '../utils/wpGraph';
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/</loc>
     </url>
     ${posts
       .map(({ slug, date }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
           <lastmod>${date}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = await getAllPosts('', '', 200);
  console.log('posts: ', posts?.nodes);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts?.nodes);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;