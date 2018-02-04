// 776. Split BST

const { buildFromArray, convertToArray } = require('../../helper/BinaryTree')

const data = [
  {
    input: [[4, 2, 6, 1, 3, 5, 7], 2],
    ans: [[2, 1], [4, 3, 6, null, null, 5, 7]]
  },
  {
    input: [[4, 2, 6, 1, 3, 5, 7], 3],
    ans: [[2, 1, 3], [4, null, 6, 5, 7]]
  }
]

const option = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  },
  outProcessor: output => output.map(convertToArray)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
