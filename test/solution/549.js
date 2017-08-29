// 549. Binary Tree Longest Consecutive Sequence II

const { buildFromArray } = require('../../helper/BinaryTree')

const data = [
  {
    input: [[1, 2, 3]],
    ans: 2
  },
  {
    input: [[2, 1, 3]],
    ans: 3
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
