const {
  configs: {
    base: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      parserOptions,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      plugins,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      parser,
      ...base
    },
    recommended: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extends: _extends,
      ...recommended
    }
  }
} = require('@typescript-eslint/eslint-plugin')

module.exports = {
  ...base,
  ...recommended
}
