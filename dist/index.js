'use strict';

var eslint = require('@eslint/js');
var globals = require('globals');
var noSecrets = require('eslint-plugin-no-secrets');
var cspell = require('@cspell/eslint-plugin');
var prettierConfigRecommended = require('eslint-plugin-prettier/recommended');
var unicorn = require('eslint-plugin-unicorn');
var importX = require('eslint-plugin-import-x');
var sonarjs = require('eslint-plugin-sonarjs');

var baseConfig = [
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.builtin,
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  /**
   * Plugins
   */
  // no-secrets
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'no-secrets': noSecrets,
    },
    rules: {
      'no-secrets/no-secrets': 'error',
    },
  },
  // cspell
  {
    plugins: {
      '@cspell': cspell,
    },
    rules: {
      '@cspell/spellchecker': 'error',
    },
  },
  // unicorn
  unicorn.configs['flat/all'],
  // sonarjs
  sonarjs.configs.recommended,
  // import-x
  importX.flatConfigs.recommended,
  // prettier
  prettierConfigRecommended,
  /**
   * Rules
   */
  {
    rules: {
      'no-console': 'error',
    },
  },
];

var index = {
  configs: {
    base: baseConfig,
  },
};

module.exports = index;
