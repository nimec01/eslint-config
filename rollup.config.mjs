import copy from 'rollup-plugin-copy';

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
    'node:module',
    'typescript-eslint',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react-refresh',
  ],
  plugins: [
    copy({
      targets: [{ src: 'src/*.json', dest: 'dist' }],
    }),
  ],
};
