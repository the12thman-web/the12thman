import { getCategoryForSiteMap } from "@lib/graphql";
import config from "@config/config.json";
const { catPostPerPage, catTotalPosts } = config.sitemap;
const {base_url} = config.site;

function generateSiteMap(categories) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/category/</loc>
     </url>
     ${categories
            .map((category) => {
                return `
       <url>
           <loc>${`${base_url}${category.node.uri}`}</loc>
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
    const totalPages = Math.ceil(catTotalPosts / catPostPerPage);
    let fetchedCategories = [];

    for (let page = 1; page <= totalPages; page++) {
        const after = fetchedCategories.length > 0 ? fetchedCategories[fetchedCategories.length - 1].cursor : null;
        const newCategory = await getCategoryForSiteMap(catPostPerPage, after);

        if (!newCategory || newCategory.edges.length === 0) {
            // Stop fetching if there are no more posts or an error occurs
            break;
        }

        fetchedCategories = [...fetchedCategories, ...newCategory.edges];
    }

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(fetchedCategories);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
