// 513. Find Bottom Left Tree Value

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[2, 1, 3]],
    ans: 1
  },
  {
    input: [[1, 2, 3, 4, null, 5, 6, null, null, 7]],
    ans: 7
  },
  {
    input: [[1, 2, 3, null, 4, 5, null, 6]],
    ans: 6
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
