// 563. Binary Tree Tilt

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[1, 2, 3]],
    ans: 1
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
