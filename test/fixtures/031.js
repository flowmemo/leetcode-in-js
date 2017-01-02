const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep

const data = [
  {
    input: [[1, 2, 3]],
    inputShouldBecome: [[1, 3, 2]]
  },
  {
    input: [[3, 2, 1]],
    inputShouldBecome: [[1, 2, 3]]
  },
  {
    input: [[1, 1, 5]],
    inputShouldBecome: [[1, 5, 1]]
  }
]

const checker = function (fsolve, data, options = {}) {
  const inProcessor = options.inProcessor || (d => d)
  const outProcessor = options.outProcessor || (d => d)
  for (const {input, ans, inputShouldBecome} of data) {
    const origin = cloneDeep(input)
    const result = outProcessor(fsolve(...inProcessor(input)))
    assert.deepStrictEqual(result, ans)
    assert.deepStrictEqual(input, inputShouldBecome)
  }
}

module.exports = {
  data,
  checker
}