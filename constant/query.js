export const GET_ALL_POST_QUERY = ` query AllPosts($category: String!,$search: String!,$tag: String!, $limit:Int!) {
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
        }`


export const GET_ALL_POST_WITH_CONTENT_QUERY = `
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
      `;

export const GET_SINGLE_POST_QUERY = `query post($slug: ID!) {
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
  }`

export const GET_CATEGORY_QUERY = `query getCategory($catName: [String]!){
          categories(where: {slug: $catName}) {
          nodes {
            categoryId
            name
            description
          }
        }
      }`;

export const GET_TAG_QUERY = `query getTag($tagName: [String]){
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
      }`

export const GET_POST_SITEMAP_QUERY = `
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
      `;

export const GET_CATEGORY_SITEMAP_QUERY = `query GetAllCat($perPage: Int!, $after: String) {
  categories(first: $perPage, after: $after) {
   edges {
      cursor
      node {
        uri
      }
    }
  }
}`


export const GET_TAG_SITEMAP_QUERY = `query GetAllTag($perPage: Int!, $after: String) {
  tags(first: $perPage, after: $after) {
   edges {
      cursor
      node {
        uri
      }
    }
  }
}`