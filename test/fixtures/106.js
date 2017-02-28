// 106. Construct Binary Tree from Inorder and Postorder Traversal
const BinaryTree = require('../BinaryTree.js')

const data = [
  {
    input: [[1, 2, 3, 4], [1, 3, 2, 4]],
    ans: [4, 2, null, 1, 3]

  },
  {
    input: [[1, 2, 3, 4, 5], [2, 1, 5, 4, 3]],
    ans: [3, 1, 4, null, 2, null, 5]
  }
]

const options = {
  outProcessor: output => BinaryTree.convertToArray(output)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
