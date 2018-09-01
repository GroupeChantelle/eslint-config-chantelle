/* eslint no-unused-expressions:0, better/explicit-return:0, fp/no-nil:0, fp/no-mutation:0, import/no-commonjs:0, fp/no-unused-expression:0 */

const { parserOptions, plugins, rules } = require('./index')

describe('@nod/eslint-config-nod', () => {
  test('contains parserOptions', () => {
    expect(Object.keys(parserOptions).length > 0).toBeTruthy()
  })
  test('contains plugins', () => {
    expect(Object.keys(plugins).length > 0).toBeTruthy()
  })
  test('contains rules', () => {
    expect(Object.keys(rules).length > 0).toBeTruthy()
  })
})
