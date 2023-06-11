module.exports = {
  base: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],

  react: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

  typescript: ['plugin:@typescript-eslint/recommended'],

  alwaysLast: ['airbnb-base', 'prettier'],
  alwaysLastReact: ['airbnb', 'prettier'],
  alwaysLastTypescript: ["airbnb-base",'airbnb-typescript', 'prettier'],
};
