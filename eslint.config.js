import configs from './src/index.js';

export default [
  ...configs.configs.base,
  {
    ignores: [
      '**/tests/base',
      '**/tests/typescript',
      '**/tests/react',
      '**/dist',
    ],
  },
];
