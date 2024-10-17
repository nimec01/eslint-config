import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { createRequire } from 'node:module';
import baseConfig from './base.js';

const airbnbReactRules = createRequire(import.meta.url)(
  './airbnb-react-rules.json'
);

export default [
  ...baseConfig,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
      },
      propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    },
    plugins: {
      'react-hooks': reactHooks,
      react,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...airbnbReactRules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'sonarjs/jsx-no-useless-fragment': 'off',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
