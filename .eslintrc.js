const { resolve } = require('node:path');

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
};
