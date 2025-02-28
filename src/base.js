import cspell from '@cspell/eslint-plugin';
import eslint from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import noSecrets from 'eslint-plugin-no-secrets';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { createRequire } from 'node:module';

const airbnbBaseRules = createRequire(import.meta.url)(
  './airbnb-base-rules.json'
);

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
  {
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.cjs', '.mjs', '.jsx', '.json'],
          moduleDirectory: ['node_modules', 'src'],
        },
        typescript: {
          extensions: [
            '.js',
            '.cjs',
            '.mjs',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.d.ts',
          ],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
      'import-x/ignore': [
        'node_modules',
        String.raw`\.coffee`,
        String.raw`\.(scss|css|less)`,
        String.raw`\.json`,
        String.raw`\.hbs`,
        String.raw`\.svg`,
      ],
    },
  },
  // prettier
  prettierConfigRecommended,
  /**
   * Rules
   */
  {
    rules: {
      ...airbnbBaseRules,

      'max-classes-per-file': 'off',
      'no-restricted-syntax': 'off',
      'class-methods-use-this': 'off',
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_*$',
          argsIgnorePattern: '^_*$',
        },
      ],

      // cspell plugin
      '@cspell/spellchecker': [
        'error',
        {
          cspell: {
            words: ['nimec'],
          },
        },
      ],

      // unicorn plugin
      'unicorn/no-useless-undefined': 'off',
      'unicorn/no-array-for-each': 'off',

      // sonarjs plugin
      'sonarjs/todo-tag': 'off',
      'sonarjs/no-misused-promises': 'off',
      'sonarjs/no-hardcoded-secrets': 'off',
      'sonarjs/no-unused-vars': 'off',

      // import-x plugin
      'import-x/prefer-default-export': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/extensions': [
        'error',
        { extensions: ['.js', '.jsx', '.ts', '.tsx', '.svelte'] },
      ],
    },
  },
];
