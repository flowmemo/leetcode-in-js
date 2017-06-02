// 297. Serialize and Deserialize Binary Tree

const assert = require('assert')
const { buildFromArray } = require('../../helper/BinaryTree.js')
const data = [
  {
    str: [1]
  },
  {
    str: [1, 2, 3, null, null, 4, 5]
  },
  {
    str: [null]
  },
  {
    str: [1, 2, null, 3, null, 4, null]
  },
  {
    str: [1, 2, 3, 4, 5, 6, 7, 8]
  }
]

const checker = function (fsolve, data) {
  'use strict'
  const { serialize, deserialize } = fsolve
  for (const { str } of data) {
    const tree1 = buildFromArray(str)
    const tree2 = buildFromArray(str)
    assert.deepEqual(tree1, tree2)
    const ret = deserialize(serialize(tree2))
    assert.deepEqual(tree1, ret)
  }
}
module.exports = {
  data,
  checker
}
