import { readFromCache, writeToCache } from './cache';

const API_URL = 'https://staging.the12thman.in/graphql';

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // console.log('Query', query);
  // console.log('variables',variables)
  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
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

export async function getAllPosts(category = '', search = '') {
  console.log('get post called', category, search);
  // const cachedData = readFromCache('posts' + category);
  const cachedData = false;
  if (cachedData) {
    return cachedData?.posts;
  } else {
    const data = await fetchAPI(
      `
      query AllPosts($category: String!,$search: String!) {
          posts(where: {status: PUBLISH, orderby: {field: DATE, order: DESC},categoryName: $category, search:$search},first: 20) {
              nodes {
              author {
                  node {
                  name
                  }
              }
              categories {
                  nodes {
                  name
                  }
              }
              featuredImage {
                  node {
                  altText
                  sourceUrl
                  }
              }
              postId
              slug
              title
              tags {
                  nodes {
                  name
                  }
              }
              }
          }
      }
    `,
      {
        variables: { category, search },
      }
    );
    writeToCache('posts', data);
    return data?.posts;
  }
}

export async function getAllMenus() {
  console.log('getAllMenus: ', getAllMenus);
  const data1 = await fetchAPI(
    `
    query AllMenus {
        menus(where: {id: 7836}) {
            edges {
            node {
                menuItems(first: 200) {
                edges {
                    node {
                    label
                    id
                    parentId
                    uri
                    }
                }
                }
            }
            }
        }
    }
  `,
    {
      variables: {},
    }
  );

  const data2 = await fetchAPI(
    `
      query AllMenus {
        menus(where: {id: 7836}) {
          edges {
            node {
              menuItems(first: 100, after: "YXJyYXljb25uZWN0aW9uOjIzOTQ4NA==") {
                edges {
                  node {
                    label
                    id
                    parentId
                    uri
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
                }
              }
            }
          }
        }
  }
  `,
    {
      variables: {},
    }
  );
  data1.menus.edges[0].node.menuItems.edges.push(
    ...data2.menus.edges[0].node.menuItems.edges
  );
  // console.log('result',data1.menus.edges[0].node.menuItems.edges);

  return data1.menus;
}

export async function getPost(
  slug = 'fifa-news-fifa-world-cup-2022-brazil-vs-south-korea-squads-predicted-xi-dream11-prediction-and-winner-prediction'
) {
  const data = await fetchAPI(
    `query post($slug: ID!) {
  post(
    id: $slug
    idType: SLUG
  ) {
    author {
      node {
        name
      }
    }
    categories {
      nodes {
        name
      }
    }
    commentCount
    commentStatus
    comments {
      nodes {
        author {
          node {
            name
            email
          }
        }
        commentId
        content(format: RAW)
        date
        id
        parentId
      }
    }
    content(format: RENDERED)
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    id
    postId
    tags {
      nodes {
        name
      }
    }
    title
  }
}`,
    {
      variables: { slug },
    }
  );
  //   console.log("data", data);

  return data?.post;
}
