const { isInstalled } = require('./utils');

const prettierConfig = isInstalled('prettier') ? ['prettier'] : [];

module.exports = {
  base: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],

  react: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

  typescript: ['plugin:@typescript-eslint/recommended'],

  alwaysLast: ['airbnb-base', ...prettierConfig],
  alwaysLastReact: ['airbnb', ...prettierConfig],
  alwaysLastTypescript: [
    'airbnb-base',
    'airbnb-typescript/base',
    ...prettierConfig,
  ],
  alwaysLastReactTypescript: ['airbnb', 'airbnb-typescript', ...prettierConfig],
};
