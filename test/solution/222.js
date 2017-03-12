// 222. Count Complete Tree Nodes

const { buildFromArray } = require('../../helper/BinaryTree.js')
const data = [
  {
    input: [[1, 2]],
    ans: 2
  },
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    ans: 10
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
