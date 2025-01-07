# `@nimec/eslint-config`

> This is my personal [ESLint](https://eslint.org) config. Feel free to use it if you want.

ESLint v9 is supported as of version 2.0.0.
If you are interested in the documentation of the legacy config take a look at this [README](./README-v1.md)

## Used plugins and configs

- eslint-config-prettier
- eslint-plugin-prettier
- eslint-plugin-import-x
- eslint-plugin-no-secrets
- eslint-plugin-sonarjs
- eslint-plugin-unicorn
- eslint-plugin-jsx-a11y (only required for the react config)
- eslint-plugin-react (only required for the react config)
- eslint-plugin-react-hook (only required for the react config)
- eslint-plugin-react-refresh (only required for the react config)

This config also includes remnants of the Airbnb config.

## Installation

**Note:** Some package managers automatically install peer dependencies.

**Install (npm without/with peer dependencies)**:

```bash
npm install --save-dev eslint @nimec/eslint-config
```

```bash
npx install-peerdeps -D @nimec/eslint-config
```

**Install (yarn without/with peer dependencies)**:

```bash
yarn add -D eslint @nimec/eslint-config
```

```bash
npx install-peerdeps --yarn -D @nimec/eslint-config
```

**Install (pnpm without/with peer dependencies)**:

```bash
pnpm add -D eslint @nimec/eslint-config
```

```bash
npx install-peerdeps --pnpm -D @nimec/eslint-config
```

## Usage

This package provides several prebuilt configs:
- base
- typescript
- react

Example:
```js
import nimec from '@nimec/eslint-config';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nimec.configs.typescript,
  ...nimec.configs.react,
  {
    ignores: ['node_modules'],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.lint.json',
      },
    },
  },
  {
    rules: {
      // Custom rule overrides
    },
  },
];
```
