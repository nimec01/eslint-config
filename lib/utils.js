const fs = require('node:fs');
const path = require('node:path');

exports.isInstalled = (packageName) => {
  if (!packageName) {
    throw new Error('Package name is required');
  }

  try {
    require(packageName);
  } catch {
    return false;
  }

  return true;
};

exports.isTypeScriptProject = () =>
  fs.existsSync(path.resolve('.', 'tsconfig.json'));

exports.createConfig = ({
  typescript = false,
  react = false,
  prettier = true,
  ignorePlugins = [],
  ignoreRules = [],
  ignoreConfigs = [],
  extraPlugins = [],
  extraRules = {},
  extraConfigs = [],
  overridePlugins,
  overrideConfigs,
  overrideRules,
  overrideWipeRules = false,
} = {}) => {
  const ignorePatterns = ['node_modules/', 'dist/', 'build/'];
  let extendConfigs = [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@cspell/recommended',
  ];
  let plugins = [
    'import',
    'unused-imports',
    'no-secrets',
    'unicorn',
    'sonarjs',
  ];
  let rules = [['no-unused-vars', 'off']];

  // Extend configs
  if (typescript) {
    if (react) {
      extendConfigs.push(
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        ...extraConfigs,
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript'
      );
    } else {
      extendConfigs.push(
        ...extraConfigs,
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base'
      );
    }
  } else if (react) {
    extendConfigs.push(
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      ...extraConfigs,
      'airbnb'
    );
  } else {
    extendConfigs.push(...extraConfigs, 'airbnb-base');
  }

  extendConfigs = extendConfigs.filter(
    (config) => !ignoreConfigs.includes(config)
  );

  // Add plugins

  if (react) {
    plugins.push('react', 'react-hooks', 'jsx-a11y');
  }

  if (typescript) {
    plugins.push('@typescript-eslint');
  }

  plugins.push(...extraPlugins);

  if (prettier) {
    if (!ignorePlugins.includes('prettier')) plugins.push('prettier');
    if (!ignoreConfigs.includes('prettier')) extendConfigs.push('prettier');
    if (!ignoreRules.includes('prettier/prettier'))
      rules.push(['prettier/prettier', 'error']);
  }

  plugins = plugins.filter((plugin) => !ignorePlugins.includes(plugin));

  // Apply rules
  if (plugins.includes('import')) {
    rules.push(['import/prefer-default-export', 'off']);
  }
  if (plugins.includes('unused-imports')) {
    rules.push(
      ['unused-imports/no-unused-imports', 'error'],
      [
        'unused-imports/no-unused-vars',
        [
          'warn',
          {
            vars: 'all',
          },
        ],
      ]
    );
  }
  if (plugins.includes('unicorn')) {
    rules.push(
      [
        'unicorn/filename-case',
        [
          'error',
          {
            case: 'camelCase',
          },
        ],
      ],
      [
        'unicorn/prevent-abbreviations',
        [
          'warn',
          {
            checkFilenames: false,
          },
        ],
      ]
    );
  }
  if (plugins.includes('sonarjs')) {
    rules.push(['sonarjs/no-duplicate-string', 'off']);
  }
  if (plugins.includes('no-secrets')) {
    rules.push(['no-secrets/no-secrets', 'error']);
  }
  if (plugins.includes('react')) {
    rules.push(
      ['react/react-in-jsx-scope', 'off'],
      [
        'react/jsx-filename-extension',
        [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
      ],
      ['react/jsx-props-no-spreading', 'off'],
      [
        'react/button-has-type',
        [
          'error',
          {
            button: true,
            submit: true,
            reset: true,
          },
        ],
      ],
      ['react/require-default-props', 'off']
    );
  }
  if (plugins.includes('jsx-a11y')) {
    rules.push([
      'jsx-a11y/label-has-associated-control',
      [
        'error',
        {
          depth: 3,
        },
      ],
    ]);
  }

  rules.push(...Object.entries(extraRules));

  rules = rules.filter((rule) => !ignoreRules.includes(rule));

  const config = {
    ignorePatterns,
    extends: overrideConfigs || extendConfigs,
    plugins: overridePlugins || plugins,
    rules: overrideWipeRules
      ? overrideRules
      : {
          ...rules.reduce((accumulator, [key, value]) => {
            accumulator[key] = value;
            return accumulator;
          }, {}),
          ...overrideRules,
        },
  };

  if (typescript) {
    config.parser = '@typescript-eslint/parser';
  }

  if (react) {
    config.settings = {
      react: {
        version: 'detect',
      },
    };
  }

  return config;
};
