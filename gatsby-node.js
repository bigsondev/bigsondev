/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === 'develop-html') {
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
          '~utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    });
  }

  if (stage === 'develop') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '~components': path.resolve(__dirname, 'src/components'),
          '~utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    });
  }
};
