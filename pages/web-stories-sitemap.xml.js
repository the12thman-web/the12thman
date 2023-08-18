import { getWebStoryForSiteMap } from "@lib/graphql";
import config from "@config/config.json";
const { catPostPerPage, catTotalPosts } = config.sitemap;
const {base_url} = config.site;

function generateSiteMap(webStories) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/web-stories</loc>
     </url>
     ${webStories
            .map((webStory) => {
                return `
       <url>
           <loc>${`${base_url}${webStory.node.uri}`}</loc>
        </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function WebStorySiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const totalPages = Math.ceil(catTotalPosts / catPostPerPage);
    let fetchedWebStories = [];

    for (let page = 1; page <= totalPages; page++) {
        const after = fetchedWebStories.length > 0 ? fetchedWebStories[fetchedWebStories.length - 1].cursor : null;
        const newWebStory = await getWebStoryForSiteMap(catPostPerPage, after);

        if (!newWebStory || newWebStory.edges.length === 0) {
            // Stop fetching if there are no more posts or an error occurs
            break;
        }

        fetchedWebStories = [...fetchedWebStories, ...newWebStory.edges];
    }

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(fetchedWebStories);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default WebStorySiteMap;
