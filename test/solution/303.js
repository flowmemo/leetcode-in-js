// 303. Range Sum Query - Immutable

const assert = require('assert')
const util = require('util')

function sumRange (...argv) {
  const operation = obj => obj.sumRange(...argv)
  operation.inspect = () => `sumRange(${argv})`
  return operation
}

const data = [
  {
    input: [[-2, 0, 3, -5, 2, -1], sumRange(0, 2), sumRange(2, 5), sumRange(0, 5)],
    ans: [1, -1, -3]
  }
]

const checker = function (NumArray, data) {
  for (const {input, ans} of data) {
    const output = []
    const ns = new NumArray(input[0])
    for (let i = 1; i < input.length; ++i) {
      let r = input[i](ns)
      if (r !== undefined) output.push(r)
    }
    const errMsg = 'input:\n' + util.inspect(input, {colors: true}) + '\noutput:\n' +
    util.inspect(output, {colors: true}) + '\nans:\n' + util.inspect(ans, {colors: true})
    assert.deepStrictEqual(output, ans, errMsg)
  }
}

module.exports = {
  data,
  checker
}
