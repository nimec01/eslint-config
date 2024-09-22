import { expect, test } from '@jest/globals';
import { ESLint } from 'eslint';
import config from '../src/index';

test('base flavor should be linted correctly', async () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config.configs.base,
    fix: false,
  });

  const results = await eslint.lintFiles(['tests/base']);

  expect(results).toBeDefined();
  expect(results.length).toBe(2);

  expect(results.at(0).messages.length).toBe(10);
  expect(results.at(0).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 1,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'no-unused-vars',
        line: 2,
        column: 7,
      }),
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 4,
        column: 22,
      }),
      expect.objectContaining({
        ruleId: 'no-console',
        line: 6,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 6,
        column: 13,
      }),
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 10,
        column: 3,
      }),
      expect.objectContaining({
        ruleId: 'no-secrets/no-secrets',
        line: 10,
        column: 3,
      }),
      expect.objectContaining({
        ruleId: '@cspell/spellchecker',
        line: 10,
        column: 11,
      }),
      expect.objectContaining({
        ruleId: '@cspell/spellchecker',
        line: 10,
        column: 26,
      }),
      expect.objectContaining({
        ruleId: '@cspell/spellchecker',
        line: 10,
        column: 52,
      }),
    ])
  );

  expect(results.at(1).messages.length).toBe(6);
  expect(results.at(1).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 1,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'no-unused-vars',
        line: 3,
        column: 8,
      }),
      expect.objectContaining({
        ruleId: 'sonarjs/unused-import',
        line: 3,
        column: 8,
      }),
      expect.objectContaining({
        ruleId: 'unicorn/no-process-exit',
        line: 5,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 6,
        column: 1,
      }),
    ])
  );
});
