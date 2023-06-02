module.exports = {
  base: {
    // eslint rules
    'no-unused-vars': 'off',

    // import rules
    'import/prefer-default-export': 'off',

    // prettier rules
    'prettier/prettier': 'error',

    // no-secrets rules
    'no-secrets/no-secrets': 'error',

    // unused-imports rules
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
      },
    ],

    // unicorn rules
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
      },
    ],

    // sonarjs rules
    'sonarjs/no-duplicate-string': 'off',
  },
  react: {
    // react rules
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'react/require-default-props': 'off',

    // jsx-a11y rules
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        depth: 3,
      },
    ],
  },
  typescript: {},
};
