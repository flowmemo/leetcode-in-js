// 283. Move Zeroes

const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep
const util = require('util')

const data = [
  {
    input: [[0, 1, 0, 3, 12]],
    inputShouldBecome: [[1, 3, 12, 0, 0]]
  }
]

const checker = function (fsolve, data, option) {
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
