const { resolve } = require('path')

const extendsCommon = [
  'eslint:recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  require.resolve('./ts-recommended')
]

const extendsPrettierCommon = [
  'plugin:prettier/recommended',
  // 'prettier',
  'prettier/@typescript-eslint'
  // 'prettier/babel'
]

const commonRules = {
  'no-console': 'warn',
  'prettier/prettier': 'warn',
  '@typescript-eslint/no-explicit-any': 'off'
}

const commonRulesTs = {}

const project = () =>
  !process.env.ESLINTRC_ROOT
    ? ['./tsconfig.json', resolve('..', './tsconfig.json')]
    : ['./tsconfig.json']

const env = {
  browser: true,
  es6: true,
  node: true
}

const plugins = [
  // 'import',
  '@typescript-eslint',
  'babel',
  'node',
  'autofix',
  'prettier',
  'simple-import-sort',
  'jest'
]

const settings = () => ({
  // 'import/resolver': 'node'
  // 'import/core-modules': ['core-js'],
  // 'import/parsers': {
  //   '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.js', '.jsx']
  // },
  // 'import/resolver': {
  //   typescript: { path: resolve('.') }
  // }
  node: {
    // allowModules: ['electron'],
    resolvePaths: [
      resolve('.'),
      resolve('..'),
      resolve('..', '..'),
      resolve('..', '..', 'neutrino'),
      resolve('..', '..', 'neutrino', 'packages')
    ],
    tryExtensions: [
      '.js',
      '.json',
      '.node',
      '.esm',
      '.mjs',
      '.ts',
      '.ts.d',
      '.jsx',
      '.tsx'
    ]
  }
})

const parserOptions = {}
module.exports = {
  parserOptions,
  env,
  settings,
  project,
  commonRules,
  commonRulesTs,
  extendsPrettierCommon,
  extendsCommon,
  plugins
}
