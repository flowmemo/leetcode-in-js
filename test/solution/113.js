// 113. Path Sum II
const buildFromArray = require('../binaryTree.js').buildFromArray
const data = [
  {
    input: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22],
    ans: [
      [5, 4, 11, 2],
      [5, 8, 4, 5]
    ]
  },
  {
    input: [[1, 2, null, 3], 3],
    ans: []
  },
  {
    input: [[1, 2], 2],
    ans: []
  }
]

const options = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  },
  outProcessor: output => {
    return output.sort()
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
