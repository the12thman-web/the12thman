const API_URL = 'https://backendrsw.the12thman.in/graphql';

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

  console.log('res: ', res);
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts(category = '', search = '', limit = 20) {
  try {
    console.log('get post called', category, search);
    // const cachedData = readFromCache('posts' + category);
    const data = await fetchAPI(
      `
        query AllPosts($category: String!,$search: String!, $limit:Int!) {
            posts(where: {status: PUBLISH, orderby: {field: DATE, order: DESC},categoryName: $category, search:$search},first: $limit) {
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
                date
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
        variables: { category, search, limit },
      }
    );
    console.log('data: ', data);
    return data?.posts;
  } catch (e) {
    console.log('ERROR', e);
  }
}

//NOT IN USE FOR NOW
export async function getAllMenus() {
  console.log('getAllMenus: ', getAllMenus);
  try {
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
  } catch (e) {
    console.log('ERROR', e);
  }
}

export async function getPost(
  slug = 'fifa-news-fifa-world-cup-2022-brazil-vs-south-korea-squads-predicted-xi-dream11-prediction-and-winner-prediction'
) {
  try {
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

    console.log('data: ', data);
    return data?.post;
  } catch (e) {
    console.log('ERROR', e);
  }
}

export async function getCategory(catName = 'chennai-super-kings') {
  console.log('catName: ', catName);
  try {
    const data = await fetchAPI(
      `query getCategory($catName: String!){
          categories(where: {nameLike: $catName}) {
          nodes {
            categoryId
            name
            description
          }
        }
      }`,
      {
        variables: { catName },
      }
    );
    //   console.log("data", data);

    console.log('data: ', data);
    return data?.categories;
  } catch (e) {
    console.log('ERROR', e);
  }
}

export async function getTag(tagName) {
  console.log('tagName: ', tagName);
  try {
    const data = await fetchAPI(
      `query getTag($tagName: [String]){
          tags(where:  {slug: $tagName}) {
          nodes {
            description
            link
            name
            slug
            tagId
            uri
          }
        }
      }`,
      {
        variables: { tagName: [tagName] },
      }
    );

    console.log('data: ', data);
    return data?.tags;
  } catch (e) {
    console.log('ERROR', e);
  }
}
