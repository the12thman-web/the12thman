import { getNewDataForSiteMap } from '@lib/graphql';
import config from '@config/config.json';
import { addDays, subDays } from 'date-fns';
const { base_url } = config.site;

function generateSiteMap(posts) {
  console.log(posts)
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/</loc>
     </url>
     ${posts
       .map(post => {
         return `
       <url>
           <loc>${`${base_url}/${post.slug}`}</loc>
           <lastmod>${new Date(post.date).toISOString()}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function NewSiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const today = new Date(); // The current date
  const after = subDays(today, 1);
  const before = addDays(today, 1);

  const newdata = await getNewDataForSiteMap(after, before);
  const sitemap = generateSiteMap(newdata);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default NewSiteMap;