module.exports = {
  siteMetadata: {
    siteUrl: 'https://bigsondev.com/',
    title: `| Adrian Bigaj | bigsondev.com`,
    description: `Learn Frontend by reading articles on the blog, practice your skills by building real-world projects in the library, and skyrocket your career by deciding on individual Mentorship.`,
    keywords:
      'frontend, mentor, coaching, coding, javascript, html, css, coding challenges, coding practice, tutorials, tutoring, blog, library, skyrocket career, carrer change, improve, learn',
    author: `@BigsonDev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2061027,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `library`,
        path: `${__dirname}/src/mdx/library/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/mdx/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/mdx`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          library: require.resolve('./src/components/layout/LibraryLayout.js'),
          blog: require.resolve('./src/components/layout/BlogLayout.js'),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BigsonDev`,
        short_name: `BigsonDev`,
        start_url: `/`,
        background_color: `#5BAAE7`,
        theme_color: `#5BAAE7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        pure: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
          options: {
            classIdPrefix: true,
          },
        },
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [
    //       `/`,
    //       `/blog/`,
    //       `/library/`,
    //       `/mentorship/`,
    //       `/reach-out/`,
    //       `/privacy-policy/`,
    //       `/404/`,
    //     ],
    //   },
    // },
  ],
};
