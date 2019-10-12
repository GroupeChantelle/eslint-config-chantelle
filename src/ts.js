const {
  env,
  plugins,
  settings,
  project,
  commonRules,
  commonRulesTs,
  extendsCommon,
  extendsPrettierCommon
} = require('./common')

const ts = {
  env,
  plugins,
  settings: settings(),
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: project(),
    sourceType: 'module',
    jsx: true
  },
  extends: [
    ...extendsCommon,
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ...extendsPrettierCommon
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript',
    // 'prettier/babel',
    // 'prettier/react'
  ],
  rules: {
    ...commonRules,
    ...commonRulesTs

    // 'node/no-missing-import': 'off'
    // 'simple-import-sort/sort': 'warn',
    // 'import/no-unresolved': 'off',
    // 'import/no-duplicates': 'warn',
    // 'import/newline-after-import': 'warn'
    // 'import/order': ['warn', { 'newlines-between': 'always' }],
    // 'import/first': 'warn'
  }
}

module.exports = ts
