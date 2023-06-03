const {
  base: basePlugins,
  react: reactPlugins,
  typescript: typescriptPlugins,
  alwaysLastTypescript: alwaysLastTypescriptPlugins,
} = require('./lib/plugins');
const {
  base: baseConfigs,
  react: reactConfigs,
  typescript: typescriptConfigs,
  alwaysLastTypescript: alwaysLastTypescriptConfigs,
} = require('./lib/configs');
const {
  base: baseRules,
  react: reactRules,
  typescript: typescriptRules,
} = require('./lib/rules');

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    ...baseConfigs,
    ...reactConfigs,
    ...typescriptConfigs,
    ...alwaysLastTypescriptConfigs,
  ],
  plugins: [
    ...basePlugins,
    ...reactPlugins,
    ...typescriptPlugins,
    ...alwaysLastTypescriptPlugins,
  ],
  rules: {
    ...baseRules,
    ...reactRules,
    ...typescriptRules,
  },
};
