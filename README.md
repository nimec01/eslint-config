# `@nimec/eslint-config`

> This is my personal [ESLint](https://eslint.org) config. Feel free to use it if you want.

## Flavors

You need to install some peer dependencies based on the flavor that you want to use. Depending on your package manager, you have to install them yourself.

### `base` - Javascript Only

**Included Configs:**

- eslint-config-airbnb-base
- eslint-config-prettier

**Included Plugins:**

- eslint-plugin-import
- eslint-plugin-no-secrets
- eslint-plugin-prettier
- eslint-plugin-sonarjs
- eslint-plugin-unicorn
- eslint-plugin-unused-imports

### `react` - React using Javascript Only

**Required Configs:**

- eslint-config-airbnb

**Required Plugins**:

- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y

### `typescript` - Typescript support

**Required Package:**

- @typescript-eslint/parser

**Required Plugins**:

- @typescript-eslint/eslint-plugin

### `react-typescript` - React using Typescript

**To use this you also need to install all packages/configs/plugins which are required for the 'react' and 'typescript' flavors**.

**Required Configs:**

- eslint-config-airbnb-typescript

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

## Extending this config

### Without specifying a flavor

Update your `.eslintrc` to extend this config. This will automatically determine your environment and select the corresponding flavor.

```plain
{
  ...,
  "extends": [
    ...,
    "@nimec/eslint-config"
  ],
  ...
}
```

### Specifying a flavor

Update your `.eslintrc` to extend this config.

```plain
{
  ...,
  "extends": [
    ...,
    "@nimec/eslint-config/<flavor>"
  ],
  ...
}
```

### Using `createConfig`

You can use the `createConfig` function exported by `@nimec/eslint-config/lib/utils` to generate a customized function. You can use the following settings to customize the result:

| Property          | Allowed values / type              | Default value | Description                                                                                                                                                          |
| --- | --- | --- | --- 
| typescript        | `true`, `false`                    | `false`       | Generate a config optimized for typescript                                                                                                                           |
| react             | `true`, `false`                    | `false`       | Generate a config optimized for react                                                                                                                                |
| prettier          | `true`, `false`                    | `true`        | Include `prettier`                                                                                                                                                   |
| ignoreConfigs     | `String[]`                         | `[]`          | Ignore default config(s)                                                                                                                                             |
| ignorePlugins     | `String[]`                         | `[]`          | Ignore default plugin(s)                                                                                                                                             |
| ignoreRules       | `String[]`                         | `[]`          | Ignore default rule(s)                                                                                                                                               |
| extraConfigs      | `String[]`                         | `[]`          | Config(s) to include                                                                                                                                                 |
| extraPlugins      | `String[]`                         | `[]`          | Plugin(s) to include                                                                                                                                                 |
| extraRules        | `{[key: String]: any}`              | `{}`          | Rule(s) to include                                                                                                                                                   |
| overrideConfigs   | `String[]`, `undefined`            | `undefined`   | Override config(s)                                                                                                                                                   |
| overridePlugins   | `String[]`, `undefined`            | `undefined`   | Override plugin(s)                                                                                                                                                   |
| overrideRules     | `{[key: String]: any}`, `undefined` | `undefined`   | Override rule(s)                                                                                                                                                     |     |
| overrideWipeRules | `true`, `false`                    | `false`       | Determines whether `overrideRules` keeps all rules not present in `overrideRules` or not. Setting this to `true` will only include rules present in `overrideRules`. |

Example: Default config without `prettier`

```js
const { createConfig } = require('@nimec/eslint-config/lib/utils');

module.exports = createConfig({
  prettier: false,
});
```

## Flavor specific configuration

### typescript / react-typescript

When using one of these flavors, you need to add the `parserOptions` key to your eslint config. Here is an example:

```plain
{
  ...,
  "parserOptions": {
    "ecmaVersion": 2022,
    "project": "./tsconfig.json"
  },
  "extends": [
    ...,
    "@nimec/eslint-config/typescript"
  ],
  ...
}
```

## FAQ

### How does this config determine which flavor to select?

React: The config checks whether the package `react` is installed or not.

Typescript: The config checks whether a `tsconfig.json` exists in the same directory as the eslint config.
