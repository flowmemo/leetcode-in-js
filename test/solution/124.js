// 124. Binary Tree Maximum Path Sum

const { buildFromArray } = require('../../helper/BinaryTree.js')
const data = [
  {
    input: [[1, 2, 3]],
    ans: 6
  }
]
const options = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  }
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
