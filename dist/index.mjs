import eslint from '@eslint/js';
import globals from 'globals';
import noSecrets from 'eslint-plugin-no-secrets';
import cspell from '@cspell/eslint-plugin';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import importX from 'eslint-plugin-import-x';
import sonarjs from 'eslint-plugin-sonarjs';

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

export { index as default };
