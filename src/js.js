const {
  env,
  plugins,
  settings,
  project,
  commonRules,
  extendsCommon,
  extendsPrettierCommon
} = require('./common')

const js = {
  plugins,
  env,
  settings: settings(),
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    parser: 'babel-eslint',
    project: project(),
    sourceType: 'module',
    // plugins: ['partialApplication'],
    allowImportExportEverywhere: true
  },
  extends: [...extendsCommon, ...extendsPrettierCommon, 'prettier/babel'],
  rules: {
    ...commonRules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off'
    // 'node/no-unsupported-features/es-syntax': 'warn'
  }
}

module.exports = js
