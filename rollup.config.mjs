/** @type {import("rollup").RollupOptions} */
export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.cjs',
      format: 'cjs',
    },
    {
      file: './dist/index.mjs',
      format: 'es',
    },
  ],
  external: [
    '@eslint/js',
    'globals',
    'eslint-plugin-no-secrets',
    'eslint-plugin-unicorn',
    'eslint-plugin-sonarjs',
    'eslint-plugin-import-x',
    '@cspell/eslint-plugin',
    'eslint-plugin-prettier/recommended',
  ],
};
