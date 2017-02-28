const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray

const data = [
  {
    input: [[1, 2, 3]],
    ans: [2, 1, 3]
  },
  {
    input: [[1, null, 2, null, 3]],
    ans: [1, 2, 3]
  },
  {
    input: [[1, 2, 3, null, null, 4]],
    ans: [2, 1, 4, 3]
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
