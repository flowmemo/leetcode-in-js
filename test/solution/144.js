const buildFromArray = require('../binaryTree.js').buildFromArray

const data = [
  {
    input: [[1, 2, 3]],
    ans: [1, 2, 3]
  },
  {
    input: [[1, null, 2, null, 3]],
    ans: [1, 2, 3]
  },
  {
    input: [[1, 2, 3, null, null, 4]],
    ans: [1, 2, 3, 4]
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
