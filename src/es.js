const {
  env,
  settings,
  plugins,
  project,
  commonRules,
  commonRulesTs,
  extendsCommon,
  extendsPrettierCommon
} = require('./common')

const es = {
  env,
  plugins,
  settings: settings(),
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    parser: 'babel-eslint',
    // plugins: ['partialApplication'],
    project: project(),
    jsx: true,
    sourceType: 'module',
    allowImportExportEverywhere: true
    // babelOptions: {
    //   plugins: ['partialApplication']
    //   cwd: resolve('.'),
    //   babelrc: false,
    //   configFile: './babel.config.js',
    //   root: __dirname,
    //   rootMode: 'root'
    // }
  },
  extends: [...extendsCommon, ...extendsPrettierCommon, 'prettier/babel'],
  rules: {
    ...commonRules,
    ...commonRulesTs,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}

module.exports = es
