// 225. Implement Stack using Queues

const assert = require('assert')
const data = [
  {
    operations: ['MyStack', 'push', 'empty', 'top', 'push', 'push', 'pop'],
    params: [[], [1], [], [], [2], [3], []],
    ans: [undefined, undefined, false, 1, undefined, undefined, 3]
  }
]

const checker = function (Stack, data) {
  'use strict'
  for (const { operations, params, ans } of data) {
    const output = [undefined]
    const ms = new Stack()
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
