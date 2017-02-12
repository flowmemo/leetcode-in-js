// 450. Delete Node in a BST

const assert = require('assert')
const { buildFromArray } = require('../BinaryTree.js')

const data = [
  {
    input: [[5, 3, 6, 2, 4, null, 7], 4],
    ans: [2, 3, 5, 6, 7]
  }
]

const checker = function (fsolve, data) {
  'use strict'
  for (const {input, ans} of data) {
    const root = buildFromArray(input[0])
    input[0] = root
    const rootAfter = fsolve(...input)
    const array = []
    preorder(rootAfter, array)
    assert.deepStrictEqual(array, ans)
  }
}

module.exports = {
  data,
  checker
}

function preorder (root, res) {
  'use strict'
  if (!root) return
  preorder(root.left, res)
  res.push(root.val)
  preorder(root.right, res)
}
