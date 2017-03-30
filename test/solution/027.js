// 27. Remove Element

const assert = require('assert')

const data = [
  {
    input: [[3, 2, 2, 3], 3],
    ans: [2, 2]
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
