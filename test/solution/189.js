// 189. Rotate Array

const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep
const util = require('util')

let inputs = [
  [[1, 2, 3, 4, 5, 6, 7], 3],
  [[1, 2, 3, 4, 5, 6, 7], -4],
  [[1, 2, 3, 4, 5, 6, 7], 10],
  [[1, 2, 3, 4], 1]
]

let anses = [
  [5, 6, 7, 1, 2, 3, 4],
  [5, 6, 7, 1, 2, 3, 4],
  [5, 6, 7, 1, 2, 3, 4],
  [4, 1, 2, 3]
]

const data = [
]

for (let i = 0; i < inputs.length; ++i) {
  data.push({ input: inputs[i], inputShouldBecome: anses[i] })
}

const checker = function (fsolve, data, option) {
  'use strict'
  for (const { input, inputShouldBecome } of data) {
    const origin = cloneDeep(input)
    fsolve(...input)

    const errMsg = 'original input:\n' + util.inspect(origin, { colors: true }) + '\nafter:\n' +
      util.inspect(input[0], { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(input[0], inputShouldBecome, errMsg)
  }
}

module.exports = {
  data,
  checker
}
