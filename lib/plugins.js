const { isInstalled } = require('./utils');

const prettierPlugins = isInstalled('prettier') ? ['prettier'] : [];

module.exports = {
  base: ['import', 'unused-imports', 'no-secrets', 'unicorn', 'sonarjs'],

  react: ['react', 'react-hooks', 'jsx-a11y'],

  typescript: ['@typescript-eslint'],

  alwaysLast: prettierPlugins,
  alwaysLastReact: prettierPlugins,
  alwaysLastTypescript: prettierPlugins,
};
