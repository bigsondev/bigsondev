module.exports = {
  siteMetadata: {
    siteUrl: 'https://bigsondev.com/',
    domain: 'bigsondev.com',
    title: `| Adrian Bigaj | bigsondev.com`,
    description: `Learn Frontend faster with a seasoned Mentor. Get out of tutorials hell. Reach long-term goals, find your first IT job, and feel the real progress. Invest in yourself and make learning a breeze.`,
    keywords:
      'Frontend Mentor, Coding Help, React Expert, Top Developer, Learn How To Code, Web Developer, JavaScript, HTML, CSS, React, Change Your Career',
    author: `@BigsonDev`,
  },
  plugins: [
    'gatsby-plugin-mdx',
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
        name: `mdx`,
        path: `${__dirname}/src/mdx/`,
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
