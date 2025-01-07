import { createRequire } from 'node:module';
import tsEslint from 'typescript-eslint';

import baseConfig from './base.js';

const airbnbTSRules = createRequire(import.meta.url)(
  './airbnb-typescript-rules.json'
);

export default tsEslint.config(...baseConfig, ...tsEslint.configs.recommended, {
  rules: {
    ...airbnbTSRules,
  },
});
