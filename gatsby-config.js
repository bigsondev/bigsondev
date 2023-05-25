module.exports = {
  siteMetadata: {
    siteUrl: 'https://bigsondev.com/',
    domain: 'bigsondev.com',
    title: `| BigsonDev - bigsondev.com`,
    twitterHandle: '@BigsonDev',
    description: `Master Frontend faster with real-world projects, pull yourself out of tutorials hell - learn HTML, CSS, JS, and React the right way.`,
    keywords: [
      'React Expert',
      'React',
      'Figma designs',
      'GitHub automation',
      'Frontend Developer',
      'Frontend projects',
      'Frontend blog',
      'Software Engineer',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    author: `Adrian Bigaj`,
    social: {
      twitter: '@BigsonDev',
    },
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
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        trackPageViews: true,
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
        name: `assets`,
        path: `${__dirname}/src/assets`,
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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: '#137099',
        // Disable the loading spinner.
        showSpinner: false,
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
        description: `Master Frontend with real-world projects. Get out of tutorials hell - learn HTML, CSS, JS, React. Become a Frontend Developer, find a well-paid job, and feel the real progress.`,
        lang: 'en',
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
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [{ regex: '^/blog' }, { regex: '^/pills' }],
        excludePaths: ['/blog/', '/pills/'],
        height: 5,
        prependToBody: false,
        color: `#137099`,
        footerHeight: 1000,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          getBlogFeed({
            filePathRegex: `//mdx/blog//`,
            blogUrl: 'https://bigsondev.com/blog',
            output: '/blog/rss.xml',
            title: 'BigsonDev Blog RSS Feed',
          }),
          getBlogFeed({
            filePathRegex: `//mdx/pills//`,
            blogUrl: 'https://bigsondev.com/pills',
            output: '/pills/rss.xml',
            title: 'BigsonDev Pills RSS Feed',
          }),
        ],
      },
    },
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

function getBlogFeed({ filePathRegex, blogUrl, ...overrides }) {
  /**
   * These RSS feeds can be quite expensive to generate. Limiting the number of
   * posts and keeping each item's template lightweight (only using frontmatter,
   * avoiding the html/excerpt fields) helps negate this.
   */
  return {
    serialize: ({ query: { allMdx } }) => {
      const stripSlash = (slug) =>
        slug.startsWith('/') ? slug.slice(1) : slug;
      return allMdx.edges.map((edge) => {
        const url = `https://bigsondev.com/${stripSlash(
          edge.node.fields.slug
        )}`;

        return {
          author: 'Adrian Bigaj',
          title: edge.node.frontmatter.title,
          description: edge.node.frontmatter.desc,
          date: edge.node.frontmatter.date,
          url,
          guid: url,
          custom_elements: [
            {
              'content:encoded': `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                  <p>
                    Hello. I've just added a new article: <strong>"${edge.node.frontmatter.title}"</strong>, you can also: <a href="${url}">read it online</a>.
                    <br>
                    ${edge.node.frontmatter.desc}
                    <br>
                    If you would like to stay up to date with new articles, website updates, promotions, tips & tricks, you can <a href="https://bigsondev.com/#bigsondev-newsletter-landing">subscribe</a> to the newsletter.<br>
                    Happy Frontend coding!
                  </p>
                </div>`,
            },
          ],
        };
      });
    },
    query: `
       {
         allMdx(
           limit: 25,
           filter: {
             fileAbsolutePath: {regex: "${filePathRegex}"}
           }
           sort: { order: DESC, fields: [frontmatter___date] }
         ) {
           edges {
             node {
               fields {
                 slug
               }
               frontmatter {
                 title
                 desc
                 date
               }
             }
           }
         }
       }
     `,
    ...overrides,
  };
}
