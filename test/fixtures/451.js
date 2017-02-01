// 451. Sort Characters By Frequency
const util = require('util')
const assert = require('assert')
const data = [
  {
    input: ['tree'],
    ans: ['eetr', 'eert']
  },
  {
    input: ['cccaaa'],
    ans: ['cccaaa', 'aaaccc']
  },
  {
    input: ['Aabb'],
    ans: ['bbAa', 'bbaA']
  }
]

function checker (fsolve, data) {
  'use strict'
  for (const {input, ans} of data) {
    const output = fsolve(...input)
    const errMsg = 'input:\n' + util.inspect(input, { colors: true }) + '\noutput:\n' +
      util.inspect(output, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert(ans.includes(output), errMsg)
  }
}

module.exports = {
  data,
  checker
}
