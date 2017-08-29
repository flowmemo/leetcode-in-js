const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray

const data = [
  {
    input: [[1, 2, 3]],
    ans: 2
  },
  {
    input: [[1, null, 2, null, 3]],
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
