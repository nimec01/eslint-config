const {
  base: basePlugins,
  typescript: typescriptPlugins,
  alwaysLastTypescript: alwaysLastTypescriptPlugins,
} = require('./lib/plugins');
const {
  base: baseConfigs,
  typescript: typescriptConfigs,
  alwaysLastTypescript: alwaysLastTypescriptConfigs,
} = require('./lib/configs');
const { base: baseRules, typescript: typescriptRules } = require('./lib/rules');

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    ...baseConfigs,
    ...typescriptConfigs,
    ...alwaysLastTypescriptConfigs,
  ],
  plugins: [
    ...basePlugins,
    ...typescriptPlugins,
    ...alwaysLastTypescriptPlugins,
  ],
  rules: {
    ...baseRules,
    ...typescriptRules,
  },
};
