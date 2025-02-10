import { createRequire } from 'node:module';
import tsEslint from 'typescript-eslint';

import baseConfig from './base.js';

const airbnbTSRules = createRequire(import.meta.url)(
  './airbnb-typescript-rules.json'
);

export default tsEslint.config(...baseConfig, ...tsEslint.configs.recommended, {
  rules: {
    ...airbnbTSRules,

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'import',
        format: ['camelCase', 'PascalCase'],
      },

      {
        selector: 'variableLike',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_*$',
      },
    ],
  },
});
