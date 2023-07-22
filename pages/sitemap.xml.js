import { getAllPosts, getPostForSiteMap } from "@lib/graphql";
import { format } from 'date-fns-tz';

const EXTERNAL_DATA_URL = 'https://the12thman.in';
function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/</loc>
     </url>
     ${posts
            .map((post) => {
                return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${post.node.slug}`}</loc>
           <lastmod>${format(new Date(post.node.date), 'yyyy-MM-dd HH:mm:ss XXX', { timeZone: 'IST' })}</lastmod>
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

        const postsPerPage = 100; // Set the number of posts to fetch per request
        const requiredPosts = 1000; // Set the total number of posts you want to fetch
        const totalPages = Math.ceil(requiredPosts / postsPerPage);
        let fetchedPosts = [];

        for (let page = 1; page <= totalPages; page++) {
            const after = fetchedPosts.length > 0 ? fetchedPosts[fetchedPosts.length - 1].cursor : null;
            const newPosts = await getPostForSiteMap(postsPerPage, after);

            if (!newPosts || newPosts.edges.length === 0) {
                // Stop fetching if there are no more posts or an error occurs
                break;
            }

            fetchedPosts = [...fetchedPosts, ...newPosts.edges];
        }

        // const posts = await getAllPosts('', '', 200);
        //consoel.log('POSTS: ', fetchedPosts);

        // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(fetchedPosts);

        res.setHeader('Content-Type', 'text/xml');
        // we send the XML to the browser
        res.write(sitemap);
        res.end();

        return {
            props: {},
        };
    }

    export default SiteMap;
