const buildFromArray = require('../binaryTree.js').buildFromArray
const data = [
  {
    input: [[1, 2, 2, 3, 4, 4, 3]],
    ans: true
  },
  {
    input: [[1, 2, 2, null, 3, null, 3]],
    ans: false
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
