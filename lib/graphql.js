import { GET_ALL_POST_QUERY, GET_ALL_POST_WITH_CONTENT_QUERY, GET_CATEGORY_QUERY, GET_POST_SITEMAP_QUERY, GET_SINGLE_POST_QUERY, GET_TAG_QUERY } from "constant/query";

const API_URL = 'https://12thmanstaging.the12thman.in/graphql';
// const API_URL = 'https://backendrsw.the12thman.in/graphql';

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

export async function getAllPosts(category = '', search = '', tag = '', limit = 20) {
  try {
    console.log('get post called: ', category, search, tag, limit);
    const data = await fetchAPI(GET_ALL_POST_QUERY,
      {
        variables: { category, search, tag, limit },
      }
    );
    return data?.posts;
  } catch (e) {
  }
}

export async function getRelatedPosts(category = '', search = '', tag = '', limit = 3) {
  try {
    const data = await fetchAPI(
      GET_ALL_POST_WITH_CONTENT_QUERY,
      {
        variables: { category, search, tag, limit },
      }
    );
    return data?.posts;
  } catch (e) {
  }
}

export async function getPost(
  slug
) {
  console.log("slug:", slug)
  try {
    const data = await fetchAPI(
      GET_SINGLE_POST_QUERY,
      {
        variables: { slug },
      }
    );

    console.log('getPostData for : ' + slug, data);
    return data?.post;
  } catch (e) {
  }
}

export async function getCategory(catName) {
  try {
    const data = await fetchAPI(
      GET_CATEGORY_QUERY,
      {
        variables: { catName },
      }
    );

    return data?.categories;
  } catch (e) {
  }
}

export async function getTag(tagName) {
  try {
    const data = await fetchAPI(
      GET_TAG_QUERY,
      {
        variables: { tagName: [tagName] },
      }
    );

    console.log('tag data for: ' + tagName, data);
    return data?.tags;
  } catch (e) {
  }
}

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
