module.exports = {
  base: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],

  react: ['plugin:react/recommended'],

  alwaysLast: ['airbnb-base', 'prettier'],
  alwaysLastReact: ['airbnb', 'prettier'],
};
