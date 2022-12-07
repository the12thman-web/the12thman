const API_URL = "https://the12thman.in/graphql";

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
    query AllPosts {
        posts(where: {status: PUBLISH, orderby: {field: DATE, order: DESC}},first: 20) {
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
      variables: {},
    }
  );

  return data?.posts;
}

export async function getAllCategories() {
  const data = await fetchAPI(
    `
    query AllMenus {
        menus {
            nodes {
            menuItems {
                nodes {
                url
                label
                parentId
                id
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
  console.log("data", data);

  return data?.menus;
}

export async function getPost(
  slug = "fifa-news-fifa-world-cup-2022-brazil-vs-south-korea-squads-predicted-xi-dream11-prediction-and-winner-prediction"
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
  // console.log("data", data);

  return data?.post;
}
