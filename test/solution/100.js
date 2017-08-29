const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[1, 2, null, 3], [1, 2, null, 3]],
    ans: true
  },
  {
    input: [[1], [2]],
    ans: false
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
