// 110. Balanced Binary Tree

const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7]],
    ans: true
  }, {
    input: [[1, 2, null, 3]],
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
