// 26. Remove Duplicates from Sorted Array

const assert = require('assert')

const data = [
  {
    input: [[1, 1, 2]],
    ans: [1, 2]
  },
  {
    input: [[]],
    ans: []
  },
  {
    input: [[1]],
    ans: [1]
  },
  {
    input: [[1, 1, 2, 2]],
    ans: [1, 2]
  },
  {
    input: [[1, 2, 2]],
    ans: [1, 2]
  }
]

const checker = function (fsolve, data) {
  'use strict'
  for (const { input, ans } of data) {
    const len = fsolve(...input)
    input[0].length = len
    assert.deepEqual(input[0], ans)
  }
}

module.exports = {
  data,
  checker
}
