const {
  base: basePlugins,
  react: reactPlugins,
  alwaysLastReact: alwaysLastReactPlugins,
} = require('./lib/plugins');
const {
  base: baseConfigs,
  react: reactConfigs,
  alwaysLastReact: alwaysLastReactConfigs,
} = require('./lib/configs');
const { base: baseRules, react: reactRules } = require('./lib/rules');

module.exports = {
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [...basePlugins, ...reactPlugins, ...alwaysLastReactPlugins],
  extends: [...baseConfigs, ...reactConfigs, ...alwaysLastReactConfigs],
  rules: {
    ...baseRules,
    ...reactRules,
  },
};
