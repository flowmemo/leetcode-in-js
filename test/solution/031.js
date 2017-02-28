const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep
const util = require('util')

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
    const errMsg1 = 'input:\n' + util.inspect(origin, { colors: true }) + '\noutput:\n' +
      util.inspect(result, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert.deepStrictEqual(result, ans, errMsg1)

    const errMsg2 = 'original input:\n' + util.inspect(origin, { colors: true }) + '\nafter:\n' +
      util.inspect(input, { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(input, inputShouldBecome, errMsg2)
  }
}

module.exports = {
  data,
  checker
}
