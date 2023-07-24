import { GET_ALL_POST_QUERY, GET_ALL_POST_WITH_CONTENT_QUERY, GET_CATEGORY_QUERY, GET_CATEGORY_SITEMAP_QUERY, GET_POST_SITEMAP_QUERY, GET_SINGLE_POST_QUERY, GET_TAG_QUERY, GET_TAG_SITEMAP_QUERY, GET_WEB_STORIES } from "constant/query";
import config from "@config/config.json";
const { getAllPostLog, getAllPostContentLog,
  getPostLog,
  getCategoryLog,
  getTagLog } = config.logging;
//Staging URL
// const API_URL = 'https://12thmanstaging.the12thman.in/graphql';
//Production URL
const API_URL = 'https://backendrsw.the12thman.in/graphql';


//Function to fetch graphQL API
async function fetchAPI(query = '', { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': '*',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    headers,
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });


  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}


//Function to fetch all posts by category , search or tag with specified limit
export async function getAllPosts(category = '', search = '', tag = '', limit = 10) {
  try {
    getAllPostLog && console.log('getAllPosts: ', category, search, tag, limit);
    const data = await fetchAPI(GET_ALL_POST_QUERY,
      {
        variables: { category, search, tag, limit },
      }
    );
    getAllPostLog && console.log(`Result of getAllPosts for ${data?.posts?.nodes?.length}  posts: `,data?.posts)
    return data?.posts;
  } catch (e) {
    console.log('Error Catched: ', err)
  }
}

//Function to fetch all posts including content by category , search or tag with specified limit
export async function getAllPostsWithContent(category = '', search = '', tag = '', limit = 3) {
  getAllPostContentLog && console.log('getAllPostsWithContent: ', category, search, tag, limit);
  try {
    const data = await fetchAPI(
      GET_ALL_POST_WITH_CONTENT_QUERY,
      {
        variables: { category, search, tag, limit },
      }
    );
    getAllPostContentLog && console.log(`Result of getAllPostsWithContent for ${data?.posts?.nodes?.length}  posts: `, data?.posts)
    return data?.posts;
  } catch (e) {
    console.log('Error Catched: ', err)
  }
}

//Function to fetch data of single post
export async function getPost(
  slug
) {
  getPostLog && console.log('getPost:', slug)
  try {
    const data = await fetchAPI(
      GET_SINGLE_POST_QUERY,
      {
        variables: { slug },
      }
    );

    getPostLog && console.log('getPost Result : ' + slug, data);
    return data?.post;
  } catch (e) {
    console.log('Error Catched: ', err)
  }
}

//Function to get data of category
export async function getCategory(catName) {
  try { 
    getCategoryLog && console.log('getCategory: ',catName )
    const data = await fetchAPI(
      GET_CATEGORY_QUERY,
      {
        variables: { catName },
      }
    );
    getCategoryLog && console.log('getCategory Result: '+catName, data?.categories)
    return data?.categories;
  } catch (e) {
    console.log('Error Catched: ', err)

  }
}

//Function to get data of tag
export async function getTag(tagName) {
  try {
    getTagLog && console.log(`getTag: `, tagName)
    const data = await fetchAPI(
      GET_TAG_QUERY,
      {
        variables: { tagName: [tagName] },
      }
    );

    getTagLog && console.log('getTag Result: ' + tagName, data?.tags);
    return data?.tags;
  } catch (e) {
    console.log('Error Catched: ', err)

  }
}

//Function to get data of posts for sitemap with pagination
export async function getPostForSiteMap(perPage, after = null) {
  try {
    const data = await fetchAPI(
      GET_POST_SITEMAP_QUERY,
      {
        variables: { perPage, after },
      }
    );
    return data?.posts;
  } catch (e) {
  }
}

//Function to get data of categories for sitemap with pagination
export async function getCategoryForSiteMap(perPage, after = null) {
  try {
    const data = await fetchAPI(
      GET_CATEGORY_SITEMAP_QUERY,
      {
        variables: { perPage, after },
      }
    );
    return data?.categories;
  } catch (e) {
    console.log(e)
  }
}


//Function to get data of tags for sitemap with pagination
export async function getTagsForSiteMap(perPage, after = null) {
  try {
    const data = await fetchAPI(
      GET_TAG_SITEMAP_QUERY,
      {
        variables: { perPage, after },
      }
    );
    return data?.tags;
  } catch (e) {
    console.log(e)
  }
}

//Function to get data of tags for sitemap with pagination
export async function getWebStories() {
  try {
    const data = await fetchAPI(
      GET_WEB_STORIES
    );
    console.log('Web story data', data);
    return data?.webStories;
  } catch (e) {
    console.log(e)
  }
}
