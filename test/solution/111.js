// 111. Minimum Depth of Binary Tree

const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7]],
    ans: 3
  },
  {
    input: [[1, 2, null, 3]],
    ans: 3
  },
  {
    input: [[1, 2]],
    ans: 2
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
