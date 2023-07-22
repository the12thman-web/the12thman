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

  //consoel.log(API_URL)

  //consoel.log('res: ', res);
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts(category = '', search = '', tag='', limit = 20) {
  try {
    console.log('get post called: ', category, search, tag, limit);
    // const cachedData = readFromCache('posts' + category);
    const data = await fetchAPI(
      `
        query AllPosts($category: String!,$search: String!,$tag: String!, $limit:Int!) {
            posts(where: {status: PUBLISH, orderby: {field: DATE, order: DESC},categoryName: $category, search:$search,tag:$tag},first: $limit) {
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
                seo {
                    opengraphUrl
                    opengraphTitle
                    opengraphDescription
                    canonical
                    opengraphImage {
                      uri
                    }
                  }
                }
            }
        }
      `,
      {
        variables: { category, search,tag, limit },
      }
    );
    //consoel.log('data: ', data);
    return data?.posts;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}

export async function getRelatedPosts(category = '', search = '', tag='', limit = 3) {
  try {
    //consoel.log('get post called', category, search);
    // const cachedData = readFromCache('posts' + category);
    const data = await fetchAPI(
      `
        query AllPosts($category: String!,$search: String!,,$tag: String!, $limit:Int!) {
            posts(where: {status: PUBLISH, orderby: {field: DATE, order: DESC},categoryName: $category, search:$search,tag:$tag},first: $limit) {
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
                content(format: RENDERED)
                tags {
                    nodes {
                    name
                    }
                }
                seo {
                    opengraphUrl
                    opengraphTitle
                    opengraphDescription
                    canonical
                    opengraphImage {
                      uri
                      altText
                    }
                  }
                }
            }
        }
      `,
      {
        variables: { category, search, tag,limit },
      }
    );
    //consoel.log('related posts: ', data.posts.nodes[0]);
    return data?.posts;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}

//NOT IN USE FOR NOW
export async function getAllMenus() {
  //consoel.log('getAllMenus: ', getAllMenus);
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
    // //consoel.log('result',data1.menus.edges[0].node.menuItems.edges);

    return data1.menus;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}

export async function getPost(
  slug = 'ind-vs-sa-kuldeep-yadav-strikes-aiden-markram-reminds-of-shane-warne-with-a-spectacular-googly'
) {
  console.log("slug:", slug)
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
      seo {
          opengraphUrl
          opengraphTitle
          opengraphDescription
          canonical
          opengraphImage {
          uri
          }
        }
      title
    }
  }`,
      {
        variables: { slug },
      }
    );
    //   //consoel.log("data", data);

    console.log('getPostData for : '+ slug, data);
    return data?.post;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}

export async function getCategory(catName = 'chennai-super-kings') {
  //consoel.log('catName: ', catName);
  try {
    const data = await fetchAPI(
      `query getCategory($catName: [String]!){
          categories(where: {slug: $catName}) {
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
    //   //consoel.log("data", data);

    //consoel.log('data2: ', data);
    return data?.categories;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}

export async function getTag(tagName) {
  //consoel.log('tagName: ', tagName);
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

    console.log('tag data for: '+tagName, data);
    return data?.tags;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}

export async function getPostForSiteMap(perPage, after = null){
  try {
    //consoel.log('get post called', perPage, after);
    // const cachedData = readFromCache('posts' + category);
    const data = await fetchAPI(
      `
        query GetPosts($perPage: Int!, $after: String) {
      posts(first: $perPage, after: $after, where: { status: PUBLISH }) {
        edges {
          node {
            id
            title
            slug
            date
          }
          cursor
        }
      }
    }
      `,
      {
        variables: { perPage, after },
      }
    );
    //consoel.log('data: ', data);
    return data?.posts;
  } catch (e) {
    //consoel.log('ERROR', e);
  }
}
