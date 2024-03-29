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
                }
            }
        }`

export const GET_ALL_CATEGORY_POST_QUERY = ` query AllCategoricalPost{
  allRecentPosts: posts(
    where: {status: PUBLISH, orderby: {field: DATE, order: DESC}, search: "", tag: ""}
    first: 4
  ) {
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
  cricketPosts: posts(where: {categoryIn: ["2"]}, first: 5) {
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
  footballPosts: posts(where: {categoryIn: ["19"]}, first: 5) {
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
  nbaPosts: posts(where: {categoryIn: ["148"]}, first: 3) {
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
  ufcPosts: posts(where: {categoryIn: ["945"]}, first: 3) {
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
  motoGPosts: posts(where: {categoryIn: ["14228"]}, first: 3) {
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
`        

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
      title
    },
    trendingPosts: posts(
      where: {status: PUBLISH, orderby: {field: DATE, order: DESC}, categoryName: "", search: "", tag: ""}
      first: 10
    ) {
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
        query GetPosts($perPage: Int!, $after: String, $month: Int, $year: Int) {
      posts(first: $perPage, after: $after, where: { status: PUBLISH, dateQuery: {month: $month, year: $year} }) {
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

export const GET_WEB_STORIES_BY_SLUG_QUERY = `query GetAllWebStories($slug: String!) {
  webStoryBy(slug: $slug){
      content
      authorId
      id
  }
}`

export const GET_ALL_WEB_STORIES = `query getAllWebStories ($limit: Int!) {
  webStories(first: $limit) {
    nodes {
      slug
    }
  }
}`

export const GET_WEB_STORY_SITEMAP_QUERY = `query GetAllWebStories($perPage: Int!, $after: String) {
  webStories(first: $perPage, after: $after) {
   edges {
      cursor
      node {
        uri
      }
    }
  }
}`

export const GET_NEW_DATA_SITEMAP_QUERY = `query GetNewsSitemapQuery($after: String, $before: String ) {
  posts(after: $after, before: $before) {
    nodes {
      date
      id
      title
      slug
    }
  }
}`