const {
  base: basePlugins,
  alwaysLast: alwaysLastPlugins,
} = require('./lib/plugins');
const {
  base: baseConfigs,
  alwaysLast: alwaysLastConfigs,
} = require('./lib/configs');
const { base: baseRules } = require('./lib/rules');

module.exports = {
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  plugins: [...basePlugins, ...alwaysLastPlugins],
  extends: [...baseConfigs, ...alwaysLastConfigs],
  rules: {
    ...baseRules,
  },
};
