import cspell from '@cspell/eslint-plugin';
import eslint from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import noSecrets from 'eslint-plugin-no-secrets';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
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
      'import-x/first': 'error',
    },
  },
];
