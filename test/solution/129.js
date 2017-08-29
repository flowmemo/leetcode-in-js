// 129. Sum Root to Leaf Numbers
const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const data = [
  {
    input: [[1, 2, 3]],
    ans: 25
  },
  {
    input: [[]],
    ans: 0
  },
  {
    input: [[1, 2]],
    ans: 12
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
