import tsEslint from 'typescript-eslint';

import baseConfig from './base.js';

export default tsEslint.config(...baseConfig, ...tsEslint.configs.recommended);
