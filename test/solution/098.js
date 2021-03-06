// 98. Validate Binary Search Tree
const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[1, 2, null, 3]],
    ans: false
  },
  {
    input: [[4, 2, 5, 1, 3]],
    ans: true
  },
  {
    input: [[1, 1]],
    ans: false
  }
]

const option = {
  inProcessor: input => input.map(buildFromArray)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
