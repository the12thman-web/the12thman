import { GET_ALL_POST_QUERY, GET_ALL_POST_WITH_CONTENT_QUERY, GET_CATEGORY_QUERY, GET_CATEGORY_SITEMAP_QUERY, GET_POST_SITEMAP_QUERY, GET_SINGLE_POST_QUERY, GET_TAG_QUERY, GET_TAG_SITEMAP_QUERY, GET_WEB_STORIES_BY_SLUG_QUERY, GET_WEB_STORY_SITEMAP_QUERY, GET_ALL_WEB_STORIES, GET_NEW_DATA_SITEMAP_QUERY, GET_ALL_CATEGORY_POST_QUERY } from "constant/query";
import config from "@config/config.json";
const { getAllPostLog, getAllPostContentLog, getPostLog, getCategoryLog, getTagLog, getWebStoryLog } = config.logging;

const API_URL = 'https://backendrsw.the12thman.in/graphql';

async function fetchAPI(query = '', { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': '*',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
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

const postCache = {};

export async function getAllPosts(category = '', search = '', tag = '', limit = 20) {
  try {
    const cacheKey = `${category}-${search}-${tag}-${limit}`;
    if (postCache[cacheKey]) {
      return postCache[cacheKey];
    }

    getAllPostLog && console.log('getAllPosts: ', category, search, tag, limit);
    const data = await fetchAPI(GET_ALL_POST_QUERY, {
      variables: { category, search, tag, limit },
    });

    const posts = data?.posts;

    postCache[cacheKey] = posts;

    getAllPostLog && console.log(`Result of getAllPosts for ${posts?.nodes?.length} posts: `, posts);
    return posts;
  } catch (err) {
    console.log('Error Caught: ', err);
    throw err;
  }
}

const postContentCache = {};

export async function getAllPostsWithContent(category = '', search = '', tag = '', limit = 3) {
  try {
    const cacheKey = `${category}-${search}-${tag}-${limit}`;
    if (postContentCache[cacheKey]) {
      return postContentCache[cacheKey];
    }

    getAllPostContentLog && console.log('getAllPostsWithContent: ', category, search, tag, limit);
    const data = await fetchAPI(GET_ALL_POST_WITH_CONTENT_QUERY, {
      variables: { category, search, tag, limit },
    });

    const posts = data?.posts;

    postContentCache[cacheKey] = posts;

    getAllPostContentLog && console.log(`Result of getAllPostsWithContent for ${posts?.nodes?.length} posts: `, posts);
    return posts;
  } catch (err) {
    console.log('Error Caught: ', err);
    throw err;
  }
}

export async function getCategoricalPosts() {
  try {
    const data = await fetchAPI(GET_ALL_CATEGORY_POST_QUERY,{});
    return data;
  } catch (e) {
    console.log('Error Caught: ', e);
  }
}

export async function getPost(slug) {
  getPostLog && console.log('getPost:', slug);
  try {
    const data = await fetchAPI(GET_SINGLE_POST_QUERY, {
      variables: { slug },
    });

    getPostLog && console.log('getPost Result : ' + slug, data);
    return data;
  } catch (e) {
    console.log('Error Caught: ', e);
  }
}

export async function getCategory(catName) {
  try {
    getCategoryLog && console.log('getCategory: ', catName);
    const data = await fetchAPI(GET_CATEGORY_QUERY, {
      variables: { catName },
    });
    getCategoryLog && console.log('getCategory Result: ' + catName, data?.categories);
    return data?.categories;
  } catch (e) {
    console.log('Error Caught: ', e);
  }
}

export async function getTag(tagName) {
  try {
    getTagLog && console.log(`getTag: `, tagName);
    const data = await fetchAPI(GET_TAG_QUERY, {
      variables: { tagName: [tagName] },
    });

    getTagLog && console.log('getTag Result: ' + tagName, data?.tags);
    return data?.tags;
  } catch (e) {
    console.log('Error Caught: ', e);
  }
}

export async function getPostForSiteMap(perPage, after = null, month, year) {
  try {
    const data = await fetchAPI(GET_POST_SITEMAP_QUERY, {
      variables: { perPage, after, month, year },
    });
    return data?.posts;
  } catch (e) {
    console.log(e);
  }
}

export async function getCategoryForSiteMap(perPage, after = null) {
  try {
    const data = await fetchAPI(GET_CATEGORY_SITEMAP_QUERY, {
      variables: { perPage, after },
    });
    return data?.categories;
  } catch (e) {
    console.log(e);
  }
}

export async function getTagsForSiteMap(perPage, after = null) {
  try {
    const data = await fetchAPI(GET_TAG_SITEMAP_QUERY, {
      variables: { perPage, after },
    });
    return data?.tags;
  } catch (e) {
    console.log(e);
  }
}

export async function getWebStoriesBySlug(slug) {
  try {
    getWebStoryLog && console.log(`getWebStory: `, slug);
    const data = await fetchAPI(GET_WEB_STORIES_BY_SLUG_QUERY, {
      variables: { slug },
    });
    getWebStoryLog && console.log(`WebStory Result for ${slug}: `, data?.webStoryBy);
    return data?.webStoryBy;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllWebStories(limit) {
  try {
    const data = await fetchAPI(GET_ALL_WEB_STORIES, {
      variables: { limit },
    });
    return data?.webStories;
  } catch (error) {
    console.log(error);
  }
}

export async function getWebStoryForSiteMap(perPage, after = null) {
  try {
    const data = await fetchAPI(GET_WEB_STORY_SITEMAP_QUERY, {
      variables: { perPage, after },
    });
    return data?.webStories;
  } catch (e) {
    console.log(e);
  }
}

export async function getNewDataForSiteMap(after,before){
  try {
    const data = await fetchAPI(GET_NEW_DATA_SITEMAP_QUERY,{ variables : {after, before}})
    return data?.posts?.nodes
  } catch (e) {
    console.log(e);
  }
}