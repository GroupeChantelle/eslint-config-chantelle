import { overrides } from '../src'

describe('@nod/eslint-config-nod', () => {
  it('contains overrides', () => {
    expect(overrides.length).toBeGreaterThan(0)
  })
})
