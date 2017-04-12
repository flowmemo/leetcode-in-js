// 515. Find Largest Value in Each Tree Row

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[1, 3, 2, 5, 3, null, 9]],
    ans: [1, 3, 9]
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
