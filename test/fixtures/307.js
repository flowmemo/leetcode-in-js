// 307. Range Sum Query - Mutable

const assert = require('assert')
const util = require('util')

function sumRange (...argv) {
  const operation = obj => obj.sumRange(...argv)
  operation.inspect = () => `sumRange(${argv})`
  return operation
}

function update (...argv) {
  const operation = obj => obj.update(...argv)
  operation.inspect = () => `update(${argv})`
  return operation
}

const data = [
  {
    input: [[1, 3, 5], sumRange(0, 2), update(1, 2), sumRange(0, 2)],
    ans: [9, 8]
  },
  {
    input: [[-28, -39, 53, 65, 11, -56, -65, -39, -43, 97], sumRange(5, 6), update(9, 27), sumRange(2, 3), sumRange(6, 7), update(1, -82), update(3, -72), sumRange(3, 7), sumRange(1, 8), update(5, 13), update(4, -67)],
    ans: [-121, 118, -104, -221, -293]
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
