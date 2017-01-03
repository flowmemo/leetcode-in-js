const buildFromArray = require('../binaryTree.js').buildFromArray
const data = [
  {
    input: [[3, 9, 20, null, null, 15, 7]],
    ans: [
      [3],
      [20, 9],
      [15, 7]
    ]
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
