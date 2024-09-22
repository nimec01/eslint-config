import { expect, test } from '@jest/globals';
import { ESLint } from 'eslint';
import config from '../src/index';

test('react flavor should be linted correctly', async () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      ...config.configs.typescript,
      ...config.configs.react,
      {
        languageOptions: {
          parserOptions: {
            project: './tests/react/tsconfig.json',
          },
        },
      },
    ],
    fix: false,
  });

  const results = await eslint.lintFiles(['tests/react']);

  expect(results).toBeDefined();
  expect(results.length).toBe(3);

  expect(results.at(0).messages.length).toBe(6);
  expect(results.at(0).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'react-refresh/only-export-components',
        line: 1,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'react/function-component-definition',
        line: 1,
        column: 16,
      }),
      expect.objectContaining({
        ruleId: 'react/prop-types',
        line: 1,
        column: 19,
      }),
      expect.objectContaining({
        ruleId: 'unicorn/no-anonymous-default-export',
        line: 1,
        column: 24,
      }),
      expect.objectContaining({
        ruleId: 'arrow-body-style',
        line: 1,
        column: 27,
      }),
      expect.objectContaining({
        ruleId: 'react/jsx-no-useless-fragment',
        line: 2,
        column: 10,
      }),
    ])
  );

  expect(results.at(1).messages.length).toBe(3);
  expect(results.at(1).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'sonarjs/sonar-prefer-read-only-props',
        line: 7,
        column: 30,
      }),
      expect.objectContaining({
        ruleId: 'no-console',
        line: 9,
        column: 5,
      }),
      expect.objectContaining({
        ruleId: 'react-hooks/exhaustive-deps',
        line: 10,
        column: 6,
      }),
    ])
  );

  expect(results.at(2).messages.length).toBe(4);
  expect(results.at(2).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'react-refresh/only-export-components',
        line: 1,
        column: 14,
      }),
      expect.objectContaining({
        ruleId: 'sonarjs/no-empty-function',
        line: 1,
        column: 26,
      }),
      expect.objectContaining({
        ruleId: 'react/function-component-definition',
        line: 2,
        column: 20,
      }),
      expect.objectContaining({
        ruleId: 'react/jsx-no-useless-fragment',
        line: 2,
        column: 26,
      }),
    ])
  );
});
