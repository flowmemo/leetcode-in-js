const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[3, 9, 20, null, null, 15, 7]],
    ans: [
      [3],
      [9, 20],
      [15, 7]
    ]
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
