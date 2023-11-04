import { getPostForSiteMap } from '@lib/graphql';
import { format } from 'date-fns-tz';
import config from '@config/config.json';
const { postsPerPage, totalPosts } = config.sitemap;
const { base_url } = config.site;
const fs = require('fs');
const path = require('path');

const excludedFiles = [
  'sitemaps',
  'sitemap-yoast.xml',
  'scripts',
  'robots.txt',
  'main-sitemap.xsl',
  'logos',
  'images',
  'ads.txt',
  '.htaccess',
  '.DS_Store',
];

function generateSiteMap(posts) {
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
           <loc>${`${base_url}/${post.node.slug}`}</loc>
           <lastmod>${new Date(post.node.date).toISOString()}</lastmod>
       </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function generateSiteMapIndex(paths) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://the12thman.in/</loc>
     </url>
     <url>
       <loc>${`${base_url}/news-sitemap.xml`}/</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
     <loc>${`${base_url}/category-sitemap.xml`}</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
     <loc>${`${base_url}/tag-sitemap.xml`}</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
     <loc>${`${base_url}/web-stories-sitemap.xml`}</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     ${paths
            .map(path => {
                return `
       <url>
           <loc>${`${base_url}/${path}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
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
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Define the start and end dates
    const startDate = new Date('July 1, 2016');
    const endDate = new Date();

    // Change to start date in order to generate all files
    const currentDate = new Date(endDate);

    while (currentDate <= endDate) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        let fetchedPosts = [];

        for (let page = 1; page <= totalPages; page++) {
            const after =
                fetchedPosts.length > 0
                    ? fetchedPosts[fetchedPosts.length - 1].cursor
                    : null;
            const newPosts = await getPostForSiteMap(
                postsPerPage,
                after,
                month,
                year
            );

            if (!newPosts || newPosts.edges.length === 0) {
                // Stop fetching if there are no more posts or an error occurs
                break;
            }

            fetchedPosts = [...fetchedPosts, ...newPosts.edges];
        }
        // We generate the XML sitemap with the posts data
        const sitemap = generateSiteMap(fetchedPosts);

        const fileName = `sitemap_${year}_${month}.xml`;
        const filePath = path.join(process.cwd(), 'public', fileName);
        fs.writeFileSync(filePath, sitemap, { flag: 'w' });

        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    const folderPath = process.cwd() + '/public/';
    let files = fs.readdirSync(folderPath);
    // Filter out excluded files and directories
    files = files.filter(fileName => !excludedFiles.includes(fileName));

    const fileNames = files.map(fileName => path.join(fileName)).reverse();
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMapIndex(fileNames);
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
