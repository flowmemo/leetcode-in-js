// 107. Binary Tree Level Order Traversal II
const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[3, 9, 20, null, null, 15, 7]],
    ans: [
      [15, 7],
      [9, 20],
      [3]
    ]
  }
]

const options = {
  inProcessor: input => input.map(buildFromArray)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
