// 155. Min Stack

const assert = require('assert')
const data = [
  {
    operations: ['MinStack', 'push', 'push', 'push', 'push', 'getMin', 'pop', 'getMin', 'pop', 'getMin', 'pop', 'getMin'],
    params: [[], [2], [0], [3], [0], [], [], [], [], [], [], []],
    ans: [undefined, undefined, undefined, undefined, undefined, 0, undefined, 0, undefined, 0, undefined, 2]
  }
]

const checker = function (MinStack, data) {
  for (const {operations, params, ans} of data) {
    const output = [undefined]
    const ms = new MinStack()
    for (let i = 1; i < operations.length; ++i) {
      output.push(ms[operations[i]](...params[i]))
    }
    assert.deepStrictEqual(output, ans)
  }
}

module.exports = {
  data,
  checker
}
