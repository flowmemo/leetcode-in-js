// 116. Populating Next Right Pointers in Each Node
const assert = require('assert')
const util = require('util')
const BinaryTree = require('../../helper/BinaryTree.js')

const data = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7]],
    levelOrderTraversal: [[1], [2, 3], [4, 5, 6, 7]]

  },
  {
    input: [[1]],
    levelOrderTraversal: [[1]]
  }
]

const levelOrderCustom = function (root) {
  // for TreeLinkNode
  const res = []
  if (!root) return res
  let node = root
  while (node) {
    const curres = []
    const nextstart = node.left
    while (node) {
      curres.push(node.val)
      node = node.next
    }
    res.push(curres)
    node = nextstart
  }
  return res
}

const checker = function (fsolve, data, option = {}) {
  for (const {input, ans, levelOrderTraversal} of data) {
    const root = BinaryTree.buildFromArray(input[0])
    const result = fsolve(root)
    const errMsg1 = 'input:\n' + util.inspect(input, { colors: true }) + '\noutput:\n' +
      util.inspect(result, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert.deepStrictEqual(result, ans, errMsg1)

    const rootArrayAfter = BinaryTree.convertToArray(root)
    const errMsg2 = 'original input:\n' + util.inspect(input, { colors: true }) + '\nafter:\n' +
      util.inspect(rootArrayAfter, { colors: true }) + '\nexpected:\n' + util.inspect(input[0], { colors: true })
    assert.deepStrictEqual(rootArrayAfter, input[0], errMsg2)

    const levelOrderByCustom = levelOrderCustom(root)
    const errMsg3 = 'input:\n' + util.inspect(input, { colors: true }) + '\nafter:\n' +
      util.inspect(levelOrderByCustom, { colors: true }) + '\nexpected:\n' + util.inspect(levelOrderTraversal, { colors: true })
    assert.deepStrictEqual(levelOrderByCustom, levelOrderTraversal, errMsg3)
  }
}

module.exports = {
  data,
  checker
}
