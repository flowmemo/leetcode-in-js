// 226. Invert Binary Tree

const {buildFromArray, convertToArray} = require('../../helper/BinaryTree.js')
const data = [
  {
    input: [[4, 2, 7, 1, 3, 6, 9]],
    ans: [4, 7, 2, 9, 6, 3, 1]
  },
  {
    input: [[2]],
    ans: [2]
  }
]

const options = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  },
  outProcessor: convertToArray
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
