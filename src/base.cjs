const {
  base: basePlugins,
  alwaysLast: alwaysLastPlugins,
} = require('./lib/plugins.cjs');
const {
  base: baseConfigs,
  alwaysLast: alwaysLastConfigs,
} = require('./lib/configs.cjs');
const { base: baseRules } = require('./lib/rules.cjs');

module.exports = {
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  plugins: [...basePlugins, ...alwaysLastPlugins],
  extends: [...baseConfigs, ...alwaysLastConfigs],
  rules: {
    ...baseRules,
  },
};
