const { env } = require('./common')
const js = require.resolve('./js')
const es = require.resolve('./es')
// const es = require('./es')
const ts = require.resolve('./ts')

const config = {
  overrides: [
    {
      files: ['**/*.js'],
      excludedFiles: ['**/*.test.{js,jsx}', '**/test/**/*.{js,jsx}'],
      extends: [js]
    },
    {
      files: ['**/*.test.{js,jsx}', '**/test/**/*.{js,jsx}'],
      env: {
        ...env,
        'jest/globals': true
      },
      extends: ['plugin:jest/recommended', js]
    },
    {
      files: ['**/*-es.ts'],
      excludedFiles: [
        // '**/*-ts.{ts,js,jsx}',
        '**/*.{d.ts,d.tsx}',
        '**/*.test.{ts,tsx}',
        '**/test/**/*.{ts,tsx}'
      ],
      extends: [es]
      // ...es()
    },
    {
      files: ['**/*.{ts,tsx}', '**/*.{d.ts,d.tsx}'],
      excludedFiles: [
        '**/*-es.ts',
        '**/*.test.{ts,tsx}',
        '**/test/**/*.{ts,tsx}'
      ],
      extends: [ts]
    },
    {
      env: {
        ...env,
        'jest/globals': true
      },
      files: ['**/*.test.{ts,tsx}', '**/test/**/*.{ts,tsx}'],
      excludedFiles: ['**/*-es.ts', '**/src/**/*.{ts,tsx}'],
      extends: ['plugin:jest/recommended', ts]
    }
  ]
}

module.exports = config
