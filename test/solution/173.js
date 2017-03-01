// 173. Binary Search Tree Iterator
const assert = require('assert')
const util = require('util')
const {buildFromArray} = require('../../helper/BinaryTree.js')
const data = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
  },
  {
    input: [[1, 2, 3, null, 5, 6, 7, null, 8, 9, 10]]
  }
]

function checker (BSTIterator, data) {
  'use strict'
  for (const {input} of data) {
    const root = buildFromArray(input[0])
    const it = new BSTIterator(root)
    const output = []
    while (it.hasNext()) output.push(it.next())
    const ans = inorder(root)
    const errMsg = 'input:\n' + util.inspect(input, { colors: true }) + '\noutput:\n' +
      util.inspect(output, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert.deepEqual(output, ans, errMsg)
  }
}

function inorder (root) {
  'use strict'
  const arr = []
  const stk = []
  let node = root
  while (node || stk.length) {
    if (node) {
      stk.push(node)
      node = node.left
    } else {
      node = stk.pop()
      arr.push(node.val)
      node = node.right
    }
  }
  return arr
}

module.exports = {
  data,
  checker
}
