module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'plugin:mdx/recommended'],
  rules: {
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['~components', './src/components'],
        ['~modules', './src/modules'],
        ['~utils', './src/utils'],
      ],
    },
  },
};
