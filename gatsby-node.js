/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ stage, actions, loaders, plugins }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /cash-dom/,
            use: loaders.null(),
          },
        ],
      },
      resolve: {
        alias: {
          '~components': path.resolve(__dirname, 'src/components'),
          '~modules': path.resolve(__dirname, 'src/modules'),
          '~utils': path.resolve(__dirname, 'src/utils'),
          '~assets': path.resolve(__dirname, 'src/assets'),
          '~svg': path.resolve(__dirname, 'src/svg'),
        },
      },
    });
  } else {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '~components': path.resolve(__dirname, 'src/components'),
          '~modules': path.resolve(__dirname, 'src/modules'),
          '~utils': path.resolve(__dirname, 'src/utils'),
          '~assets': path.resolve(__dirname, 'src/assets'),
          '~svg': path.resolve(__dirname, 'src/svg'),
        },
      },
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const blogQueryResult = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  const libraryQueryResult = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/library/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  const pillsQueryResult = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/pills/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (
    blogQueryResult.errors ||
    libraryQueryResult.errors ||
    pillsQueryResult.errors
  ) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = blogQueryResult.data.allMdx.edges;
  const libraryContent = libraryQueryResult.data.allMdx.edges;
  const pills = pillsQueryResult.data.allMdx.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node, next, previous }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/layout/BlogLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, next, previous },
    });
  });
  libraryContent.forEach(({ node, next, previous }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/layout/LibraryLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, next, previous },
    });
  });
  pills.forEach(({ node, next, previous }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/layout/BlogLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, next, previous },
    });
  });
};
