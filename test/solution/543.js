// 543. Diameter of Binary Tree

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[1, 2, 3, 4, 5]],
    ans: 3
  },
  {
    input: [[]],
    ans: 0
  },
  {
    input: [[1, 2, 3, 4, 5, null, null, 7, 8, 9, 10]],
    ans: 4
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
