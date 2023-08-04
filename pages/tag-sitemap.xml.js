import { getCategoryForSiteMap, getPostForSiteMap, getTagsForSiteMap } from "@lib/graphql";
import { format } from 'date-fns-tz';
import config from "@config/config.json";
const { tagPostPerPage, tagTotalPosts } = config.sitemap;
const {base_url} = config.site;

function generateSiteMap(tags) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/tags</loc>
     </url>
     ${tags
            .map((tag) => {
                return `
       <url>
           <loc>${`${base_url}${tag.node.uri}`}</loc>
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
    const totalPages = Math.ceil(tagTotalPosts / tagPostPerPage);
    let fetchedTags = [];

    for (let page = 1; page <= totalPages; page++) {
        const after = fetchedTags.length > 0 ? fetchedTags[fetchedTags.length - 1].cursor : null;
        const newTag = await getTagsForSiteMap(tagPostPerPage, after);

        if (!newTag || newTag.edges.length === 0) {
            // Stop fetching if there are no more posts or an error occurs
            break;
        }

        fetchedTags = [...fetchedTags, ...newTag.edges];
    }

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(fetchedTags);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
