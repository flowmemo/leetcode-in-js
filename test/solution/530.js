// 530. Minimum Absolute Difference in BST

const { buildFromArray } = require('../../helper/BinaryTree.js')
const data = [
  {
    input: [[1, null, 3, 2]],
    ans: 1
  }
]
const option = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  }
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
