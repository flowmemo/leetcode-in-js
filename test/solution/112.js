// 112. Path Sum
const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, 1], 22],
    ans: true
  },
  {
    input: [[1, 2, null, 3], 3],
    ans: false
  },
  {
    input: [[1, 2], 2],
    ans: false
  }
]

const options = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
