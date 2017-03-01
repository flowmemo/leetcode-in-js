// 162. Find Peak Element

const assert = require('assert')
const util = require('util')
const data = [
  {
    input: [[1]]
  },
  {
    input: [[1, 2]]
  },
  {
    input: [[1, 2, 3]]
  },
  {
    input: [[1, 2, 3, 1]]
  }
]

const checker = function (fsolve, data) {
  'use strict'
  for (const {input} of data) {
    const arr = input[0]
    const output = fsolve(arr)
    const errMsg = 'input:\n' + util.inspect(input, { colors: true }) + '\noutput:\n' +
      util.inspect(output, { colors: true })

    assert(
      output >= 0 && output < arr.length &&
      (output === 0 || arr[output - 1] < arr[output]) &&
      (output === arr.length - 1 || arr[output + 1] < arr[output]), errMsg)
  }
}
module.exports = {
  data,
  checker
}

