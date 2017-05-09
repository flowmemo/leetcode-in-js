// 48. Rotate Image

const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep
const util = require('util')

const data = [
  {
    input: [[[1]]],
    inputShouldBecome: [[[1]]]
  },
  {
    input: [[[1, 2], [3, 4]]],
    inputShouldBecome: [[[3, 1], [4, 2]]]
  },
  {
    input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
    inputShouldBecome: [[[7, 4, 1], [8, 5, 2], [9, 6, 3]]]
  }
]

const checker = function (fsolve, data, options) {
  'use strict'
  for (const { input, inputShouldBecome } of data) {
    const origin = cloneDeep(input)
    fsolve(...input)
    const errMsg = 'original input:\n' + util.inspect(origin, { colors: true }) + '\nafter:\n' +
      util.inspect(input[0], { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(input[0], inputShouldBecome[0], errMsg)
  }
}

module.exports = {
  data,
  checker
}
