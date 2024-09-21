import { expect, test } from '@jest/globals';
import { ESLint } from 'eslint';
import config from '../src/index';

test('typescript flavor should be linted correctly', async () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config.configs.typescript,
    fix: false,
  });

  const results = await eslint.lintFiles(['tests/typescript']);

  expect(results).toBeDefined();
  expect(results.length).toBe(2);

  expect(results.at(0).errorCount).toBe(10);
  expect(results.at(0).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 1,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: '@typescript-eslint/no-unused-vars',
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

  expect(results.at(1).errorCount).toBe(8);
  expect(results.at(1).messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 1,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: '@typescript-eslint/no-unused-vars',
        line: 2,
        column: 7,
      }),
      expect.objectContaining({
        ruleId: 'import-x/first',
        line: 4,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'sonarjs/unused-import',
        line: 4,
        column: 8,
      }),
      expect.objectContaining({
        ruleId: '@typescript-eslint/no-unused-vars',
        line: 4,
        column: 8,
      }),
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 4,
        column: 17,
      }),
      expect.objectContaining({
        ruleId: 'unicorn/no-process-exit',
        line: 6,
        column: 1,
      }),
      expect.objectContaining({
        ruleId: 'prettier/prettier',
        line: 7,
        column: 1,
      }),
    ])
  );
});
