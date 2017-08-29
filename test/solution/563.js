// 563. Binary Tree Tilt

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[1, 2, 3]],
    ans: 1
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
