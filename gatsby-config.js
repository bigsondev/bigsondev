module.exports = {
  siteMetadata: {
    title: `| Adrian Bigaj | bigsondev.com`,
    description: `Do you want to read about Frontend, practice your coding skills, and get some mentorship? Everything in one place, available to you, now.`,
    author: `@bigsondev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `bigsondev-adrian-bigaj`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
